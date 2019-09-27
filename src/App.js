import React from 'react';
// import './App.css';

function App() {
  return (
    <React.Fragment >
      <header className="board-header">
        <div className="logo">
          <a href='/'>Trello</a>
        </div>
      </header>


      <section className="board-info-bar">
        <h2>Trello Default board</h2>
      </section>


      <section className="lists-container clear-float">
        <div className="list">
          <input type="text" defaultValue="Task to do" className="list-title" />
          <span className="delete-list"></span>

          <ul className="list-items">
            <li>Complete mock-up for client website<span className="delete-card"></span></li>
            <li>Email mock-up to client for feedback</li>
            <li>Update personal website header background image</li>
            <li>Update personal website heading fonts</li>
            <li>Add google map to personal website</li>
            <li>Begin draft of CSS Grid article</li>
            <div className='add-card-container'>
              <textarea placeholder="Enter a title for this card..."></textarea>
              <div>
                <button>Add Card</button>
                <span>X</span>
              </div>
            </div>
          </ul>
          <button className="add-card-btn btn">Add a card</button>
        </div>
        <div className="list">
          <input type="text" defaultValue="Task to do" className="list-title" />
          <span className="delete-list"></span>
          <ul className="list-items">
            <li>Complete mock-up for client website</li>
            <li>Email mock-up to client for feedback</li>
            <li>Update personal website header background image</li>
            <li>Update personal website heading fonts</li>
            <li>Add google map to personal website</li>
            <li>Begin draft of CSS Grid article</li>
          </ul>
          <button className="add-card-btn btn">Add a card</button>
        </div>

        <div className="add-list-container">
          <a className="add-list-btn btn">Add a list</a>
          <textarea placeholder="Enter a title for this list..."></textarea>
          <div>
            <button>Add List</button>
            <span>X</span>
          </div>
        </div>
      </section>

      <section className="card-model">
        <div className="model-content">
          <span className="close">&times;</span>
          <div className="details">
            <input type="text" placeholder="Enter title of the card" />
          </div>
          <div className="description">
            <h3>Discription</h3>
            <textarea placeholder="Add a more detailed description…"></textarea>
            <button className="btn-save">Save</button>
            <button className="btn-cancel">Save</button>
          </div>
          <div className="comments-section">
            <h3>Comments</h3>
            <textarea placeholder="Enter comment here"></textarea>
            <button className="btn-save">Save</button>
            <button className="btn-cancel">Save</button>
            <ul>
              <li>comments</li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
