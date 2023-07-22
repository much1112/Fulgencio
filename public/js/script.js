document.addEventListener("DOMContentLoaded", function () {
    let currentUrl = window.location.pathname;
    let navbarLinks = document.querySelectorAll('div.navbar a.nav-link');

    navbarLinks.forEach(function (link) {
        let linkUrl = link.getAttribute('href');
        if (linkUrl === currentUrl) {
            link.classList.add('active');
        }
    });
});