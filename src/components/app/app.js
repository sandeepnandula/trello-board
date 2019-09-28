import React from 'react';
import './app.css';
import Header from '../header';
import BoardInfoBar from '../board-info-bar'
import CardModel from '../list-container/cards/card-model';
import ListContainer from '../list-container';


function app() {
  return (
    <React.Fragment >
      <Header />
      <BoardInfoBar />
      <CardModel />
      <ListContainer />
    </React.Fragment>
  );
}

export default app;
