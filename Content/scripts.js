// Use this file to add interactive elements like scroll reveal, modal popups, etc.

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', revealTargets);

    function revealTargets() {
        var targets = document.querySelectorAll('.target');

        for (var i = 0; i < targets.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = targets[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                targets[i].classList.add('active');
            } else {
                targets[i].classList.remove('active');
            }
        }
    }

    // This is a placeholder for you to expand upon. For example, you can add event listeners
    // to the 'Learn More' buttons to open a modal window with more information.
});
