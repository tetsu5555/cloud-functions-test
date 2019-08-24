// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// 環境変数のemail確認 & クライアントから送信されたtokenを検証する
exports.verifyEmailAndToken = functions.https.onRequest((req, res) => {
    const { token, email } = req.body;
    const validEmails = functions.config().emails
    const emailOk = validEmails.includes(email);

    if (!emailOk) {
        const response = { "code": "auth/argument-error", "message": "invalid email", "uid": decodedToken.uid}
        res.status(401).send(response);
        return
    }

    let checkRevoked = true;
    admin.auth().verifyIdToken(token, checkRevoked)
        .then((decodedToken) => {
            const response = { "code": "auth/success", "message": "success", "uid": decodedToken.uid}
            res.status(200).send(response)
        })
        .catch(e => {
            res.status(401).send(e)
        });
});
