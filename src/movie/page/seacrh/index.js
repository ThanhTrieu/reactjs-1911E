import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadingSearchMovie,dataSearchMovie } from './reselect';
import { searchMovie } from './action';
import PageLayout from '../../components/PageLayout';
import { InputGroup, FormControl, Card, Spinner } from 'react-bootstrap';


const SearchMoviePage = () => {
  const [keyword, setKeyword] = useState("");
  const [lang, setLang] = useState("vi");
  const dispatch = useDispatch();

  const {loading, dataMovie} = useSelector(createStructuredSelector({
    loading: loadingSearchMovie,
    dataMovie: dataSearchMovie
  }));

  const changeInput = (event) => {
    let key = event.target.value;
    setKeyword(key);
  }

  const ChooseLanguage = (e) => {
    const language = e.target.value;
    setLang(language);
  }

  const clickSearch = () => {
    dispatch(searchMovie(lang, keyword));
  }

  return (
    <>
      <PageLayout>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Name movie"
                  onChange={changeInput}
                />
                <InputGroup.Append onClick={() => clickSearch()}>
                  <InputGroup.Text>Search</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <select 
                name="language"
                className="form-control"
                onChange={ChooseLanguage}
              >
                <option value="vi">VietNamese</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner className="my-3" animation="border" />
          ) : (
          <div className="row my-3">
            {dataMovie.map((item, key) => (
              <div key={key} className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <Card>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.overview}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </PageLayout>
    </>
  )
}
export default SearchMoviePage;