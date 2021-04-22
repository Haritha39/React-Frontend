import React from 'react';

export default function NavBarHeader() {

    return (
        <nav className="navbar navbar-expand-sm header">
            <a className="navbar-brand header-heading" href="#">Text Summarizer</a>
            <div className="navbar-nav ml-auto">
                <button className="btn btn-light"><span className="fas fa-info-circle"></span>Help</button>
            </div>
        </nav>
    )
}