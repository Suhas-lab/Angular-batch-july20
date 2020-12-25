import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/service/restaurants.service';
import { from, Subject, ConnectableObservable, interval, AsyncSubject } from 'rxjs';
import { multicast } from 'rxjs/operators'
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-favorate-page',
  templateUrl: './favorate-page.component.html',
  styleUrls: ['./favorate-page.component.scss']
})
export class FavoratePageComponent implements OnInit {

  faouratePagedata: [
    {username: 'Fav page', firstname:'Favpage first'}
  ]

 @Input() pagedList;
 @Input() dataObj;

  constructor(private rest: RestaurantsService) { 
    console.log(this.dataObj)
  }

  ngOnInit(): void {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log(`first subscribe => : ${v}`)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
    subject.next(6);

    subject.subscribe({
      next: (v) => console.log(`second subscriber => : ${v}`)
    });
    
    subject.next(7);
    subject.complete();
  }

}
