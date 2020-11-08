import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantsService } from 'src/app/service/restaurants.service';
import { from, Subject, ConnectableObservable, interval, AsyncSubject } from 'rxjs';
import { multicast } from 'rxjs/operators'

@Component({
  selector: 'app-faourite-page',
  templateUrl: './faourite-page.component.html',
  styleUrls: ['./faourite-page.component.scss']
})
export class FaouritePageComponent implements OnInit {

  //pagedList: any[] = [];
  

  faouritePagedata: [
    {username: 'Fav page', firstname:'Favpage first'}
  ]

 @Input() pagedList;

  constructor(private rest: RestaurantsService) { }

  ngOnInit(): void {
    // this.rest.postUserData(this.faouritePagedata).subscribe(success =>{
    //   console.log("User login successfully", success);
    //   //this.pagedList = success['data'];
    //   },
    //   error =>{
    //     console.log("Error catched", error);
    //   }
    // );


    //const source = from([1, 2, 3, 5, 6, 7]);
    // const source = interval(500);

    // const subject = new Subject();

    // const multicasted = source.pipe(multicast(subject));

    // let subscription1, subscription2, subscriptionConnect;

    // subscription1  = multicasted.subscribe({
    //     next:(v) => console.log('subjet calling first', v)
    // });


    // setTimeout(()=>{
    //   subscription2 = multicasted.subscribe({
    //     next:(v) => console.log('subjet calling first', v)
    //   });
    // }, 600);

    // setTimeout(() => {
    //   subscription1.unsubscribe();
    // }, 1200);
    
    // setTimeout(() => {
    //   subscription2.unsubscribe();
    //   subscriptionConnect.unsubscribe(); // for the shared Observable execution
    // }, 2000);

    // subscriptionConnect = (multicasted as ConnectableObservable<number>).connect();

  //   const subject = new AsyncSubject(); // 0 is the initial value

  //   subject.subscribe({
  //     next: (v) => console.log(`first subscribe => : ${v}`)
  //   });

  //   subject.next(1);
  //   subject.next(2);
  //   subject.next(3);
  //   subject.next(4);
  //   subject.next(5);
  //   subject.next(6);

  //   subject.subscribe({
  //     next: (v) => console.log(`second subscriber => : ${v}`)
  //   });
    
  //   subject.next(7);
  //   subject.complete();
   }

}
