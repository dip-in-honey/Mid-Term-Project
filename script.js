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
