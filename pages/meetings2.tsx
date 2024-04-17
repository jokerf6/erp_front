import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function AudioMeeting() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const socket = io("ws://localhost:5002", {
      auth: {
        Authorization: "Bearer " + getCookie("AccessToken"),
      },
    });

    socket.emit("joinRoom", {
      room: "c7b7e95e-fc79-11ee-98ca-0a0027000008",
    });

    socket.on("joinedRoom", (data: any) => {
      console.log(data);
      setUsers(data.users); // Update users state with new data
    });

    return () => {
      socket.disconnect();
    };
    // Cleanup function to close WebSocket connection
  }, []);

  return (
    <div>
      <button className="text-black">Start Call</button>
      <div className="mt-[10px]">
        {users &&
          users.map((item: any, idx: number) => {
            return <h1 key={idx}>{item.user.name}</h1>;
          })}
      </div>
    </div>
  );
}
