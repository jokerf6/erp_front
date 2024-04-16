import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5002"); // Connect to your NestJS server address

const App: React.FC = () => {
  const [room, setRoom] = useState<string>("");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });
  }, []);

  useEffect(() => {
    socket.on("joinedRoom", (room: string) => {
      createPeerConnection(room);
    });

    return () => {
      socket.off("joinedRoom");
    };
  }, []);

  const createPeerConnection = (room: string) => {
    const peerConnection = new RTCPeerConnection();
    peerConnectionRef.current = peerConnection;

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("iceCandidate", { candidate: event.candidate, room });
      }
    };

    peerConnection.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    localStream
      ?.getTracks()
      .forEach((track) => peerConnection.addTrack(track, localStream));

    peerConnection
      .createOffer()
      .then((offer) => peerConnection.setLocalDescription(offer))
      .then(() => {
        socket.emit("sessionDescription", {
          description: peerConnection.localDescription,
          room,
        });
      });
  };

  const handleJoinRoom = () => {
    socket.emit("joinRoom", room);
  };

  return (
    <div>
      <input
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={handleJoinRoom}>Join Room</button>
      <div>
        <h2>Local Stream</h2>
        {localStream && (
          <video
            autoPlay
            ref={(video: HTMLVideoElement) =>
              video && (video.srcObject = localStream)
            }
          />
        )}
      </div>
      <div>
        <h2>Remote Stream</h2>
        {remoteStream && (
          <video
            autoPlay
            ref={(video: HTMLVideoElement) =>
              video && (video.srcObject = remoteStream)
            }
          />
        )}
      </div>
    </div>
  );
};

export default App;
