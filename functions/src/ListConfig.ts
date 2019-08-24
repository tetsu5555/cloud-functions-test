// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

export const ListConfig = functions.https.onRequest((request, response) => {
    response.send(functions.config());
});
