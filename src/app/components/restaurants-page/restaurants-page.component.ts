import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RestaurantsService } from '../../service/restaurants.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthserviceService } from '../../service/authservice.service'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { asyncScheduler } from 'rxjs';
import { FaouritePageComponent } from '../faourite-page/faourite-page.component';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {

@ViewChild(FaouritePageComponent) child;


  cols: any;
  datalist: any[];
  pagedList : any[];

  breakpoint: number = 3;  //to adjust to screen
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 3;  //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];

  pageEvent : PageEvent;

  data: any = {
    name:'',
    job: ''
  }

  userkeys: any ={

  }

  dataObj = []

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
  constructor(private rest: RestaurantsService, private auth: AuthserviceService, private route: Router) { }




  ngOnInit():void {

    //this.auth.getUpdateRecord();

    const task = () => console.log('it works!');

    asyncScheduler.schedule(task, 5000);

    

  }

  

  passdataToAnotherComp(e){
    

    // this.dataObj = [
    //   {id: 1, name: 'Suhas'},
    //   {id:2, name: 'Manoj'},
    //   {id:3, name:'Ruchika'}
    // ]

  }

  

  submitUsers(e){
    console.log("user details", this.data);
    this.rest.postUserData(this.data).subscribe(success =>{
      //this.route.navigate(['/favourite-page']);
      this.pagedList = success.data
    },
    error =>{
      console.log("Error catched", error);
    }
    )
  }

  OnPageChange(event: PageEvent){
    console.log("page event captured",event)
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.pagedList.slice(startIndex, endIndex);
  }

  clearAllArray(){
    this.pagedList = [];
    this.dataObj = [];
    //console.log("")
  }

  rxexample(e){
    const nums = of(100, 200, 300);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log(x));

    debugger;
    this.rest.getRestraurantList({}).subscribe(success=>{
      this.pagedList = success.data;
      this.length = success.data.length;
      console.log(success.data);
    },
    error => {
      console.log(error);
    }
    );
  }

}
