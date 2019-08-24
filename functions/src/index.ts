import * as admin from 'firebase-admin';
import { AddMessage } from './AddMessage'
import { CheckEmails } from './CheckEmails'
import { ListConfig } from './ListConfig'
import { RequestBody } from './RequestBody'
import { VerifyEmailAndToken } from './VerifyEmailAndToken'

admin.initializeApp();

export const addMessage = AddMessage
export const checkEmails = CheckEmails
export const listConfig = ListConfig
export const requestBody = RequestBody
export const verifyEmailAndToken = VerifyEmailAndToken

