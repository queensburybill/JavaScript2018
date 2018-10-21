import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import NowPlaying from "./NowPlaying/NowPlaying";
import Theatres from "./Theatres/Theatres";
import Movie from "./Movie/Movie";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={NowPlaying} />
          <Route exact path="/now-playing" component={NowPlaying} />
          <Route exact path="/theatres" component={Theatres} />
          <Route path="/movie/:title" component={Movie} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
