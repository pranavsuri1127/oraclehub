import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

console.log('Our data is fetched');
var url_string = window.location.href;
if(window.location.search)
{
  console.log('1st condition session');
  var url = new URL(url_string);
  var email = url.search.split(",")[0].split("=")[1];
  var sessionid= url.search.split(",")[1].split("=")[1];
  sessionStorage.setItem('HOST', url.host);
  sessionStorage.setItem('EMAIL', email);
  sessionStorage.setItem('SESSIONID', sessionid);
  console.log("email : "+email);
  console.log("sessionid : "+sessionid);
  window.history.replaceState({} ,'React App' , '/');
  axios.get('https://apex.oraclecorp.com/pls/apex/training_app_dev/ValidSessionIdsReact/getId/'+sessionStorage.getItem('SESSIONID')).then(res => {  
    console.log(res.data.items[0].status);
    if(res.data.items[0].status === "Valid")
    {
      axios.get('http://solutionengineering-devops.us.oracle.com:3002/user', { 'headers': { 'emailid': sessionStorage.getItem('EMAIL') } }).then(login => {  
        console.log(login.data);
        if(login.data === "Invalid User")
        {          
          alert("Not an admin user");
          window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self")
        }
        else
        {
          ReactDOM.render(<App />, document.getElementById('root'));
        }
      });
    }
    else{
      alert("Not an oracle employee");
      window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self")
    }
  });
}
else if((window.location.search) && (sessionStorage.getItem('SESSIONID'))) {
  console.log('2nd condition session');
  window.history.replaceState({} ,'React App' , '/');
  axios.get('https://apex.oraclecorp.com/pls/apex/training_app_dev/ValidSessionIdsReact/getId/'+sessionStorage.getItem('SESSIONID')).then(res => {  
    console.log(res.data.items[0].status);
    if(res.data.items[0].status === "Valid")
    {
      axios.get('http://solutionengineering-devops.us.oracle.com:3002/user', { 'headers': { 'emailid': sessionStorage.getItem('EMAIL') } }).then(login => {  
        console.log(login.data);
        if(login.data === "Invalid User")
        {          
          alert("Not an admin user");
          window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self")
        }
        else
        {
          ReactDOM.render(<App />, document.getElementById('root'));
        }
      });
    }
    else{
      alert("Not an oracle employee");
      window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self")
    }
  });
}
else if((window.location.search === "") && (sessionStorage.getItem('SESSIONID')))
{
  console.log('3rd condition session');
  axios.get('https://apex.oraclecorp.com/pls/apex/training_app_dev/ValidSessionIdsReact/getId/'+sessionStorage.getItem('SESSIONID')).then(res => {  
    console.log(res.data.items[0].status);
    if(res.data.items[0].status === "Valid")
    {
      axios.get('http://solutionengineering-devops.us.oracle.com:3002/user', { 'headers': { 'emailid': sessionStorage.getItem('EMAIL') } }).then(login => {  
        console.log(login.data);
        if(login.data === "Invalid User")
        {          
          alert("Not an admin user");
          window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self")
        }
        else
        {
          ReactDOM.render(<App />, document.getElementById('root'));
        }
      });
    }
    else{
      alert("Not an oracle employee");
      window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self")
    }
  });
}
else if((window.location.search === "") && (sessionStorage.getItem('SESSIONID') === ""))
{
  window.open("https://apex.oraclecorp.com/pls/apex/f?p=10841:2","_self");
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();