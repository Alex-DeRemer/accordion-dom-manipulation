// Variables

const accordion = document.getElementsByClassName('content-container');


// For loop

for(i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}