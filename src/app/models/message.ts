import { User } from "./user";
import { MessagesService } from "./messages.service";

export class Message {
    senderID: number;
    senderName: String; 
    text: String;
    nowTime: Date;

    constructor(senderID: number, senderName: String, text: String) { 
        this.nowTime = (new Date()).toTimeString;
        this.senderID = senderID;
        this.senderName = senderName;
        this.text = text;
    }
}
