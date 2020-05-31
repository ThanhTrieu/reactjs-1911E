import React, {useState, useEffect} from 'react';
import BreadcrumbPage from '../commons/BreadcrumbPage';
import '../style.css';
import {api} from '../../api/api';
import { Skeleton, Card, Row, Col, Layout } from 'antd';
import PageLayout from '../PageLayout';
import { Link } from "react-router-dom";

const {Content } = Layout;
const { Meta } = Card;

const HomePage = () => {

  const [lstProduct, setProducts] = useState([]);

  useEffect(() => {
    const getListProduct = () => {
      const data = api.product;
      setProducts(data);
    }
    getListProduct();
  },[]);

  return (
    <>
    <PageLayout>
      <Content className="container">
        <BreadcrumbPage
          item1="Home"
          item2="Product"
          item3="List"
        />
        { lstProduct ? (
          <div className="site-layout-content">
            <Row>
              {lstProduct.map((item, index) => (
                <Col span={8} key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <Card
                      hoverable
                      style={{ width: 350 }}
                      cover={<img alt={item.name} src={item.image} />}
                    >
                      <Meta title={item.name} description={item.desc} />
                      <p>Price: {item.price}</p>
                    </Card>
                  </Link>
                </Col>
              ) )}
            </Row>
          </div>
        ) : (<Skeleton active />) }
      </Content>
    </PageLayout>
    </>
  )
}

export default React.memo(HomePage);