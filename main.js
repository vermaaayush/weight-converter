//backend programing 
document.querySelector('.convert_btn').addEventListener('click',()=>{
	const e=document.querySelector('.inputfield').value;
	document.querySelector('.grams_xx').innerHTML=e/0.0022046;
	document.querySelector('.kilograms_xx').innerHTML=e/2.2046;
	document.querySelector('.ounes_xx').innerHTML=e*16;

});


