import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import InputProcessor from './userInputData';
import SummaryViewer from './outputSummary';
import NavBarHeader from './header';
import Footer from './footer';

function Root() {
    const [summary, setSummary] = React.useState('');

    return (<div className="container-fluid full-width">
        <NavBarHeader />
        <div className="container-fluid content">
            <div className="row justify-content-between">
                <InputProcessor summary={(e)=>{setSummary(e)}}/>
                <SummaryViewer summary ={summary}/>
            </div>
        </div>
        <Footer />
    </div>
    );
}
ReactDOM.render(<Root />, document.querySelector("#app"))