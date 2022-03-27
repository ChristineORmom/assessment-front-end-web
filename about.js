console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	//console.log('form submit');
}

let form = document.querySelector('form#contact');

form.addEventListener('summit', handleSubmit);

document.getElementById("submitButton").addEventListener("click", success)

function success() {
	document.getElementById("demo").innerHTML = "Success!"
}

const button = document.querySelector('#color-button');

button.addEventListener('click', () => {
	alert('Blue!');
});

const button = document.querySelector('#place-button');

button.addEventListener('click', () => {
	alert('Home!');
});

const button = document.querySelector('#Ritual-button');

button.addEventListener('click', () => {
	alert('Sleep!');
});

const button = document.querySelector('#Ritual-button');

button.addEventListener('click', () => {
	alert('Sleep!');
});

var element = document.getElementById("imageID");
element.addEventListener("click",function(){
alert("Hello Sunshine!")
})