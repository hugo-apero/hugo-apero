/* Table of Contents */
/* source: https://ma.ttias.be/adding-a-sticky-table-of-contents-in-hugo-to-posts/#styling-the-table-of-contents */
/* similar: from: https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/ */

window.addEventListener('DOMContentLoaded', () => {
  const tocObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        clearActiveStates();
        //document.querySelector(`aside nav li a[href="#${id}"]`).parentElement.classList.add('active');
        document.querySelector(`aside div nav li a[href="#${id}"]`).parentElement.classList.add('active');}
    });
  });

  // track all headings that have an `id` applied
  document.querySelectorAll('h1[id],h2[id],h3[id],h4[id]').forEach((section) => {
    tocObserver.observe(section);
  });
});

function clearActiveStates() {
  //document.querySelectorAll('aside nav li').forEach((section) => {
  //section.classList.remove('active');
  document.querySelectorAll('aside div nav li a').forEach((section) => {
    section.parentElement.classList.remove('active');
  });
}
