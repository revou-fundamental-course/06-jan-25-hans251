// Replace name
function replaceName() {
    let nama = prompt('Masukkan nama:')
    document.getElementById('name').innerHTML = nama;
}
replaceName()



// Profile
let profile = document.getElementById('my-profile');
const aboutMe = document.getElementById('about-me');
aboutMe.addEventListener('click', () => {
  profile.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint iste rem consequatur hic? Distinctio, reiciendis alias eligendi tempora molestiae culpa, quia facilis asperiores obcaecati voluptatum dolorum repellendus ipsum, aut incidunt.</p>
  <br>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint iste rem consequatur hic? Distinctio, reiciendis alias eligendi tempora molestiae culpa, quia facilis asperiores obcaecati voluptatum dolorum repellendus ipsum, aut incidunt.</p>
  <br>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint iste rem consequatur hic? Distinctio, reiciendis alias eligendi tempora molestiae culpa, quia facilis asperiores obcaecati voluptatum dolorum repellendus ipsum, aut incidunt.</p>`
  profile.style.flexDirection = "column"
})

// SlideShow
let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Manual Slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto Slide
function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// Show form value
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("click", (event) => {
  event.preventDefault();
  const cName = document.getElementById("cName").value;
  const date = document.getElementById("date").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message-client").value;

  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const currentTime = now.toLocaleString("en-US", options);

  const clientValue = document.getElementById("client-value");
  clientValue.innerHTML = ` <p><strong>Current Time:</strong> ${currentTime}</p>
                          <br>
                          <p><strong>Name:</strong> ${cName}</p>
                          <p><strong>Birth Of Date:</strong> ${date}</p>
                          <p><strong>Gender:</strong> ${gender}</p>
                          <p><strong>Message:</strong> ${message}</p>
                          `;
});
