import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//아래 코드와 같이 react-redux에서 제공하는 Provider를 사용하여 App을 감싸주면
//App 내부에서 redux를 사용할 수 있게 됨. 
//컴포넌트에서 매번 store를 import 해주지 않아도 됨
//이떄 Provider에 store를 props로 전달해주어야 함
import {Provider} from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
