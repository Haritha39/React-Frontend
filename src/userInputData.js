import React, { useRef, useState } from 'react';
import {APIService} from '../src/api_service';

export default function InputProcessor({summary}) {
    const inputRef = useRef('');
    const [errorMsg,setErrorMsg] = useState('');

    // Post the Input data to server and get the summary in response
    const getSummary = () => {
        if(validateInput()){
            APIService.post(inputRef.current.value.trim())
            .then((response)=>{
                console.log(response)
                    summary(response.data);
                if(response && response.status == '200'){
                    summary(response.data);
                } else{
                    setErrorMsg(response.data);
                }
            }).catch((error)=>{
                setErrorMsg(error);
            })
        }
    }

    // Validate Input
    const validateInput=()=>{
        if(!inputRef.current.value || inputRef.current.value.trim() == ''){
            setErrorMsg('Input Cannot Empty');
        } else if(inputRef.current.value && inputRef.current.value.trim().length >0){
            setErrorMsg('');
            return true;
        }
        return false
    }

    return (
        <div className="col-sm left-box">
            <div className="page-header">
                <h2>Input Text</h2>
            </div>
            <div>
                <textarea
                    rows={15}
                    cols={80}
                    ref={inputRef}
                    autoFocus={true}
                    name={"paragraph"}
                    placeholder="Enter Text or Paste any paragraphs"
                    required></textarea>
                    <p className="danger">{errorMsg}</p>
            </div>
            <div>
                <button className="btn btn-success" onClick={getSummary}>Get Summary</button>
            </div>
        </div>
    )
}