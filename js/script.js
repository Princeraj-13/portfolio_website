// responsive navbar 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// active hover navbar 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });


    // sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove responsive navbar when click navbar link 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

// scrollreveal 

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Hacker'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// functionable contact form

function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "princerajchy1733@gmail.com",
        Password: "FA553CE5F5CC4F19680CF8109F2F6791AC94",
        To: 'malehacker001@gmail.com',
        From: document.getElementById("email").value,
        Subject: "application for a sick leave",
        Body: "Name:" + document.getElementById("name").value 
      + "<br> Email:" + document.getElementById("email").value 
      + "<br> Phone:" + document.getElementById("phone").value 
      + "<br> Subject:" + document.getElementById("e-subject").value 
      + "<br> Message:" + document.getElementById("message").value 



    }).then(
        _message => alert("Message sent succesfully")
    );
}