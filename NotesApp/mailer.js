const mailer = require('nodemailer')

function sendEmail(email,body, callback){
    const transport = mailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "ntkn mdxc fivo ihub",
      },
    });

    transport.sendMail(
    {
        from: "noreplynotesapp@gmail.com",
        to: email,
        subject: "Activate your Notes App",
        html: body,
    },callback);
}


module.exports = {
    sendEmail : sendEmail
}