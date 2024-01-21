import React from "react";
import Header from "./components/Header";
import FeaturedContent from "./components/FeaturedContent";
import MovieList from "./components/MovieList";
import NavigationBar from "./components/NavigationBar";

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Header title="Cinematinee" />
      <FeaturedContent />
      <MovieList />
    </div>
  );
};

export default App;
