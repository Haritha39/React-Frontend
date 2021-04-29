import React from 'react';
import { APIService } from '../src/api_service';

export default function HelpDesk({ close }) {
    const emailRef = React.useRef('');
    const subjectRef = React.useRef('');
    const messageRef = React.useRef('');
    const [errorMsg, setErrorMsg] = React.useState({});
    const [toast, setToast] = React.useState('');

    const setErrorMessage = (type, error_msg) => {
        let tempErrList = errorMsg;
        tempErrList[type] = error_msg;
        setErrorMsg(tempErrList);
    }

    const validation = (input_type) => {
        switch (input_type) {
            case 'all': {

            }
            case 'emailRef': {
                if (!emailRef.current.value || emailRef.current.value.trim() == '') {
                    setErrorMsg('email', 'Please enter your email.');
                } else if (emailRef.current.value && emailRef.current.value.trim().length > 0) {
                    setErrorMsg('email', '');
                }
                if (input_type !== 'all') {
                    break;
                }
            }
            case 'subjectRef': {
                if (!subjectRef.current.value || subjectRef.current.value.trim() == '') {
                    setErrorMsg('subject', 'Please enter subject.');
                } else if (subjectRef.current.value && subjectRef.current.value.trim().length > 0) {
                    setErrorMsg('subject', '');
                }
                if (input_type !== 'all') {
                    break;
                }
            }
            case 'messageRef': {
                if (!messageRef.current.value || messageRef.current.value.trim() == '') {
                    setErrorMsg('message', 'Please enter message.');
                } else if (messageRef.current.value && messageRef.current.value.trim().length > 0) {
                    setErrorMsg('message', '');
                }
                if (input_type !== 'all') {
                    break;
                }
            }
            default: {

            }
        }

        return Object.keys(errorMsg).length > 0 ? false : true;
    }

    const submitTicket = () => {
        if (validation('all')) {
            APIService.post(data)
                .then((response) => {
                    if (response && response.status == 200) {
                        setToast(response);
                        close(true);
                    }
                }).catch((error) => {
                    console.log(error);
                })
        }
    }
    return (
        <div className="container help-form">
            <h4 className="page-header">HELP DESK</h4>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="email" className="form-control" ref={emailRef} placeholder="Enter Email" onChange={() => validation('emailRef')}></input>
                        <p className="text-danger">{errorMsg['email'] && errorMsg['email']}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" ref={subjectRef} placeholder="Enter Subject" onChange={() => validation('subjectRef')}></input>
                        <p className="text-danger">{errorMsg['subject'] && errorMsg['subject']}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea
                            rows={10}
                            cols={50}
                            className="bg-light"
                            ref={messageRef}
                            autoFocus={false}
                            name={"paragraph"}
                            placeholder={"Enter Message"}
                            onChange={() => validation('messageRef')}
                        ></textarea>
                        <p className="text-danger">{errorMsg['message'] && errorMsg['message']}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-between">
                        <button className="btn btn-danger" onClick={() => close(true)}>Cancel</button>
                        <button className="btn btn-success" onClick={() => submitTicket()}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}