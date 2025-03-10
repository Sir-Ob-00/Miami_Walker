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



//Codes for Testimonial slider
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("testimonialSlider");
    const slides = document.querySelectorAll(".testimonial-card");
    let index = 0;
    let interval;

    function shouldSlide() {
        return window.innerWidth >= 768; 
    }

    function resetSlider() {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0px)";
        index = 0;
    }

    function cloneSlides() {
        if (!shouldSlide()) return; 
        
        const clonedSlides = slider.querySelectorAll(".cloned"); 
        clonedSlides.forEach(clone => clone.remove());

        const firstSlides = [...slides].slice(0, 2); 
        firstSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.classList.add("cloned"); 
            slider.appendChild(clone);
        });
    }

    function slideTestimonials() {
        if (!shouldSlide()) return;

        const cardWidth = slides[0].offsetWidth + 24; 
        index++;

        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${index * cardWidth}px)`;

        if (index >= slides.length - 2) {
            setTimeout(() => {
                resetSlider(); // 
            }, 500);
        }
    }

    function startSlider() {
        if (interval) clearInterval(interval);
        
        resetSlider(); 
        cloneSlides(); 

        if (shouldSlide()) {
            interval = setInterval(slideTestimonials, 3000);
        }
    }

    startSlider();
    window.addEventListener("resize", startSlider);
});



// Code for the counter section of the ratings
document.addEventListener("DOMContentLoaded", () => {
    function animateCounter(element, start, end, duration) {
        let startTime = null;
        const suffix = element.innerText.replace(/[0-9]/g, "").trim(); 

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.innerText = currentValue + suffix; 

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


