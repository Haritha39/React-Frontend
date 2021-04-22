import React from 'react';

export default function SummaryViewer({summary}) {

    return (
        <div className="col-sm">
            <div className="page-header heading-font">
                <h2>Summary Output</h2>
            </div>
            <div>
                <textarea rows={15} cols={80} autoFocus={true} name={"summary"} value={summary!=''?summary :"Summary will be displayed here"} disabled></textarea>
            </div>
            <div>
                <button className="btn btn-success">Download Summary</button>
            </div>
        </div>
    )
}