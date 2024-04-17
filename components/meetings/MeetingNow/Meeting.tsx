// "use clint";
// import React, { createContext, useEffect, useRef, useState } from "react";

// // Components
// import MeetingContent from "./MeetingContent/MeetingContent";
// import MeetingHeader from "./MeetingHeader";
// import { SOCKET } from "@/static/links";
// import { io } from "socket.io-client";
// import { getCookie } from "cookies-next";
// import MeetingStore from "@/store/meeting";
// import { usePathname } from "next/navigation";
// import Recorder from "recorder-js";

// // Context
// const MeetingContext = createContext({} as any);
// export { MeetingContext };

// export default function Meeting(props: { id: string }) {
//   console.log(props.id);
//   const [recorder, setRecorder] = useState<any>();
//   const [isRecording, setIsRecording] = useState(false);
//   const audioRef = useRef(null);

//   const startRecording = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       throw new Error("getUserMedia is not supported in this browser");
//     }

//     // Request access to the microphone
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     console.log("Audio stream:", stream);

//     // Create new AudioContext
//     const audioContext = new (window.AudioContext || window.AudioContext)();

//     // Initialize the recorder with the obtained audio stream
//     const newRecorder = new Recorder(audioContext);
//     await newRecorder.init(stream);

//     // Start recording
//     newRecorder.start();
//     console.log(newRecorder);
//     // Update state
//     setRecorder(newRecorder);
//     setIsRecording(true);
//   };
//   const stopRecording = () => {
//     if (recorder) {
//       recorder.stop().then(({ blob }: any) => {
//         // You can use the recorded blob here, for example, send it to the server
//         console.log(blob);

//         setRecorder(null);
//         setIsRecording(false);
//       });
//     }
//   };
//   const [showParticipants, setShowParticipants] = useState(false);
//   const [showChat, setShowChat] = useState(false);
//   const [showAddParticipants, setShowAddParticipants] = useState(false);
//   const { users, updateUsers } = MeetingStore();
//   const param = usePathname().split("/").pop();

//   useEffect(() => {
//     const socket = io(SOCKET, {
//       auth: {
//         Authorization: "Bearer " + getCookie("AccessToken"),
//       },
//     });
//     socket.emit("joinRoom", {
//       room: props.id,
//     });

//     socket.on("joinedRoom", (data: any) => {
//       if (data.room === props.id) {
//         updateUsers(data.users); // Update users state with new data
//       }
//     });

//     return () => {
//       socket.disconnect();
//     };
//     // Cleanup function to close WebSocket connection
//   }, []);

//   return (
//     <MeetingContext.Provider
//       value={{
//         showParticipants,
//         setShowParticipants,
//         showChat,
//         setShowChat,
//         showAddParticipants,
//         setShowAddParticipants,
//       }}
//     >
//       <button onClick={startRecording} disabled={isRecording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         Stop Recording
//       </button>
//       <audio ref={audioRef} controls />{" "}
//       {/* <div className="bg-white fixed top-0 left-0 w-full h-screen z-[3] overflow-y-auto transition-all">
//         <MeetingHeader />
//         <MeetingContent />
//       </div> */}
//     </MeetingContext.Provider>
//   );
// }
// AudioMeeting.jsx
import React, { useState, useEffect } from "react";
import AudioControls from "./AudioControles";
import RecordRTC from "recordrtc";

const AudioMeeting = () => {
  const [isMeetingActive, setIsMeetingActive] = useState(false);
  const [recorder, setRecorder] = useState<any>(null);

  // Meeting logic and UI elements here...
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false }) // Request audio only
    .then((stream) => {
      // Stream obtained, proceed with recording
      const recorder = new RecordRTC(stream, {
        type: "audio",
        mimeType: "audio/webm",
      });
    })
    .catch((error) => {
      console.error("Error accessing media devices:", error);
    });
  const handleJoinMeeting = async () => {
    // ... (Request to join meeting, initialize recorder)

    setRecorder(recorder);
    setIsMeetingActive(true);
  };

  const handleLeaveMeeting = async () => {
    // ... (Stop recording, handle cleanup)
    setIsMeetingActive(false);
  };

  return (
    <div>
      {/* Meeting participants list, etc. */}
      {isMeetingActive && <AudioControls recorder={recorder} />}
      <button
        onClick={isMeetingActive ? handleLeaveMeeting : handleJoinMeeting}
      >
        {isMeetingActive ? "Leave Meeting" : "Join Meeting"}
      </button>
    </div>
  );
};

export default AudioMeeting;

// AudioControls.jsx
