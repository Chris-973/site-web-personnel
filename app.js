function sendMail(params) {
    var tempParams = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value,


    };

    emailjs.send('service_1npelk3', 'template_j9h7gds', tempParams)
        .then(function(res) {
            console.log("success", res.status);
        })
}