import React from 'react';
import { APIService } from '../src/api_service';

export default function HelpDesk(props) {
    const emailRef = React.useRef('');
    const subjectRef = React.useRef('');
    const messageRef = React.useRef('');
    const [errorMsg, setErrorMsg] = React.useState({});
    const [toast, setToast] = React.useState('');

    const setErrorMessage = (type, error_msg) => {
        let tempErrList = errorMsg;
        if (error_msg == '') {
            delete tempErrList[type];
        } else {
            tempErrList[type] = error_msg;
        }
        setErrorMsg(tempErrList);
    }

    const validation = (input_type) => {

        switch (input_type) {
            case 'all': {
            }
            case 'emailRef': {
                if (!emailRef.current.value || emailRef.current.value.trim() == '') {
                    setErrorMessage('email', 'Please enter your email.');
                } else if (emailRef.current.value && emailRef.current.value.trim().length > 0) {
                    setErrorMessage('email', '');
                }
                if (input_type !== 'all') {
                    break;
                }
            }
            case 'subjectRef': {
                if (!subjectRef.current.value || subjectRef.current.value.trim() == '') {
                    setErrorMessage('subject', 'Please enter subject.');
                } else if (subjectRef.current.value && subjectRef.current.value.trim().length > 0) {
                    setErrorMessage('subject', '');
                }
                if (input_type !== 'all') {
                    break;
                }
            }
            case 'messageRef': {
                if (!messageRef.current.value || messageRef.current.value.trim() == '') {
                    setErrorMessage('message', 'Please enter message.');
                } else if (messageRef.current.value && messageRef.current.value.trim().length > 0) {
                    setErrorMessage('message', '');
                }
                if (input_type !== 'all') {
                    break;
                }
            }
            default: {

            }
        }
        return Object.keys(errorMsg).length == 0 ? true : false;
    }

    const submitTicket = () => {
        if (validation('all')) {
            let data = {
                email: emailRef.current.value.trim(),
                subject: subjectRef.current.value.trim(),
                description: messageRef.current.value.trim()
            };

            APIService.post('createTicket', data)
                .then((response) => {
                    console.log(response)
                    if (response && response.status == 200) {
                        setToast(response);
                        props.close(true);
                    }
                }).catch((error) => {
                    props.close(false)
                    console.log('error', error);
                });
        }

    }


    return (
        <div className="container help-form">
            <h4 className="page-header">HELP DESK</h4>
            <div className="row">
                <div className="col">
                    <input type="email" ref={emailRef} placeholder="Enter Email" onChange={() => validation('emailRef')}></input>
                    <p className="text-danger">{errorMsg['email'] && errorMsg['email']}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" ref={subjectRef} placeholder="Enter Subject" onChange={() => validation('subjectRef')}></input>
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
                        placeholder={"Enter Message"}
                        onChange={() => validation('messageRef')}
                    ></textarea>
                    <p className="text-danger">{errorMsg['message'] && errorMsg['message']}</p>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={() => props.close(true)}>Cancel</button>
                    <button className="btn btn-success" onClick={() => submitTicket()}>Submit</button>
                </div>
            </div>
        </div>
    )
}