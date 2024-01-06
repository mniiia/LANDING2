let menuBtn = document.querySelector('.burger_menu_button');
let menu = document.querySelector('.header_navigation_list_burger');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})