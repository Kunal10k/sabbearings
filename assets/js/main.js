/**
 * MAIN SCRIPT FILE
 * This file contains all the JavaScript functionality for the website
 * including animations, carousels, and interactive elements.
 */

// Initialize AOS (Animate On Scroll) library
AOS.init();

// Document ready handler
document.addEventListener("DOMContentLoaded", () => {
    // =============================================
    // 1. HERO SLIDER - Auto-rotating slideshow
    // =============================================
    // const initHeroSlider = () => {
    //     const slides = document.querySelectorAll('.hero-slide');
    //     let index = 0;

    //     function showNextSlide() {
    //         slides[index].classList.remove('active');
    //         index = (index + 1) % slides.length;
    //         slides[index].classList.add('active');
    //     }

    //     if (slides.length > 0) {
    //         setInterval(showNextSlide, 5000); // Rotate every 5 seconds
    //     }
    // };
    // initHeroSlider();

    // =============================================
    // 2. COUNTER ANIMATION - Animated number counters
    // =============================================
    const initCounterAnimation = () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    const target = +counter.getAttribute('data-target');
                    gsap.fromTo(counter, {
                        innerText: 0
                    }, {
                        innerText: target,
                        duration: 2,
                        ease: 'power1.out',
                        snap: {
                            innerText: 1
                        },
                        onUpdate: () => {
                            counter.innerText = Math.ceil(counter.innerText);
                        }
                    });
                }
            });
        });
    };
    initCounterAnimation();

    // =============================================
    // 3. OWL CAROUSELS - Initialize all carousels
    // =============================================
    const initOwlCarousels = () => {
        // Testimonial Carousel
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            margin: 20
        });

        // Product Grid Carousel
        $('.product-grid').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 600,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Lamp Carousel
        $('.lamp-carousel').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            smartSpeed: 600,
            dots: false,
            nav: true,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        });

        // Collection Grid Carousel
        $(".collection-grid").owlCarousel({
            loop: true,
            margin: 15,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Category Carousel
        $(".category-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            smartSpeed: 600,
            navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        // Related Products Carousel
        $('.related-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

        // Industries Carousel
        $(".industries-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    };
    initOwlCarousels();

    // =============================================
    // 4. VIDEO TOGGLE - Play/pause background video
    // =============================================
    const initVideoToggle = () => {
        const video = document.getElementById("bgVideo");
        const toggleBtn = document.getElementById("videoToggle");

        if (video && toggleBtn) {
            const icon = toggleBtn.querySelector("i");
            toggleBtn.addEventListener("click", () => {
                if (video.paused) {
                    video.play();
                    icon.classList.replace("fa-play", "fa-pause");
                } else {
                    video.pause();
                    icon.classList.replace("fa-pause", "fa-play");
                }
            });
        }
    };
    initVideoToggle();

    // =============================================
    // 5. GSAP SCROLL ANIMATIONS - Various scroll effects
    // =============================================
    // const initScrollAnimations = () => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Horizontal Scroller Animation
    //     const scroller = document.querySelector('.scroller');
    //     const scrollContainer = document.querySelector('.scroll-container');
    //     const stickyContent = document.querySelector('.sticky-content');

    //     if (scroller && scrollContainer) {
    //         const scrollLength = scroller.scrollWidth - window.innerWidth;
    //         if (scrollLength > 0) {
    //             gsap.to(scroller, {
    //                 x: () => -scrollLength,
    //                 ease: "none",
    //                 scrollTrigger: {
    //                     trigger: scrollContainer,
    //                     start: "top top",
    //                     end: () => "+=" + scrollLength,
    //                     scrub: true,
    //                     pin: scrollContainer,
    //                     anticipatePin: 1
    //                 }
    //             });

    //             if (stickyContent) {
    //                 gsap.to(stickyContent, {
    //                     y: -500,
    //                     ease: "none",
    //                     scrollTrigger: {
    //                         trigger: scrollContainer,
    //                         start: "top top",
    //                         end: () => "+=" + scrollLength,
    //                         scrub: true
    //                     }
    //                 });
    //             }
    //         }
    //     }

    //     // Service Items Animation
    //     gsap.utils.toArray(".service-item").forEach(item => {
    //         gsap.fromTo(item, {
    //             y: 30,
    //             opacity: 0
    //         }, {
    //             y: 0,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: item,
    //                 start: "top 85%",
    //                 toggleActions: "play none none none"
    //             }
    //         });
    //     });

    //     // Text Animations
    //     new SplitType('[animate]', {
    //         types: 'lines, words, chars',
    //         tagName: 'span'
    //     });

    //     gsap.from('[animate] .line', {
    //         y: '100%',
    //         opacity: 0,
    //         duration: 0.5,
    //         stagger: 0.1,
    //         ease: 'power1.out',
    //         scrollTrigger: {
    //             trigger: '[animate]',
    //             start: 'top 80%',
    //             toggleActions: 'play none none none'
    //         }
    //     });

    //     gsap.from('.zoom-img', {
    //         scale: 1.2,
    //         opacity: 0,
    //         duration: 1.5,
    //         ease: 'power2.out',
    //         scrollTrigger: {
    //             trigger: '.zoom-img',
    //             start: 'top 80%',
    //             toggleActions: 'play none none none'
    //         }
    //     });

    //     // Multiple Text Animations
    //     ['.animate-text-1', '.animate-text-2', '.animate-text-3'].forEach((selector, idx) => {
    //         new SplitType(selector, {
    //             types: 'lines',
    //             tagName: 'span'
    //         });
    //         gsap.from(`${selector} .line`, {
    //             scrollTrigger: {
    //                 trigger: selector,
    //                 start: 'top 85%',
    //             },
    //             opacity: 0,
    //             duration: 0.6 + (idx * 0.2),
    //             ease: 'power2.out',
    //             y: idx === 0 ? '100%' : '0%',
    //             x: idx === 1 ? '-100%' : '0%',
    //             stagger: 0.1,
    //         });
    //     });

    //     // General Text Animation
    //     new SplitType('.text-animate', {
    //         types: 'lines, words, chars',
    //         tagName: 'span'
    //     });

    //     gsap.from('.text-animate .word', {
    //         opacity: 0.3,
    //         duration: 0.5,
    //         ease: 'power3.inOut',
    //         stagger: 0.1,
    //         scrollTrigger: {
    //             trigger: '.text-animate',
    //             start: 'top center',
    //             scrub: true
    //         }
    //     });
    // };
    // initScrollAnimations();

    // =============================================
    // 6. BACK TO TOP BUTTON - Smooth scroll to top
    // =============================================
    const initBackToTop = () => {
        const backToTopBtn = document.getElementById("backToTopBtn");
        if (backToTopBtn) {
            window.addEventListener("scroll", () => {
                backToTopBtn.classList.toggle("show", window.scrollY > 300);
            });

            backToTopBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    };
    initBackToTop();

    // =============================================
    // 7. PARALLAX SECTION - Interactive parallax effect
    // =============================================
    const initParallax = () => {
        function animateParallax() {
            const section = document.querySelector('.who-we-are');
            const left = document.querySelector('.parallax-left img');
            const right = document.querySelector('.parallax-right img');
            if (!section || !left || !right) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;
            const windowH = window.innerHeight;

            if (scrollY + windowH > sectionTop && scrollY < sectionTop + sectionHeight) {
                const relativeY = (scrollY + windowH - sectionTop) / (sectionHeight + windowH);
                const moveY = (relativeY - 0.5) * 250;
                left.style.transform = `translateY(${moveY}px) rotate(-8deg)`;
                right.style.transform = `translateY(${-moveY}px) rotate(8deg)`;
            }
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    animateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    };
    initParallax();

    // =============================================
    // 8. ZOOM SECTION SCROLL SCALING - Zoom effect on scroll
    // =============================================
    const initZoomScaling = () => {
        const zoomLeft = document.getElementById("zoom-box-left");
        const zoomRight = document.getElementById("zoom-box-right");
        const sectionLeft = document.getElementById("zoom-section-left");
        const sectionRight = document.getElementById("zoom-section-right");

        if (!zoomLeft || !zoomRight || !sectionLeft || !sectionRight) return;

        let targetScaleLeft = 0.05,
            targetScaleRight = 0.05;
        let currentScaleLeft = 0.05,
            currentScaleRight = 0.05;

        function smoothScale(current, target, factor = 0.07) {
            return current + (target - current) * factor;
        }

        function updateScrollZoom() {
            const winH = window.innerHeight;

            if (sectionLeft && zoomLeft) {
                const leftRect = sectionLeft.getBoundingClientRect();
                const progressLeft = Math.min(1, Math.max(0, (winH - leftRect.top) / winH));
                targetScaleLeft = Math.pow(progressLeft, 1.2);
                currentScaleLeft = smoothScale(currentScaleLeft, targetScaleLeft);
                zoomLeft.style.transform = `scale(${Math.max(0.05, currentScaleLeft)})`;
            }

            if (sectionRight && zoomRight) {
                if (currentScaleLeft >= 0.99) {
                    const rightRect = sectionRight.getBoundingClientRect();
                    const progressRight = Math.min(1, Math.max(0, (winH - rightRect.top) / winH));
                    targetScaleRight = Math.pow(progressRight, 1.2);
                } else {
                    targetScaleRight = 0.05;
                }
                currentScaleRight = smoothScale(currentScaleRight, targetScaleRight);
                zoomRight.style.transform = `scale(${Math.max(0.05, currentScaleRight)})`;
            }

            requestAnimationFrame(updateScrollZoom);
        }

        requestAnimationFrame(updateScrollZoom);
    };
    initZoomScaling();



    // =============================================
    // 10. STATS COUNTER - Animated counting numbers
    // =============================================
    const initStatsCounter = () => {
        const stats = document.querySelectorAll('.stat-count');
        const speed = 200;

        stats.forEach(stat => {
            const updateCount = () => {
                const target = +stat.getAttribute('data-target');
                const current = +stat.innerText;
                const increment = Math.ceil(target / speed);

                if (current < target) {
                    stat.innerText = current + increment;
                    setTimeout(updateCount, 10);
                } else {
                    stat.innerText = target;
                }
            };

            updateCount();
        });
    };
    initStatsCounter();

    // =============================================
    // 11. INFINITE LOGO TRACK - Continuous scrolling
    // =============================================
    const initInfiniteLogoTrack = () => {
        const wrapper = document.getElementById("logoWrapper");
        const track = document.getElementById("logoTrack");

        if (!wrapper || !track) return;

        function cloneUntilFilled() {
            const wrapperWidth = wrapper.offsetWidth;
            let trackWidth = track.scrollWidth;

            const items = Array.from(track.children);
            let i = 0;

            while (trackWidth < wrapperWidth * 2) {
                const clone = items[i % items.length].cloneNode(true);
                track.appendChild(clone);
                i++;
                trackWidth = track.scrollWidth;
            }
        }

        window.addEventListener("load", cloneUntilFilled);
        window.addEventListener("resize", () => {
            // Reset and refill on resize
            const clones = Array.from(track.children).slice(track.children.length / 2);
            clones.forEach(el => el.remove());
            cloneUntilFilled();
        });
    };
    initInfiniteLogoTrack();

    // =============================================
    // 12. TIMELINE TABS - Year-based content switching
    // =============================================
    const initTimelineTabs = () => {
        const tabs = document.querySelectorAll(".year-tab");
        const contents = document.querySelectorAll(".timeline-content");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const year = tab.getAttribute("data-year");

                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));

                tab.classList.add("active");
                document
                    .querySelector(`.timeline-content[data-content="${year}"]`)
                    .classList.add("active");
            });
        });
    };
    initTimelineTabs();

    // =============================================
    // 13. COOKIE BANNER - GDPR compliance
    // =============================================
    const initCookieBanner = () => {
        const cookieBanner = document.getElementById("cookie-banner");
        const acceptBtn = document.getElementById("accept-cookies");
        const rejectBtn = document.getElementById("reject-cookies");

        if (!cookieBanner || !acceptBtn || !rejectBtn) return;

        window.addEventListener("load", () => {
            const cookieConsent = localStorage.getItem("cookie_consent");
            if (!cookieConsent) {
                cookieBanner.style.display = "block";
            }
        });

        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookie_consent", "accepted");
            cookieBanner.style.display = "none";
        });

        rejectBtn.addEventListener("click", () => {
            localStorage.setItem("cookie_consent", "rejected");
            cookieBanner.style.display = "none";
        });
    };
    initCookieBanner();

    // =============================================
    // 14. HEADER SCROLL BEHAVIOR - Sticky header
    // =============================================
    // const initHeaderScroll = () => {
    //     const header = document.querySelector('.site-header');
    //     if (!header) return;

    //     function toggleScrolledClass() {
    //         if (window.scrollY > 10) {
    //             header.classList.add('scrolled');
    //         } else {
    //             header.classList.remove('scrolled');
    //         }
    //     }

    //     toggleScrolledClass(); // Run on page load
    //     window.addEventListener('scroll', toggleScrolledClass);
    // };
    // initHeaderScroll();

    // =============================================
    // 15. MEGA MENU IMAGE PREVIEW - Hover effects
    // =============================================
    const initMegaMenuPreview = () => {
        const listItems = document.querySelectorAll(".mega-menu-list li");
        const previewImg = document.getElementById("megaPreview");

        if (listItems && previewImg) {
            listItems.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    const imgSrc = item.getAttribute("data-img");
                    if (imgSrc) {
                        previewImg.setAttribute("src", imgSrc);
                    }
                });
            });
        }
    };
    initMegaMenuPreview();

    // =============================================
    // 16. MOBILE DROPDOWN TOGGLE - Mobile navigation
    // =============================================
    const initMobileDropdown = () => {
        const dropdownToggle = document.querySelector(".mobile-dropdown .dropdown-toggle");
        const dropdown = document.querySelector(".mobile-dropdown");

        if (dropdownToggle && dropdown) {
            dropdownToggle.addEventListener("click", function () {
                dropdown.classList.toggle("open");
            });
        }
    };
    initMobileDropdown();

    // =============================================
    // 17. PRODUCT IMAGE GALLERY - Thumbnail navigation
    // =============================================
    const initProductGallery = () => {
        const mainImage = document.getElementById("mainImage");
        const mainLink = document.getElementById("mainLink");
        const thumbnails = document.querySelectorAll(".thumbnails img");
        const zoomContainer = document.querySelector(".zoom-container");

        // Thumbnail click functionality
        thumbnails.forEach((thumb) => {
            thumb.addEventListener("click", function () {
                const largeSrc = this.getAttribute("data-large");
                mainImage.src = largeSrc;
                mainLink.href = largeSrc;
            });
        });

        // Mouse move zoom effect
        if (zoomContainer) {
            zoomContainer.addEventListener("mousemove", function (e) {
                const rect = zoomContainer.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                mainImage.style.transform = "scale(2)";
                mainImage.style.transformOrigin = `${x}% ${y}%`;
            });

            // Reset on mouse leave
            zoomContainer.addEventListener("mouseleave", function () {
                mainImage.style.transform = "scale(1)";
                mainImage.style.transformOrigin = "center center";
            });
        }
    };
    initProductGallery();

    // =============================================
    // 18. TAB SYSTEM - Content tab switching
    // =============================================
    const initTabSystem = () => {
        document.querySelectorAll('.tab-list li').forEach((tab, index) => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab-list li').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                document.querySelectorAll('.tab-panel')[index].classList.add('active');
            });
        });
    };
    initTabSystem();

    // =============================================
    // 19. YEARS COUNTER - Animated experience counter
    // =============================================
    const initYearsCounter = () => {
        const yearsElement = document.querySelector('.years');
        if (!yearsElement) return;

        let count = 0;
        const target = 28;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const animateCount = () => {
            count += increment;
            if (count < target) {
                yearsElement.textContent = Math.floor(count) + '+';
                requestAnimationFrame(animateCount);
            } else {
                yearsElement.textContent = target + '+';
            }
        };

        // Start animation when page loads
        window.addEventListener('load', animateCount);
    };
    initYearsCounter();
});








// blog section

$(document).ready(function () {
    $(".blog-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});



$(document).ready(function () {
    $(".industry-carousel").owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: true,
        responsive: {
            768: {
                items: 1
            },
            1024: {
                items: 2
            }
        }
    });
});





$(".process-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1280: {
            items: 3
        }
    }
});




window.addEventListener('scroll', function () {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});







// =============================================
// 9. SWIPER SLIDER - With custom indicators
// =============================================
const initSwiperSlider = () => {
    const slideIndicators = document.getElementById('slideIndicators');
    if (!slideIndicators) return;

    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    for (let i = 0; i < totalSlides; i++) {
        const num = i + 1;
        const span = document.createElement('span');
        span.textContent = num < 10 ? `0${num}` : `${num}`;
        if (i === 0) span.classList.add('active');
        slideIndicators.appendChild(span);
    }

    const indicatorSpans = slideIndicators.querySelectorAll('span');

    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 1200,
        parallax: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            slideChangeTransitionStart: () => {
                animateText();
                updateIndicators();
            },
            init: () => {
                animateText();
            }
        }
    });

    function animateText() {
        const currentSlide = document.querySelector('.swiper-slide-active');
        if (!currentSlide) return;

        const textElems = currentSlide.querySelectorAll('.anim-text');
        gsap.set(textElems, {
            opacity: 0,
            y: 40
        });

        textElems.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                delay: parseFloat(el.dataset.delay) || 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
    }

    function updateIndicators() {
        const realIndex = swiper.realIndex;
        indicatorSpans.forEach((span, i) => {
            span.classList.toggle('active', i === realIndex);
        });
    }
};
initSwiperSlider();



// back to top 

// Show button when scrolled down
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});

// Scroll to top on click
$('#backToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});














document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const bullets = document.querySelectorAll('.bullet');
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;

    // Initialize slider
    function initSlider() {
        // Show first slide
        slides[currentSlide].classList.add('active');
        bullets[currentSlide].classList.add('selected');

        // Start auto slide
        startSlideShow();

        // Add click event to bullets
        bullets.forEach(bullet => {
            bullet.addEventListener('click', function () {
                if (isAnimating) return;
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                if (slideIndex !== currentSlide) {
                    goToSlide(slideIndex);
                }
            });
        });
    }

    // Go to specific slide
    function goToSlide(n) {
        isAnimating = true;

        // Mark current slide as previous
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        bullets[currentSlide].classList.remove('selected');

        // Set new slide
        currentSlide = (n + slides.length) % slides.length;

        // Prepare new slide (position it to the right)
        slides[currentSlide].style.transform = 'translateX(100%)';
        slides[currentSlide].style.opacity = '0';

        // After a short delay to allow CSS to register the initial position
        setTimeout(() => {
            // Remove prev class from all slides
            slides.forEach(slide => {
                slide.classList.remove('prev');
            });

            // Activate new slide (will trigger CSS transition)
            slides[currentSlide].classList.add('active');
            bullets[currentSlide].classList.add('selected');

            // Reset the transform property after adding active class
            setTimeout(() => {
                slides[currentSlide].style.transform = '';
                slides[currentSlide].style.opacity = '';
            }, 10);

            // Reset animation flag after transition completes
            setTimeout(() => {
                isAnimating = false;
            }, 1000);
        }, 10);

        // Reset timer
        resetInterval();
    }

    // Next slide
    function nextSlide() {
        if (isAnimating) return;
        goToSlide(currentSlide + 1);
    }

    // Start slideshow
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Reset interval
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Initialize the slider
    initSlider();
});