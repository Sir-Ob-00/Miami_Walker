//Code that toggles the FAQ section arrow down and up

document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-chevron-up');
    });
});


//Code for the slider section of the testimonials
const slider = document.getElementById("testimonialSlider");
        let index = 0;

        function slideTestimonials() {
            if (window.innerWidth >= 768) { 
                index = (index + 1) % 3; 
                slider.style.transform = `translateX(-${index * 420}px)`; 
            } else {
                slider.style.transform = "translateX(0)";
            }
        }
        setInterval(slideTestimonials, 3000); 



//Code for the counter section of the ratings
document.addEventListener("DOMContentLoaded", () => {
    function animateCounter(element, start, end, duration) {
        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.innerText = currentValue + (end >= 1000 ? "K+" : "+");

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        requestAnimationFrame(updateCounter);
    }
    const counters = document.querySelectorAll(".ratings-counter");
    counters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute("data-target"));
        animateCounter(counter, 0, targetValue, 2000);
    });
});

