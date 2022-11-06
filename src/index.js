import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Counter from './pages/Counter'
import CounterAdvance from './pages/CounterAdvance';
import CounterPro from './pages/CounterPro';
import PageNotFound from './pages/PageNotFound'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element= {<PageNotFound/>}/>
        <Route exact path='/' element= {<App/>}/>
        <Route exact path='/counter' element= {<Counter/>}/>
        <Route exact path='/counteradv' element= {<CounterAdvance initialValue={1}/>}/>
        <Route exact path='/counterpro' element= {<CounterPro initialValue={1}/>}/>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <CounterAdvance initialValue={"1"}/>
    <CounterPro initialValue={1}/> */}
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
