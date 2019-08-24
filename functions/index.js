// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const { listConfig } = require('./ListConfig')
const { addMessage } = require('./AddMessage')
const { checkEmails } = require('./CheckEmails')
const { makeUpperCase } = require('./MakeUppercase')
const { requestBody } = require('./RequestBody')
const { verifyEmailAndToken } = require('./VerifyEmailAndToken')

exports.helloWorld = helloWorld
exports.addMessage = addMessage
exports.checkEmails = checkEmails
exports.makeUpperCase = makeUpperCase
exports.requestBody = requestBody
exports.verifyEmailAndToken = verifyEmailAndToken

