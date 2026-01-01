//header


// NavBar

class THeader extends HTMLElement {
    connectedCallback() {

        /* Load Unicons CSS inside JS */
        const unicons = document.createElement("link");
        unicons.rel = "stylesheet";
        unicons.href = "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
        document.head.appendChild(unicons);

        
        this.innerHTML = `
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: "Poppins", sans-serif;
                }
               
    
                body {
                    background: #f0faff;
                }
                .nav {
                   
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 15px 200px;
                    background: #000000;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .nav .nav-links {
                    display: flex;
                    align-items: center;
                    column-gap: 90px;
                    list-style: none;
                }
                .nav .nav-links a {
                    color: #fff;
                    text-decoration: none;
                    transition: all 0.2s linear;
                }
                .nav .logo {
                    font-size: 22px;
                    font-weight: 500;
                    color: #fff;
                    text-decoration: none;
                }
                .nav .navOpenBtn,
                .nav .navCloseBtn {
                    display: none;
                }
                @media screen and (max-width: 1160px) {
                    .nav {
                        padding: 15px 100px;
                    }
                }
                @media screen and (max-width: 950px) {
                    .nav {
                        padding: 15px 50px;
                    }
                }
                @media screen and (max-width: 768px) {
                    .nav .navOpenBtn,
                    .nav .navCloseBtn {
                        display: block;
                    }
                    .nav {
                        padding: 15px 20px;
                    }
                    .nav .nav-links {
                        position: fixed;
                        top: 0;
                        left: -100%;
                        height: 100%;
                        max-width: 280px;
                        width: 100%;
                        padding-top: 100px;
                        row-gap: 30px;
                        flex-direction: column;
                        background-color: #11101d;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        transition: all 0.4s ease;
                        z-index: 100;
                    }
                    .nav.openNav .nav-links {
                        left: 0;
                    }
                    .nav .navOpenBtn {
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                    }
                    .nav .navCloseBtn {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            </style>

            <nav class="nav" id="home">
                <i class="uil uil-bars navOpenBtn"></i>
                <a href="#" class="logo">Lawyer</a>

                <ul class="nav-links">
                    <i class="uil uil-times navCloseBtn"></i>
                    <li><a href="#home" class="scroll-link">Home</a></li>
                    <li><a href="#services" class="scroll-link">Services</a></li>
                    <li><a href="#about" class="scroll-link">About Us</a></li>
                    <li><a href="#contact" class="scroll-link">Contact Us</a></li>
                </ul>
            </nav>
        `;

      //  nav open btn
        const nav = this.querySelector(".nav");
        const navOpenBtn = this.querySelector(".navOpenBtn");
        const navCloseBtn = this.querySelector(".navCloseBtn");

        navOpenBtn.addEventListener("click", () => {
            nav.classList.add("openNav");
        });

        navCloseBtn.addEventListener("click", () => {
            nav.classList.remove("openNav");
        });
    }
}

customElements.define("t-header", THeader);



// PageSlider

 const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('dots');
    let currentIndex = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function goToSlide(i) {
      currentIndex = i;
      showSlide(currentIndex);
    }

    // --- Mobile Swipe Navigation ---
    let startX = 0;
    slider.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }
    });

    setInterval(nextSlide, 6000);



    //  Services Slider

const slides2 = document.querySelectorAll(".slide2");
let index2 = 0;

function showSlide2(i) {
  slides2[index2].classList.remove("active2");
  index2 = (i + slides2.length) % slides2.length;
  slides2[index2].classList.add("active2");
}

document.querySelector(".next2").addEventListener("click", () => {
  showSlide2(index2 + 1);
});

document.querySelector(".prev2").addEventListener("click", () => {
  showSlide2(index2 - 1);
});

// autoplay
// setInterval(() => {
//   showSlide2(index2 + 1);
// }, 7000);


// Contact Us

// Initialize EmailJS
(function() {
  emailjs.init('YOUR_EMAILJS_USER_ID');
})();

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you! Your message has been sent.';
        contactForm.reset();
      }, function(error) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Oops! Something went wrong.';
      });
  });
});

// Google Maps initialization
function initMap() {
  const location = { lat: 31.5204, lng: 74.3587 }; // example coordinates
  const map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 14
  });
  new google.maps.Marker({
    position: location,
    map: map,
    title: 'Our Location'
  });
}



// Send Message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

 emailjs.send("service_f4rlgkx","template_po8ak1s")
    .then(() => {
      alert("Email Sent Successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send email.");
    });
});




// Footer

class TFooter extends HTMLElement {
    connectedCallback() {

        // ✅ Insert HTML + YOUR ORIGINAL CSS (NO CHANGES)
        this.innerHTML = `
            <style>
${this.getFooterCSS()}
            </style>

            <footer id="lawyer-footer" class="footer">
              <div class="footer-main">
                <div class="footer-column footer-left">
                  <img src="https://via.placeholder.com/150x50/ffffff/000000?text=Law+Firm+Logo" alt="Law Firm Logo" class="footer-logo">
                  <p class="footer-description">Dedicated to providing expert legal services with integrity and professionalism. Serving clients nationwide for over 20 years.</p>
                </div>

                <div class="footer-column footer-middle">
                  <h3 class="column-title">Quick Links</h3>
                  <ul class="footer-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </div>

                <div class="footer-column footer-right">
                  <h3 class="column-title">Contact Us</h3>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Email:</strong> <a href="mailto:info@lawfirm.com">info@lawfirm.com</a></p>
                  <p><strong>Address:</strong> 123 Justice Ave, Suite 400, New York, NY</p>

                  <div class="social-icons">
                   

                    <a href="https://twitter.com/lawfirm" class="social-link" target="_blank" aria-label="Twitter">
                      <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>

                    <a href="https://facebook.com/lawfirm" class="social-link" target="_blank" aria-label="Facebook">
                      <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="footer-bottom">
                <p>&copy; 2025 [Law Firm Name]. All Rights Reserved. 
                  <a href="#privacy">Privacy Policy</a> | 
                  <a href="#terms">Terms of Service</a>
                </p>
              </div>

              <button id="back-to-top" class="back-to-top" aria-label="Back to Top">↑</button>
            </footer>
        `;

        // ✅ Back to top button
        const btn = this.querySelector("#back-to-top");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                btn.classList.add("show");
            } else {
                btn.classList.remove("show");
            }
        });

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ✅ Put CSS in a method so template stays clean
    getFooterCSS() {
        return `
/* Import Google Fonts for Typography */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Merriweather', serif;
  line-height: 1.6;
}

/* Footer Styles */
.footer {
  position: relative;
  background: #000000;
  color: #ffffff;
  padding: 40px 20px 20px;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  animation: borderGlow 8s ease-in-out infinite;
}

@keyframes borderGlow {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-logo {
  width: 150px;
  margin-bottom: 10px;
}

.footer-description {
  font-size: 0.9rem;
  color: #e2e8f0;
}

.column-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
}

.footer-nav {
  list-style: none;
}

.footer-nav li {
  margin-bottom: 8px;
}

.footer-nav a {
  color: #e2e8f0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #ffffff;
}

.footer-right p {
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.footer-right a {
  color: #ffffff;
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-link {
  color: #e2e8f0;
  transition: color 0.3s ease, filter 0.3s ease;
}

.social-link:hover {
  color: #ffffff;
  filter: drop-shadow(0 0 5px #ffffff);
}

.social-icon {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #4a5568;
  padding-top: 20px;
  font-size: 0.8rem;
  color: #cbd5e0;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ffffff;
  color: #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    text-align: center;
  }
}
        `;
    }
}

customElements.define("t-footer", TFooter);

