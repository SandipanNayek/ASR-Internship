document.addEventListener('DOMContentLoaded', () => {

    
    const tiltElements = document.querySelectorAll('.tilt-3d');

    tiltElements.forEach(element => {
        element.style.transition = 'transform 0.1s ease-out';

        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            element.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
            element.style.zIndex = "10";
        });
         
        

        element.addEventListener('mouseleave', () => {
            
            element.style.transition = 'transform 0.5s ease-out, z-index 0.5s';
            element.style.transform = `
                perspective(1000px) 
                rotateX(0deg) 
                rotateY(0deg) 
                scale3d(1, 1, 1)
            `;
            element.style.zIndex = "1";
            
            
            setTimeout(() => {
                element.style.transition = 'transform 0.1s ease-out';
            }, 500);
        });

        
    });const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
            
            icon.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });
});