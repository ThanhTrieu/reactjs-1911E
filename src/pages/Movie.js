import React from 'react';
import LayoutMovie from '../components/movie/LayoutMovie';
import SearchMovie from '../components/movie/SearchMovie';
import {api} from '../services/api';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false
    }
  }

  searchDataMovieByName = async (name) => {
    // cap nhat state loading la true
    const data = await api.getDataMovie(name);
    //console.log(data);
    this.setState({ movies: data});
    // cap nhat state loading la fase
  }

  render() {
    return (
      <>
        <LayoutMovie>
          <SearchMovie
            search={this.searchDataMovieByName}
          />
        </LayoutMovie>
      </>
    )
  }
}