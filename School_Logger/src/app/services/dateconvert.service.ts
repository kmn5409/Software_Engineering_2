import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateconvertService {

  constructor() { }


  timeSince(dob) {
    dob = Date.now() -  new Date(dob).getTime();
    var date = new Date(dob);
    var seconds = date.getTime() / 1000; 
  
    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
}
