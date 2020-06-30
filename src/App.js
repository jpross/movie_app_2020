import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get( 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating' );
    console.log( movies );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovie();
  };
  render() {
    const { isLoading, movies } = this.state;
    // return <div>test</div>
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map( (movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              );
            }
          )
        }
      </div>
    );
  };
}

export default App;