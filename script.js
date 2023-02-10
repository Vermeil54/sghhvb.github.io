    var btn = document.getElementById('btn');
    btn.addEventListener('click',function(e) {
        e.preventDefault()
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var body = 'email: ' + email + '<br/> subject: ' + subject;
        Email.send({
    SecureToken : "af2d1483-3e6c-40cd-8f63-0e1a40c83888",
    To : 'hengk5843@gmail.com',
    From : "hengk7401@gmail.com",
    Subject : subject,
    Body : body
}).then(
);
    })