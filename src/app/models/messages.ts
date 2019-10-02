import { Message } from './message';
import { MessagesService } from "./messages.service";

export class Messages {
    messageContainer: Message[] = [];

    constructor() { }

    addMassage(message: Message) {
        this.messageContainer.push(message);
    }
}
