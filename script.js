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
                setTimeout(type, 100); // Adjust typing speed here
            }
        }

        setTimeout(type, index * 2000); // Delay each line's typing animation
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slides li");
    const slideCount = slideItems.length;
    let currentIdx = 0;
    const slideWidth = 330; // �����̵� ���� ���� ������ ��
    const slideMargin = 30;

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function moveSlide(num) {
        slides.style.transform = `translateX(${-num * (slideWidth + slideMargin)}px)`;
        currentIdx = num;
        showSlides(); // �����̵� �̵� �Ŀ� ������ ��Ÿ���� ȿ�� ����
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

    nextBtn.addEventListener('click', function() {
        if (currentIdx < slideCount - 3) {
            moveSlide(currentIdx + 1);
        } else {
            moveSlide(0);
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        } else {
            moveSlide(slideCount - 3);
        }
    });

    showSlides(); // ������ �ε� �� �ʱ� �����̵� ǥ��

    // Fade-in ȿ�� ����
    const favoriteSection = document.querySelector("#favorite");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                favoriteSection.classList.add("show");
            }
        });
    });

    observer.observe(favoriteSection);
});


