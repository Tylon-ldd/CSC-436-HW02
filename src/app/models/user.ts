import { MessagesService } from "./messages.service";

export class User {
    userName: String;
    userID: number;

    constructor(userName: String, userID: number) {
        this.userName = userName;
        this.userID = userID;
    }
}
