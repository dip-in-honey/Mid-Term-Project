document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');
    const typingLines = document.querySelectorAll('.typing-line');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    typingLines.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                const char = text.charAt(i);
                element.textContent += char;
                i++;
                setTimeout(type, 100);
            }
        }

        setTimeout(type, index * 2000); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slides li");
    const slideCount = slideItems.length;
    let currentIdx = 0;
    const slideWidth = 330;
    const slideMargin = 30;

    if (slides) {
        slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';
    }

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function moveSlide(num) {
        if (slides) {
            slides.style.transform = `translateX(${-num * (slideWidth + slideMargin)}px)`;
            currentIdx = num;
            showSlides();
        }
    }

    function showSlides() {
        slideItems.forEach((item, index) => {
            if (index >= currentIdx && index < currentIdx + 3) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentIdx < slideCount - 3) {
                moveSlide(currentIdx + 1);
            } else {
                moveSlide(0);
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentIdx > 0) {
                moveSlide(currentIdx - 1);
            } else {
                moveSlide(slideCount - 3);
            }
        });
    }

    showSlides();

    const favoriteSection = document.querySelector("#favorite");
    if (favoriteSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    favoriteSection.classList.add("show");
                }
            });
        });

        observer.observe(favoriteSection);
    }
});
