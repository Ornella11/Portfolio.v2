document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a, .sidebar li a');

    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
