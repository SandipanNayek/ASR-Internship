document.addEventListener('DOMContentLoaded', () => {


    const colorThumbnails = document.querySelectorAll('.color-list img');

    colorThumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {

            colorThumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            if (mainShoe) {
                mainShoe.style.opacity = '0';
                mainShoe.style.transform = 'rotate(-18deg) scale(0.8)';

                setTimeout(() => {
                    mainShoe.src = this.src;
                    mainShoe.style.opacity = '1';
                    mainShoe.style.transform = 'rotate(-18deg) scale(1)';
                }, 250);
            }
        });
    });

    const dots = document.querySelectorAll('.hero-dots span');

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

});