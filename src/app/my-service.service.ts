import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  //num : number = 0;           //  <-- added number of liked property
  //likeStatus: boolean = false;

  constructor() { }

  likeImage (like: boolean) {
    if (like) {
      //this.num = this.num + 1;
      //this.likeStatus = false;
      return false;
    }
    else {
      //this.likeStatus = true;
      return true;
    }
  }
}
