import React, { useRef, useState } from 'react';
import { APIService } from '../src/api_service';

export default function InputProcessor({ summary }) {
    const inputRef = useRef('');
    const [errorMsg, setErrorMsg] = useState('');

    // Post the Input data to server and get the summary in response
    const getSummary = () => {
        if (validateInput()) {
            APIService.post(inputRef.current.value.trim())
                .then((response) => {
                    console.log(response)
                    summary(response.data);
                    if (response && response.status == '200') {
                        summary(response.data);
                    } else {
                        setErrorMsg(response.data);
                    }
                }).catch((error) => {
                    setErrorMsg(error);
                })
        }
    }

    // Validate Input
    const validateInput = () => {
        if (!inputRef.current.value || inputRef.current.value.trim() == '') {
            setErrorMsg('Please fill out this field.');
        } else if (inputRef.current.value && inputRef.current.value.trim().length > 0) {
            setErrorMsg('');
            return true;
        }
        return false
    }

    return (
        <div className="col-sm">
            <h4>Input Text</h4>
            <div>
                <textarea
                    rows={15}
                    cols={100}
                    className="bg-light"
                    ref={inputRef}
                    autoFocus={true}
                    name={"paragraph"}
                    placeholder="Enter Text or Paste any paragraphs"
                    required></textarea>
            </div>
            <div className="d-flex justify-content-between">
                <p className="text-danger">{errorMsg}</p>
                <div>
                    <input type="file" onChange={(e)=>console.log(e.currentTarget.value)}></input>
                    <button className="btn btn-success" onClick={getSummary}>Get Summary</button>
                </div>
            </div>
        </div>
    )
}