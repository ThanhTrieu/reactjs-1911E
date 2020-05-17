import React, {useState, useEffect} from 'react';
import PageLayout from './components/PageLayout';
import Word from './components/Word';
import Countries from './components/Countries';
import {api} from './api/virus';
import { Skeleton } from 'antd';

const Covid19  = () => {
  const [loadingData, setLoading] = useState(true);
  const [dataVirus, setDataVirus] = useState([]);

  useEffect(() => {
    const getDataVirus = async () => {
      const response = await api.getDataVirusCorona();
      const data = await response.status === 200 ? response.data : [];
      setLoading(false); // cap nhat lai sate loadingData
      setDataVirus(data); // cap nhat lai dataVirus
    }
    getDataVirus();
  }, [])

  return(
    <>
      <PageLayout>
        {loadingData ? (<Skeleton active />) : (
          <>
            <Word data={dataVirus} />
            <Countries data={dataVirus}/>
          </>
        )}
      </PageLayout>
    </>
  );
}

export default Covid19;