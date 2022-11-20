const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	alert('CLICKED!!!');
});

btn.addEventListener('click', function() {
	console.log('SECOND THING!!');
});

btn.addEventListener('mouseover', function() {
	btn.innerText = 'STOP TOUCHING ME';
});

btn.addEventListener('mouseout', function() {
	btn.innerText = 'Click Me!';
});

window.addEventListener('scroll', function() {
	console.log('STOP SCROLLING!!');
});


const btn2 = document.querySelector('#new')

btn2.addEventListener('mouseover', function() {
	console.log('Mouse over me');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn2.style.left = `${width}px`;
	btn2.style.top = `${height}px`;

});

btn2.addEventListener('click', function() {
	btn2.innerText = 'You got me!';
	document.body.style.backgroundColor = 'green';
})
