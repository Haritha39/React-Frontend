import React, { useRef, useState } from 'react';
import { APIService } from '../src/api_service';
import Loader from './loader';

export default function InputProcessor({ summary }) {
    const inputRef = useRef('');
    const [errorMsg, setErrorMsg] = useState('');
    const [clear, showClear] = useState(false);
    const [loader, showLoader] = useState(false);
    PDFJS.workerSrc = '';

    // Post the Input data to server and get the summary in response
    const getSummary = () => {
        if (validateInput()) {
            showLoader(true);
            APIService.post('summary',inputRef.current.value.trim())
                .then((response) => {
                    showLoader(false);
                    console.log(response)
                    summary(response.data.data);
                    if (response && response.status == '200') {
                        summary(response.data.data);
                    } else {
                        setErrorMsg(response.data);
                    }
                }).catch((error) => {
                    showLoader(false);
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

    // Clear the Input Text Box
    const handleClear=()=>{
        inputRef.current.value="";
    };

    // Handle the uploaded file
    const handleFileUpload=(event)=>{
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.onload=function(e){
            var binaryData = atob(e.target.result.replace(/^data:application\/pdf;base64,/, ''));
            var rawLength = binaryData.length;
            var array = new Uint8Array(new ArrayBuffer(rawLength));

            for (var i = 0; i < rawLength; i++) {
                array[i] = binaryData.charCodeAt(i);
            }
            console.log(array)

            PDFJS.getDocument(array).then((res)=>{
                let pdf = res;
                pdf.getPage(1).then((pdfPage)=> {
                    pdfPage.getTextContent().then((textContent)=>{
                        let textItems = textContent.items;
                        let finalString ="";
                        // Concatenate the string of the item to the final string
                        for (var i = 0; i < textItems.length; i++) {
                            var item = textItems[i];

                            finalString += item.str + " ";
                        }
                        console.log(finalString);
                        inputRef.current.value = finalString;
                    })
                })
            })
            
        };
        reader.readAsDataURL(file, "UTF-8");

    }

    return (
        <div className="col-sm">
            {loader && <Loader />}
            <h4>Input Text</h4>
            <div onMouseEnter={()=>showClear(true)} onMouseLeave={()=>showClear(false)}>
                <textarea
                    rows={15}
                    cols={100}
                    className="bg-light"
                    ref={inputRef}
                    autoFocus={true}
                    placeholder="Enter Text or Paste any paragraphs"
                    required></textarea>
            </div>
            {clear && <button className="float-clear-btn" onClick={()=>handleClear()}>Clear</button>}
            <div className="d-flex justify-content-between">
                <p className="text-danger">{errorMsg}</p>
                <div>
                    <input type="file" onChange={(e)=>handleFileUpload(e)}></input>
                    <button className="btn txt-light" onClick={getSummary}>Get Summary</button>
                </div>
            </div>
        </div>
    )
}