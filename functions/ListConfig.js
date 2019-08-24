// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

exports.listConfig = functions.https.onRequest((request, response) => {
    response.send(functions.config());
});
