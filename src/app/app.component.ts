import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { MessagesService } from "./models/messages.service";
import { Messages } from './models/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyServiceService],
})
export class AppComponent {
  title = 'mydist';
  messageService: MessagesService = new MessagesService();

  constructor() { 
    let messageList: Messages = this.messageService.outputMessage();
    console.log(messageList.messageContainer[1]);
  }
}
