import React from 'react';

export default function SummaryViewer({ summary }) {

    return (
        <div className="col-sm">
            <h4>Summary Output</h4>
            <div>
                <textarea rows={15} cols={90} autoFocus={true} name={"summary"} value={summary != '' ? summary : "Summary will be displayed here"} disabled></textarea>
            </div>
            <div>
                <button className="btn txt-light">Download Summary<span className="fas fa-download"></span></button>
            </div>
        </div>
    )
}