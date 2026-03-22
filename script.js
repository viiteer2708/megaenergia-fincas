// Mega Energía - Administradores de Fincas

document.addEventListener('DOMContentLoaded', function () {

    // Mobile nav toggle
    var navToggle = document.getElementById('navToggle');
    var navList = document.getElementById('navList');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
            var isOpen = navList.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-list a').forEach(function (link) {
        link.addEventListener('click', function () {
            navList.classList.remove('active');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.closest('.faq-item');
            var answer = item.querySelector('.faq-answer');
            var isActive = item.classList.contains('active');

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

    // Header scroll effect
    var header = document.getElementById('header');
    var lastScrollY = 0;

    function handleHeaderScroll() {
        var scrollY = window.scrollY;
        if (scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var offset = 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // Scroll Reveal Animation
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // Mobile Sticky CTA
    var mobileCta = document.getElementById('mobileCta');
    var heroSection = document.querySelector('.hero');
    var formSection = document.getElementById('formulario');

    if (mobileCta && heroSection) {
        var stickyObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                // Show sticky CTA when hero is not visible
                if (!entry.isIntersecting) {
                    // Check if form is visible
                    var formRect = formSection ? formSection.getBoundingClientRect() : null;
                    var formVisible = formRect && formRect.top < window.innerHeight && formRect.bottom > 0;
                    if (!formVisible) {
                        mobileCta.classList.add('visible');
                    } else {
                        mobileCta.classList.remove('visible');
                    }
                } else {
                    mobileCta.classList.remove('visible');
                }
            });
        }, { threshold: 0 });

        stickyObserver.observe(heroSection);

        // Also hide when form is in view
        if (formSection) {
            var formObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        mobileCta.classList.remove('visible');
                    } else if (!heroSection.getBoundingClientRect().bottom > 0) {
                        mobileCta.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            formObserver.observe(formSection);
        }
    }

    // Add spin animation dynamically
    var style = document.createElement('style');
    style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
});
