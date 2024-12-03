import LiveStream from "./components/Livestream";
const isToolbarOpen = true;

const LiveStreams = () => {
  return (
    <div>
      <LiveStream isToolbarOpen={isToolbarOpen} />
    </div>
  );
};

export default LiveStreams;
