import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreateData from './Components/CreateData';
import DataList from './Components/DataList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CreateData />
    <DataList/>
  </>
);


