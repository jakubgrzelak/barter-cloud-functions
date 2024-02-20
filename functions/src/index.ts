import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { addAccountHandler } from "./addAccountHandler";

initializeApp();

export const addAccount = functions.auth.user().onCreate(addAccountHandler);
