import React from 'react';
import HelpDesk from './help';

export default function NavBarHeader() {
    const [help, showHelpBox] = React.useState(false);

    const closeHelp = (status) => {
        if (status) {
            showHelpBox(!help);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top header">
                <a className="navbar-brand header-heading" href="/">Text Summarizer</a>
                <div className="navbar-nav ml-auto header-links">
                    <button className="btn btn-light stats">Statistics</button>
                    <button className="btn btn-light" onClick={() => { showHelpBox(!help) }}><span className="fas fa-info-circle icon-help"></span>Help</button>
                </div>
            </nav>
            {help &&
                <HelpDesk
                    close={(e) => closeHelp(e)} />}

        </>
    )
}