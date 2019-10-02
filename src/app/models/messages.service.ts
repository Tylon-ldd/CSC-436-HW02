import { Injectable } from '@angular/core';
import { Message } from './message';
import {Messages} from './messages'
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageContainer: Messages = new Messages();

  constructor() {
    this.initialize();
  }

  initialize() {
    let message01: Message = new Message( 1, 'tom', 'asdfasdf');
    let message02: Message = new Message( 2, 'jerry', 'asdfasdfasdfasd');
    let message03: Message = new Message( 3, 'hennry', 'youoyoyoiyo');
    let message04: Message = new Message( 4, 'henna', 'qwerqewrqew');
    this.messageContainer.addMassage(message01);
    this.messageContainer.addMassage(message02);
    this.messageContainer.addMassage(message03);
    this.messageContainer.addMassage(message04);
  }

  outputMessage(): Messages {
    return this.messageContainer;
  }

}
