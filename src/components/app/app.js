import React from 'react';
import './app.css';
import Header from '../header';
import BoardInfoBar from '../board-info-bar'
import CardModel from '../card-model';
import List from '../list';


function app() {
  return (
    <React.Fragment >
      <Header />
      <BoardInfoBar />
      <CardModel />
      <List />
    </React.Fragment>
  );
}

export default app;
