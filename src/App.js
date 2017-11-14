import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import './App.css';
// import { Button } from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './js/components/pc_index';
import MobileIndex from './js/components/mobile_index';
import MediaQuery from 'react-responsive';


class App extends Component {
  render() {
    return (
      <div>
         <MediaQuery query='(min-device-width:1224px)'>
          <PCIndex />
         </MediaQuery >
         <MediaQuery query='(max-device-width:1224px)'>
          <MobileIndex />
         </MediaQuery >
      </div>
    );
  }
}

export default App;
