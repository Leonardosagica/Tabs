let tabs = document.querySelectorAll('.tabs h3');
let tabContents = document.querySelectorAll('.tab-content div');
tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabContents.forEach(content => {
			content.classList.remove('active');
		});

		// remove previous active
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});

		// show content according the tab selected (using index param on forEach to help this action)
		tabContents[index].classList.add('active');
		tabs[index].classList.add('active');
	});
});
