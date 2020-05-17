import React from 'react';
import { Table, Skeleton } from 'antd';

const columns = [
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date"
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country"
  },
  {
    title: "Country Code",
    dataIndex: "CountryCode",
    key: "CountryCode"
  },
  {
    title: "NewConfirmed",
    dataIndex: "NewConfirmed",
    key: "NewConfirmed"
  },
  {
    title: "TotalConfirmed",
    dataIndex: "TotalConfirmed",
    key: "TotalConfirmed"
  },
  {
    title: "NewDeaths",
    dataIndex: "NewDeaths",
    key: "NewDeaths"
  },
  {
    title: "TotalDeaths",
    dataIndex: "TotalDeaths",
    key: "TotalDeaths"
  },
  {
    title: "NewRecovered",
    dataIndex: "NewRecovered",
    key: "NewRecovered"
  },
  {
    title: "TotalRecovered",
    dataIndex: "TotalRecovered",
    key: "TotalRecovered"
  }
]
const Countries = (props) => {
  return(
    <>
      {props.data.Countries ? 
        (<Table 
          columns={columns} 
          dataSource={props.data.Countries} 
          rowKey="CountryCode"
        />) 
        : (<Skeleton active/>)
      }
    </>
  )
}
export default Countries;