import React from 'react';

const cardModel = () => {
    return (
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
    );
};

export default cardModel;