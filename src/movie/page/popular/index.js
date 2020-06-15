import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import PageLayout from '../../components/PageLayout';
import { Card, Button } from 'react-bootstrap';
import {getDataPopularMovie} from './action';

const PopularMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPopularMovie());
  }, []);
  return (
    <>
      <PageLayout>
        <div className="row">
          <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
export default PopularMovie;