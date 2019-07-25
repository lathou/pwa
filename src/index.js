import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

console.log(Notification.permission);

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Une nouvelle notif', {
          "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
          "icon": "images/ccard.png",
          "vibrate": [200, 100, 200, 100, 200, 100, 400],
          "tag": "request",
          "actions": [
            { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
            { "action": "no", "title": "No", "icon": "images/no.png" }
          ]
        });
    });
  }
}
