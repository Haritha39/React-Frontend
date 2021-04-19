import React from 'react';

export default function NavBarHeader() {

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <a className="navbar-brand" href="#">Text Summarizer</a>
            <div className="navbar-nav ml-auto">
                <button className="btn"><span className="fas fa-info-circle"></span>Help</button>
            </div>
        </nav>
    )
}