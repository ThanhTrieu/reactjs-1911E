import React from 'react';
import ReactDOM from 'react-dom';
// su dung https://ant.design/
import 'antd/dist/antd.css';

import App from './resume/Resume';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
