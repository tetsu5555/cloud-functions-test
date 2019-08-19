// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const { helloWorld } = require('./HelloWorld')
const { addMessage } = require('./AddMessage')
const { checkEmails } = require('./CheckEmails')
const { makeUpperCase } = require('./MakeUppercase')
const { requestBody } = require('./RequestBody')

exports.helloWorld = helloWorld
exports.addMessage = addMessage
exports.checkEmails = checkEmails
exports.makeUpperCase = makeUpperCase
exports.requestBody = requestBody

