const functions = require('firebase-functions');

exports.requestBody = functions.https.onRequest((request, response) => {
    if (request.body.message === undefined) {
        console.log("err")
        // This is an error case, as "message" is required
        response.status(400).send('No message defined!');
    } else {
        // Everything is ok
        console.log(request.body.message);
        response.send({message: request.body.message})
    }
});
