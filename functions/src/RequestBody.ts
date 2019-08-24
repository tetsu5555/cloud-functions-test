import * as functions from 'firebase-functions';

export const RequestBody = functions.https.onRequest((request, response) => {
    if (request.body.message === undefined) {
        // This is an error case, as "message" is required
        response.status(400).send('No message defined!');
    } else {
        // Everything is ok
        console.log(request.body.message);
        response.send({message: request.body.message})
    }
});
