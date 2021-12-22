/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

function changeIconImgSrc(src) {
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

if (systemInitiatedDark.matches) {
	changeIconImgSrc({{ "/assets/img/moon.svg" | relative_url }});
} else {
	changeIconImgSrc({{ "/assets/img/sun.svg" | relative_url }});
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	changeIconImgSrc({{ "/assets/img/moon.svg" | relative_url }});
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    changeIconImgSrc({{ "/assets/img/sun.svg" | relative_url }});
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		changeIconImgSrc({{ "/assets/img/sun.svg" | relative_url }});
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		changeIconImgSrc({{ "/assets/img/moon.svg" | relative_url }});
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		changeIconImgSrc({{ "/assets/img/sun.svg" | relative_url }});
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		changeIconImgSrc({{ "/assets/img/moon.svg" | relative_url }});
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	changeIconImgSrc({{ "/assets/img/moon.svg" | relative_url }});
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	changeIconImgSrc({{ "/assets/img/sun.svg" | relative_url }});
}