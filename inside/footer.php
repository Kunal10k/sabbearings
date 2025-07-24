<!-- ======================== FOOTER ======================== -->
<footer>
  <img src="assets/img/o2.png" alt="" class="img-fluid acp3 animation">

  <div class="container">
    <h3>Precision Engineered Bearings for Performance That Lasts. 
      Discover Reliability in Every Revolution.</h3>

    <div class="footer">
      <!-- Column 1 -->
      <div class="footer-column">
        <a href="https://www.sabbearings.com/">
          <div class="logo">
            <img src="assets/img/p1.png" alt="Sab Bearings Logo">
          </div>
        </a>
        <p>Follow the latest updates from SAB Bearings.</p>
      </div>

      <!-- Column 2 -->
      <div class="footer-column">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Bearings</a></li>
          <li><a href="#">Search Products</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="footer-column">
        <h4>Contact Info</h4>
        <ul class="list-unstyled contact-info">
          <li><i class="bi bi-geo-alt-fill me-2 text-orange"></i> Corporate Office:<br>
            BIOWONDER, 789 Anandapur, Suite No.1402, 14th Floor, Kolkata – 700107
          </li>
          <li><i class="bi bi-geo-alt-fill me-2 text-orange"></i> Plant:<br>
            Vill – Navaranda, PO – Suriyapur, PS – Titagarh, Kolkata – 700121
          </li>
          <li><i class="bi bi-telephone-fill me-2 text-orange"></i> 033 4005 2688 / 033 4801 4810 / 83348 88280</li>
          <li><i class="bi bi-envelope-fill me-2 text-orange"></i> sales@sabbearings.com</li>
        </ul>

        <div class="footer-social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="copyright">
              © 2025 SRIJI GOPALJI INDUSTRIES PRIVATE LIMITED. All Rights Reserved.
            </div>
          </div>
       
        </div>
      </div>
    </div>


  </div>
</footer>






<!-- footer End -->






<a href="https://wa.me/9051216392" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>


</main>

<!-- ======================== SCRIPTS ======================== -->

<!-- GSAP and ScrollTrigger -->
<script src="https://unpkg.com/split-type"></script>
<!-- ✅ All CDN scripts like gsap, ScrollTrigger should come first -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>

<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- Flickity JS -->
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

<!-- Bootstrap Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>

<!-- Owl Carousel JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<!-- Swiper JS CDN -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Fancybox JS -->
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Custom JavaScript -->
<script src="assets/js/main.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>



<!-- Popup Init -->
<script>
  $(document).ready(function () {
    $('.video-popup').magnificPopup({
      type: 'iframe'
    });
  });
</script>



<script>
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
  });
</script>


<script>
  $(document).ready(function () {
    $('.partner-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 30,
      nav: false,
      navText: ["<i class='fa fa-arrow-left-long'></i>", "<i class='fa fa-arrow-right-long'></i>"],
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
  });
</script>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.process-step');
    const images = document.querySelectorAll('.process-image');

    steps.forEach(step => {
      step.addEventListener('mouseenter', function () {
        // Remove active class from all steps
        steps.forEach(s => {
          s.classList.remove('active');
        });

        // Add active class to current step
        this.classList.add('active');

        // Get the index of the current step
        const index = this.getAttribute('data-index');

        // Hide all images
        images.forEach(img => {
          img.classList.remove('show');
        });

        // Show the corresponding image
        document.querySelector(`.img-${index}`).classList.add('show');
      });
    });

    // Initialize with first step active
    const firstStep = document.querySelector('.process-step[data-index="0"]');
    const firstImage = document.querySelector('.img-0');

    if (firstStep && firstImage) {
      firstStep.classList.add('active');
      firstImage.classList.add('show');
    }
  });
</script>


</body>

</html>