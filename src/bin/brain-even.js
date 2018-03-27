#!/usr/bin/env node
import { showWelcomeMsg, questionMsg, logUser, question } from './../';

showWelcomeMsg();
questionMsg();
const userName = logUser();
question(userName);
