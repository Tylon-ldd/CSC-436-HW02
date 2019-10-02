import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from "../my-service.service";

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  providers: [MyServiceService],
})
export class MyButtonComponent implements OnInit {

  likeStatus: boolean = false;

  constructor(private myService: MyServiceService) { 
    
  }

  ngOnInit() {
  }

  isLiked(): boolean {
    this.likeStatus = this.myService.likeImage(this.likeStatus);
    console.log(this.likeStatus);
    return this.likeStatus;
  }

}
