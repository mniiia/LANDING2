let menuBtn = document.querySelector('.burger_menu_button');
let menu = document.querySelector('.header_navigation_list_burger');
let bottom_translate = document.querySelector('.header_bottom');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	bottom_translate.classList.toggle('active');
})