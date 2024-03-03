import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
