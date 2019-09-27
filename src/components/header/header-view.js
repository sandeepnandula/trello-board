import React from 'react';

const header = ({ title }) => {
    return (
        <header className="board-header">
            <div className="logo">
                <a href='/'>{title}</a>
            </div>
        </header>
    );
}
export default header;