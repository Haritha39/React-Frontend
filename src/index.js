import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Root() {
    return (<div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-light">
            <a className="navbar-brand" href="#">Text Summarizer</a>
            <div className="navbar-nav ml-auto">
                <button className="btn"><span className="fas fa-info-circle"></span>Help</button>
            </div>
        </nav>
        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-sm left-box">
                    <div className="page-header">
                        <h2>Input Text</h2>
                    </div>
                    <div>
                        <textarea rows={15} cols={80} autoFocus={true} name={"paragraph"} placeholder="Enter Text or Paste any paragraphs" required></textarea>
                    </div>
                    <div>
                        <button className="btn btn-success">Get Summary</button>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="page-header">
                        <h2>Summary Output</h2>
                    </div>
                    <div>
                        <textarea rows={15} cols={80} autoFocus={true} name={"summary"} value={"Summary will be displayed here"} disabled></textarea>
                    </div>
                    <div>
                        <button className="btn btn-success">Download Summary</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
ReactDOM.render(<Root />, document.querySelector("#app"))