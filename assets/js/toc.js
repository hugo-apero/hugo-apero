/* Table of Contents */
/* source: https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/ */

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
			  //clearActiveStates();
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all headings that have an `id` applied
	document.querySelectorAll('h1[id],h2[id],h3[id],h4[id]').forEach((section) => {
		observer.observe(section);
	});
	
});
