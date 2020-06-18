import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadingPopularMovie, dataPopularMovie } from './reselect';
import PageLayout from '../../components/PageLayout';
import { Card, Button, Spinner } from 'react-bootstrap';
import { getDataPopularMovie } from './action';

const PopularMovie = () => {

  // lay state tu reselect
  const { loadingData, dataMovie } = useSelector(createStructuredSelector({
    loadingData: loadingPopularMovie,
    dataMovie: dataPopularMovie
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPopularMovie());
  }, []);

  return (
    <>
    {loadingData ? (
      <PageLayout>
        <Spinner className="my-3" animation="border" />
      </PageLayout>
      ) : (
      <PageLayout>
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
      </PageLayout>
    )}
    </>
  )
}
export default PopularMovie;