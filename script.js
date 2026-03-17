// Mega Energía - Administradores de Fincas

document.addEventListener('DOMContentLoaded', function () {

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-list a').forEach(function (link) {
        link.addEventListener('click', function () {
            navList.classList.remove('active');
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const item = this.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(function (faq) {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
                faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Open clicked if it was closed
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Header shadow on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // Form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            // Simulate submission (replace with real endpoint)
            setTimeout(function () {
                btn.textContent = 'Solicitud enviada';
                btn.style.background = '#188bf6';
                form.reset();
                setTimeout(function () {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Animate numbers on scroll
    const observerOptions = { threshold: 0.5 };
    const numberObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.number-value').forEach(function (el) {
                    animateNumber(el);
                });
                numberObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const numbersSection = document.querySelector('.numbers-grid');
    if (numbersSection) {
        numberObserver.observe(numbersSection);
    }

    function animateNumber(el) {
        const text = el.textContent;
        const match = text.match(/([+]?)(\d[\d.]*)(.*)/);
        if (!match) return;

        const prefix = match[1];
        const numStr = match[2];
        const suffix = match[3];
        const target = parseFloat(numStr.replace('.', ''));
        const hasDecimal = numStr.includes('.');
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            let current = Math.floor(target * eased);

            if (hasDecimal) {
                current = current.toLocaleString('es-ES');
            }

            el.textContent = prefix + current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = text;
            }
        }

        requestAnimationFrame(update);
    }
});
