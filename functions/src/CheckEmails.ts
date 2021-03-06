import * as functions from 'firebase-functions';

export const CheckEmails = functions.https.onRequest((request, response) => {
    const mail = request.query.mail;
    const emails = functions.config().emails
    const emaiOk = emails.includes(mail);
    response.send({emaiOk})
})
