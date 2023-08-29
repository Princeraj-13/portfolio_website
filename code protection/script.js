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

// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Hacker'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// functionable contact form

function Send(){
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var subject = document.getElementById("e-subject").value;
   var messages = document.getElementById("message").value;

var body = "Name:" + name + "<br> Email:" + email + "<br> Phone:" + phone + "<br> Subject:" + subject + "<br> Message:" + messages;

console.log(body);

    Email.send({
        SecureToken : "1f6a625f-8697-408c-bbba-6131336043b2",
        To : 'princerajchy1733@gmail.com',
        From : "princerajchy1733@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message =>{
        if(message=='OK'){
            swal("Successfull!", "Message Received🤝👍", "success");
        }
        else{
            swal("Oops!", "Something went wrong🥺", "error");

        }
      }
    );
    
}