import React, { Component} from 'react';
import PageLayout from './components/PageLayout';
import Word from './components/Word';
import Countries from './components/Countries'
import {api} from './api/virus';
import { Skeleton } from 'antd';

export default class VirusCorona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataVirus: [],
      loadingData: true
    }
  }

  async componentDidMount() {
    const response = await api.getDataVirusCorona();
    const data = await response.status === 200 ? response.data : [];
    this.setState({
      ...this.state,
      dataVirus: data,
      loadingData: false
    })
  }


  render() {
    console.log(this.state.dataVirus)
    return(
      <>
        <PageLayout>
          {this.state.loadingData ? (<Skeleton active />) : (
            <>
              <Word data={this.state.dataVirus} />
              <Countries data={this.state.dataVirus}/>
            </>
          )}
        </PageLayout>
      </>
    )
  }
}