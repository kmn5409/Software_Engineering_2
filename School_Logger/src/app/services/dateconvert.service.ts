import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateconvertService {

  constructor() { }


  timeSince(prev) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    console.log(prev);
    console.log( new Date().getTime());
    console.log( new Date());
    let y = new Date();
    console.log(y.getMonth() + '/' + y.getDate()+ '/' + y.getFullYear());

    var elapsed = new Date().getTime() - new Date(prev).getTime();

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
         return  Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
         return  Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
         return  Math.round(elapsed/msPerYear ) + ' years ago';   
    }

  }

}




