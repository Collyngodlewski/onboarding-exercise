
import logo from "./queeery-logo.png";
import "./App.css";
import { movies }  from "./movies";
import { useState } from "react";




function App() {
  const [liked, setLiked] = useState(0);
  const [disliked, setDisliked] = useState(0);
  const [searchMovie, setSearchMovie] = useState('');



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Queeery's Movies
       </p>
       
       <div className="Search-bar">
          <input type="text" placeholder="Search movies..." onChange={event => {setSearchMovie(event.target.value)}}/>
     

            <div className="Movies">
              { movies.filter((val)=>{
                if (searchMovie == ""){
                  return val
                 } else if (val.title.toLowerCase().includes(searchMovie.toLowerCase())){
                  return val
                 }
              }).map(movie => {
                return(
                  <div key={movie.id} className="Movie-box">
                  <h2>{movie.title}</h2>
                  <p>{movie.category}</p>
                  <img src = {movie.url} alt="Movie poster art"/>
                  <p> Likes: {movie.likes} Dislikes: {movie.dislikes} </p>
                  <button className="Buttons" key={movie.id} onClick={() => setLiked(movie.likes++)}>Like</button>
                  <button className="Buttons" key={movie.id} onClick={() => setDisliked(movie.dislikes++)}>Dislike</button>
                  </div>
                )
              })}
              
            </div>
      </div>
       
      </header>
    </div>
  );
}

export default App;
