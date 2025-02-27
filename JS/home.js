document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');

         // Toggle icons between arrow-down and arrow-up
         const icon = button.querySelector('i');
         icon.classList.toggle('fa-angle-down');
         icon.classList.toggle('fa-chevron-up');
    });
});


const slider = document.getElementById("testimonialSlider");
        let index = 0;

        function slideTestimonials() {
            if (window.innerWidth >= 768) { // Only slide on md screens and larger
                index = (index + 1) % 3; // Loop through 3 cards
                slider.style.transform = `translateX(-${index * 420}px)`; // Adjust for width
            } else {
                slider.style.transform = "translateX(0)"; // Reset position on mobile
            }
        }

        setInterval(slideTestimonials, 3000); // Slide every 3s