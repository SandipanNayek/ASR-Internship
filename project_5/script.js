
function toggleMenu() {
    document.getElementById("mobileNav").classList.toggle("active");
}


document.querySelectorAll("#mobileNav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(
        ".hero h1, .hero p, .search-box, .hero-actions, .trust-badges," +
        ".about h2, .highlight-banner, .about p, .features li, .about-right img, .btn-learn-more," +
        ".cities-content h2, .cities-content p, .city-btn, .cities-image img"+
    ".footer-newsletter h3, .newsletter-form, .footer-logo, .footer-col, .footer-bottom div, .copyright"
    ).forEach(el => {
        el.classList.add("fade-in-up");
    });

 
    const heroElements = document.querySelectorAll(
        ".hero h1, .hero p, .search-box, .hero-actions, .trust-badges"
    );

    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 150);
    });

    const aboutSection = document.querySelector(".about");

    const aboutObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const elements = entry.target.querySelectorAll(
                    "h2, .highlight-banner, p, .features li, .about-right img, .btn-learn-more"
                );

                elements.forEach((element, index) => {

                    setTimeout(() => {
                        element.classList.add("visible");
                    }, index * 150);

                });

                aboutObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.3
    });

    aboutObserver.observe(aboutSection);

   
    const citiesSection = document.querySelector(".cities-section");

    const citiesObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const elements = entry.target.querySelectorAll(
                    ".cities-content h2, .cities-content p, .city-btn, .cities-image img"
                );

                elements.forEach((element, index) => {

                    setTimeout(() => {
                        element.classList.add("visible");
                    }, index * 120);

                });

                citiesObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.5
    });

    citiesObserver.observe(citiesSection);

    const footer = document.querySelector("footer");

const footerObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const elements = entry.target.querySelectorAll(
                ".footer-newsletter h3, .newsletter-form, .footer-logo, .footer-col, .footer-bottom div, .copyright"
            );

            elements.forEach((element, index) => {

                setTimeout(() => {
                    element.classList.add("visible");
                }, index * 120);

            });

            footerObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.7
});

footerObserver.observe(footer);
const imageObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";

            imageObserver.unobserve(entry.target);
        }

    });

}, { threshold: 0.3 });

document.querySelectorAll(".about-right img, .cities-image img").forEach(img => {

    img.style.opacity = "0";
    img.style.transform = "translateY(120px) scale(.8)";
    img.style.transition = "all 1s ease";

    imageObserver.observe(img);

});
});