(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,o,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,o,n){e.exports=n(12)},,,,,,function(e,o,n){},function(e,o,n){},function(e,o,n){"use strict";n.r(o);var t=n(0),i=n.n(t),a=n(2),r=n.n(a),c=(n(10),n(3)),s=n.n(c),l=(n(11),function(){document.cookie="myCookie"+new Date+"="+new Date+";expires=Fri, 31 Dec 9999 23:59:59 GMT"});var u=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Edit ",i.a.createElement("code",null,"src/App.js")," and save to reload"),i.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),i.a.createElement("a",{onClick:l},"Set a cookie")))},d="https://lathou.github.io/pwa/build",f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Notification.requestPermission(function(e){console.log("Notification permission status:",e)});var p="../src/logo.svg";function g(e,o){navigator.serviceWorker.addEventListener("notificationclick",function(e){var o=e.notification,n=(o.data.primaryKey,e.action);console.log(n),o.close()}),navigator.serviceWorker.register(e).then(function(e){setTimeout(function(){!function(e,o){"granted"==Notification.permission&&(console.log("Notification should be shown now"),o.showNotification("Une nouvelle notif",{body:e,icon:p,vibrate:[200,100,200,100,200,100,400],tag:"request",actions:[{action:"yes",title:"Yes",icon:p},{action:"no",title:"No",icon:p}]}))}("hello",e)},5e3),e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),window.confirm("Une mise \xe0 jour a \xe9t\xe9 trouv\xe9e, voulez-vous mettre \xe0 jour l'application ?")&&(console.log("post SKIP_WAITING"),e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(d,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var o="".concat(d,"/service-worker.js");f?(function(e,o){fetch(e).then(function(n){console.log("has fetched");var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,o)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(o,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(o,e)})}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.b94d318d.chunk.js.map