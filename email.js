document.addEventListener('DOMContentLoaded', function() {
    var user = 'ivan.pico.martin';
    var domain = 'gmail.com';
    var email = user + '@' + domain;
    var emailContainer = document.getElementById('email-container');
    emailContainer.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
});