let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myDefHeading = document.querySelector('h1').textContent; 

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/maxresdefault.jpg') {
	    myImage.setAttribute ('src','images/kid.gif');
	} else {
	    myImage.setAttribute ('src','images/maxresdefault.jpg');
	}
}

function setUserName(){
	let myName = prompt('What is your name?');
	if (myName == ""){
		localStorage.setItem('name', 'Hacker man')
	}else{
		localStorage.setItem('name', myName);
	}
	myHeading.textContent = localStorage.getItem('name') + myDefHeading;
}

if(!localStorage.getItem('name')) {
  	setUserName();
}else{
  	let storedName = localStorage.getItem('name');
  	myHeading.textContent = storedName + myDefHeading;
}

