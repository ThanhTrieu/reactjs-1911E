import React, {useState, useEffect} from 'react';
import PageLayout from '../PageLayout';
import BreadcrumbPage from '../commons/BreadcrumbPage';
import { Layout } from 'antd';
import { useParams } from "react-router-dom";
import {api} from '../../api/api';

import '../style.css';

const {Content } = Layout;

const DetailPage = () => {
  let params = useParams();
  let idProduct = parseInt(params.id);

  const [detail, setDetail] = useState({});
   useEffect(() => {
     const getDetailData = (id) => {
       const dt = api.getDataById(id);
       setDetail(dt[0]);
     }
     getDetailData(idProduct);
   }, [idProduct])

  return (
    <>
      <PageLayout>
        <Content className="container">
          <BreadcrumbPage
            item1="Product"
            item2="detail"
            item3="samsung"
          />
          <div className="site-layout-content">
            
          </div>
        </Content>
      </PageLayout>
    </>
  )
}

export default React.memo(DetailPage);