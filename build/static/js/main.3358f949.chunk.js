(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,n,o){e.exports=o.p+"static/media/logo.ee7cd8ed.svg"},function(e,n,o){e.exports=o(12)},,,,,,function(e,n,o){},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var t=o(0),i=o.n(t),a=o(2),r=o.n(a),c=(o(10),o(3)),s=o.n(c);o(11);var l=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Edit ",i.a.createElement("code",null,"src/App.js")," and save to reload"),i.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},u="https://lathou.github.io/pwa/build",d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),window.confirm("Une mise \xe0 jour a \xe9t\xe9 trouv\xe9e, voulez-vous mettre \xe0 jour l'application ?")&&e.update(),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(l,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(u,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(u,"/service-worker.js");d?(function(e,n){fetch(e).then(function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):f(n,e)})}}(),console.log(Notification.permission),Notification.requestPermission(function(e){console.log("Notification permission status:",e)});var p="../src/logo.svg";setTimeout(function(){"granted"==Notification.permission&&navigator.serviceWorker.getRegistration().then(function(e){e.showNotification("Une nouvelle notif",{body:"Hello, I'm a notification !",icon:p,vibrate:[200,100,200,100,200,100,400],tag:"request",actions:[{action:"yes",title:"Yes",icon:p},{action:"no",title:"No",icon:p}]})})},1e4)}],[[4,1,2]]]);
//# sourceMappingURL=main.3358f949.chunk.js.map