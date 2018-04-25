const { detect } = require('detect-browser');
const browser = detect();
 
// handle the case where we don't detect the browser
if (browser) {
  console.log(browser.name);
  console.log(browser.version);
  console.log(browser.os);
}

switch (browser && browser.name) {
  case 'chrome':
	window.location.replace("https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm");
    break;
	
  case 'firefox':
	window.location.replace("https://addons.mozilla.org/addon/ublock-origin/");
    break;
	
  case 'edge':
	window.location.replace("https://www.microsoft.com/store/p/app/9nblggh444l4");
    break;
	
  case 'opera':
	window.location.replace("https://addons.opera.com/extensions/details/ublock/");
    break;
	
  case 'safari':
	window.location.replace("https://safari-extensions.apple.com/details/?id=com.el1t.uBlock-3NU33NW2M3");
    break;
	
  default:
	window.location.replace("https://github.com/gorhill/uBlock");
}
