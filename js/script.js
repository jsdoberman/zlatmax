'use strict'


const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [500, 2000],
		connect: true,
		step: 1,
		range: {
			'min': [500],
			'max': [2000]
		}

	});

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}







const element = document.querySelector('.sort-prodact');

if (element) {
	const choices = new Choices(element, {
		searchEnabled: false,
		itemSelectText: '',
	});

}



const selectOnPageProd = document.querySelectorAll('.product-info-block__select-item');

if (selectOnPageProd) {

	selectOnPageProd.forEach(function (item) {
		const choicesProd = new Choices(item, {
			searchEnabled: false,
			itemSelectText: '',
		});
	})


}


const btnMinus = document.querySelector('.product-info-block .count-product__btn-minus'),
	btnPlus = document.querySelector('.product-info-block .count-product__btn-plus'),
	number = document.querySelector('.product-info-block .count-product__number');


if (number) {
	let culcProduct = 1;
	number.innerHTML = culcProduct;

	btnPlus.addEventListener('click', function () {
		culcProduct = culcProduct + 1;
		number.innerHTML = culcProduct;
	});

	btnMinus.addEventListener('click', function () {
		if (culcProduct == 2 || culcProduct > 2) {
			culcProduct = culcProduct - 1;
			number.innerHTML = culcProduct;
		} else {
			number.innerHTML = 1;
		}

	});

}




/* =========================================================== меню*/

let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

let body = document.querySelector('body');
let arrows = document.querySelectorAll('.arrow');


if (isMobile.any()) {
	body.classList.add('touch');
	arrows.forEach(function (arrow, i) {

		/* arrow.addEventListener('click', function(el) {
			el.preventDefault();
			dropBlock[i].classList.toggle('category-links-block_active')
		}); */
	});


} else {
	body.classList.add('mouse');

	arrows.forEach(function (arrow, i) {
		arrow.classList.add('arrow_hide')
	});
}





/* =========================================================== слайдер*/
$(document).ready(function () {
	$('.block-product-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [{
				breakpoint: 1614,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1336,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
});


$(document).ready(function () {
	$('.main-slider-block').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,

	});
});


$(document).ready(function () {
	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-slider-prev'

	});
});


$(document).ready(function () {
	$('.product-slider-prev').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false

	});
});

/* =========================================================== Кнопки моб хедера*/


const arrowsMenu = document.querySelectorAll('.arrow');

arrowsMenu.forEach(function (arrow, i) {
	arrow.addEventListener('click', function (e) {
		arrow.classList.toggle('arrow_active');
	});
});


const btnCall = document.querySelector('.mobile-ver__tell-icon'),
	tellPopUp = document.querySelector('.mobile-tell-block'),
	testBody = document.querySelector('body');

btnCall.addEventListener('click', function () {
	tellPopUp.classList.toggle('mobile-tell-block_open');
});

window.addEventListener('click', function (e) {
	if (e.target == tellPopUp) {
		tellPopUp.classList.remove('mobile-tell-block_open');
	}
})

/* ---------------------------------------------------- */

const tabTitles = document.querySelectorAll('.product-description__name'), //Кнопки таба
		textBlock = document.querySelectorAll('.product-description__descr'), //Блоки таба
		parentTabTitles = document.querySelector('.product-description__tabs-items'); //Родитель кнопок таба 


	if(tabTitles.length) {
            function hideBlockes(){
                tabTitles.forEach(function(item){
                    item.classList.remove('product-description__name_active'); //Активный класс для кнопок таба
                });

                textBlock.forEach(function(item){
                    item.classList.remove('product-description__descr_active'); //Активный класс для блоков таба
                });
            }
            hideBlockes(); //Приховуємо класи активності у кнопок таба і блоків таба
    

            function showBlockes(i = 0) {
                tabTitles[i].classList.add('product-description__name_active'); // И у первой кнопки таба ставим класс активности.	
                textBlock[i].classList.add('product-description__descr_active'); // По умолчанию показываем первый блок.
            }
            showBlockes();

        parentTabTitles.addEventListener('click', function(event){  //Вешаем делегирование событий на дочерние элементы btns.

            if (event.target && event.target.classList.contains('product-description__name')) { //Класс кнопок таба.
                tabTitles.forEach(function(item, i){     //перебираем элементы на которые кликают
                    if (event.target == item){ //Сравниваем элемент на который кликнули с кнопками переключения окон (отлавливаем, на какой элемент кликнули)
                        hideBlockes();
                        showBlockes(i); // Передаем i - порядковый номер в функцию, чтобы присвоился класс активности элементу И показался слайд под тем же нмоером.
                    }
                });
            } 
        });
    }








/* =========================================================== БУРГЕР МЕНЮ */
const burger = document.querySelector('.hamburger'),
	hideMenu = document.querySelector('.upper-menu-block'), //Блок который скрывается
	menuLink = document.querySelectorAll('.upper-menu-block__item-menu'), //Класс элементов меню, по которым кликаем
	catalogLinkMenu = document.querySelector('[data-open-main-menu]'),
	mainMenu = document.querySelector('.main-menu'),
	categoryLinksBlock = document.querySelectorAll('.category-links-block'),
	mainMenuArrow = document.querySelectorAll('.main-menu__arrow'),
	menuCloseX = document.querySelector('.upper-menu-block__close'),
	mainMenuCloseX = document.querySelector('.main-menu__close');



menuCloseX.addEventListener('click', function () {
	hideMenu.classList.remove('upper-menu-block_open-menu');
});

mainMenuCloseX.addEventListener('click', function () {
	mainMenu.classList.remove('main-menu_open');
});



burger.addEventListener('click', function () {
	hideMenu.classList.toggle('upper-menu-block_open-menu'); //Класс активности
	//burger.classList.toggle('hamburger_close');
	//body.classList.toggle('body-hidden');

});

catalogLinkMenu.addEventListener('click', function () {
	hideMenu.classList.toggle('upper-menu-block_open-menu'); //Класс активности
	mainMenu.classList.toggle('main-menu_open');
});

mainMenuArrow.forEach(function (item, i) {
	item.addEventListener('click', function () {
		categoryLinksBlock[i].classList.toggle('category-links-block_active');
	});
});


menuLink.forEach(function (item) {
	item.addEventListener('click', function () {
		//hideMenu.classList.toggle('upper-menu-block_open-menu'); //Класс активности
		//burger.classList.toggle('hamburger_close');
		//body.classList.toggle('body-hidden');
	});
});


/* =========================================================== Додавання товара в кошик*/

let productCount = document.querySelectorAll('.block-cart__counter'),
	btnAddToCart = document.querySelectorAll('.product-item__btn');

let counter = 0;


btnAddToCart.forEach(function (item) {
	item.addEventListener('click', function () {
		counter = counter + 1;

		productCount.forEach(function (i) {
			i.textContent = counter;
		})

		item.innerHTML = 'Товар добавлен в корзину <img src="img/product/icons/cart.svg" alt=""> '
	}, {
		"once": true
	});
});



const loginPopUp = document.querySelectorAll('.login-form-block'),
	loginBlockForDesctop = document.querySelectorAll('.block-top__user'),
	loginIcon = document.querySelectorAll('.mobile-ver__login-icon img');

toggleSomething(loginIcon, loginPopUp, 'login-form-block_open');
toggleSomething(loginBlockForDesctop, loginPopUp, 'login-form-block_open');


const filterSectionHead = document.querySelectorAll('.filter-section__head'),
	filterSectionBody = document.querySelectorAll('.filter-section__body');

toggleSomething(filterSectionHead, filterSectionBody, 'filter-section__body-close');


const questionPopUp = document.querySelectorAll('.question-pop-up'),
		question = document.querySelectorAll('.product-info-block__ques'),
		questionPopUpClose = document.querySelectorAll('.question-pop-up__close');

toggleSomething(question, questionPopUp, 'question-pop-up_active');

toggleSomething(questionPopUpClose, questionPopUp, 'question-pop-up_active');




function toggleSomething(trigerBlock, blockToShowe, actionTag) {
	trigerBlock.forEach(function (item, i) {
		item.addEventListener('click', function (event) {
			blockToShowe[i].classList.toggle(actionTag);
		});
	})
}




/* ======================================== Странциа категории*/


/* =========================================================== Движение элементов по прокрутке страницы */

/* -------------------------------------------Движение ввурх */
/* function onEntryToTop(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('to-top'); //Добавляем класс активности
		} else change.target.classList.remove('to-top'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsToTop = {
		threshold: [0.5] 
};

let observerToTop = new IntersectionObserver(onEntryToTop, optionsToTop); 
let elementsToTop = document.querySelectorAll('.to-top_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsToTop) { 
	observerToTop.observe(elm); 
} */

/* ---------------------------------------Движение слева на право */
/* function onEntryLeftToRight(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('left-to-right'); //Добавляем класс активности
		} else change.target.classList.remove('left-to-right'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsLeftToRight = {
		threshold: [0.5] 
};

let observerLeftToRight = new IntersectionObserver(onEntryLeftToRight, optionsLeftToRight); 
let elementsLeftToRight = document.querySelectorAll('.left-to-right_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsLeftToRight) { 
	observerLeftToRight.observe(elm); 
} */

/* ---------------------------------------Движение справа на лево */
/* function onEntryRightToLeft(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('right-to-left'); //Добавляем класс активности
		} else change.target.classList.remove('right-to-left'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRightToLeft = {
		threshold: [0.5] 
};

let observerRightToLeft = new IntersectionObserver(onEntryRightToLeft, optionsRightToLeft); 
let elementsRightToLeft = document.querySelectorAll('.right-to-left_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRightToLeft) { 
	observerRightToLeft.observe(elm); 
} */

/* ---------------------------------------Движение поворот */
/* function onEntryRotate(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('rotate'); //Добавляем класс активности
		} else change.target.classList.remove('rotate'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRotate = {
		threshold: [0.5] 
};

let observerRotate = new IntersectionObserver(onEntryRotate, optionsRotate); 
let elementsRotate = document.querySelectorAll('.rotate_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRotate) { 
	observerRotate.observe(elm); 
} */