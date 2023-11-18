import React from 'react';
import './forum.css';
import axios from 'axios';

function Forum(){
    // const [emails, setEmails] = React.useState();
    // const [message, setMessage] = React.useState();

    const submit = async (event) => {
        // extrtact emails and message
        var emails = document.getElementsByClassName('textarea')[0].value;
        var message = document.getElementsByClassName('input')[0].value;
        // split emails into array by new line
        emails = emails.split('\n');
        // remove spaces
        for(var i=0; i<emails.length; i++){
            emails[i] = emails[i].trim();
        }
        // save state
        // setEmails(emails);
        // setMessage(message);

        event.preventDefault();

        axios.post('http://localhost:8080/send-email', {
            emails: emails,
            message: message
        })
        .then((response) => {
            console.log(response);
            alert(response.data.message + "\n" + response.data.data.messageId)
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        });
    }

    // console.log(emails);
    // console.log(message);

    return(
        <form className='div' onSubmit={(e)=>{submit(e)}}>
            <h1>Forum</h1>
            <textarea className="textarea"  type="text" placeholder="Emails (seperated by newline)" />
            <br />
            <textarea className="input"  type="text" placeholder="Message" />
            <br />
            <button type='submit' className="button">Send</button>
        </form>
    )
}

export default Forum;