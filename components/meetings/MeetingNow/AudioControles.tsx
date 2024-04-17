import React from "react";

const AudioControls = ({ recorder }: any) => {
  const handleStartRecording = () => {
    recorder.startRecording();
  };

  const handleStopRecording = () => {
    recorder.stopRecording(() => {
      // Handle recorded audio data here (download, save, etc.)
    });
  };

  return (
    <div>
      <button onClick={handleStartRecording}>Start Recording</button>
      <button onClick={handleStopRecording}>Stop Recording</button>
    </div>
  );
};

export default AudioControls;
