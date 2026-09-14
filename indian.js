// const categoryCards = document.querySelectorAll('.category-card');
// const categoryPage = document.querySelector('#category-page');
// const closeCategoryPage = document.querySelector('#category-page-close');
// const categoryPageIcon = document.querySelector('#category-page-icon');
// const categoryPageTitle = document.querySelector('#category-page-title');
// const categoryPageDescription = document.querySelector('#category-page-description');

// const categoryDetails = {
// 	food: {
// 		icon: 'fa-utensils',
// 		title: 'Indian Food',
// 		description: 'Explore delicious dishes, regional flavours, and the stories behind India’s food traditions.'
// 	},
// 	games: {
// 		icon: 'fa-gamepad',
// 		title: 'Indian Games',
// 		description: 'Discover traditional games and playful activities enjoyed by communities across India.'
// 	}
// };

// function openCategoryPage(category) {
// 	const details = categoryDetails[category];

// 	if (!details) {
// 		return;
// 	}

// 	categoryPageIcon.className = `category-page-icon fa-solid ${details.icon}`;
// 	categoryPageTitle.textContent = details.title;
// 	categoryPageDescription.textContent = details.description;
// 	categoryPage.classList.add('is-visible');
// 	categoryPage.setAttribute('aria-hidden', 'false');
// 	closeCategoryPage.focus();
// }

// function hideCategoryPage() {
// 	categoryPage.classList.remove('is-visible');
// 	categoryPage.setAttribute('aria-hidden', 'true');
// }

// categoryCards.forEach((card) => {
// 	card.addEventListener('click', () => openCategoryPage(card.dataset.category));
// 	card.addEventListener('keydown', (event) => {
// 		if (event.key === 'Enter' || event.key === ' ') {
// 			event.preventDefault();
// 			openCategoryPage(card.dataset.category);
// 		}
// 	});
// });

// closeCategoryPage.addEventListener('click', hideCategoryPage);

// document.addEventListener('keydown', (event) => {
// 	if (event.key === 'Escape' && categoryPage.classList.contains('is-visible')) {
// 		hideCategoryPage();
// 	}
// });
