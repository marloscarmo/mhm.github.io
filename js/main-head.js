// Google Analytics Tag
var GAScriptTag = document.createElement('script');
GAScriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-119541243-1';
document.getElementsByTagName('head')[0].appendChild(GAScriptTag);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-119541243-1');
