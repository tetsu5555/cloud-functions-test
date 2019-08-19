const functions = require('firebase-functions');

exports.checkEmails = functions.https.onRequest((request, response) => {
    const mail = request.query.mail;
    const emails = functions.config().emails
    const emaiOk = emails.includes(mail);
    response.send({emaiOk})
})
