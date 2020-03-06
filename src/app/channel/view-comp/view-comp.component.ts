import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../channel.service';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {
  channelListArray = [];
  firstArray = [];
  secondArray = [];
  thirdArray = [];
  forthArray = [];
  firstDateFormat = '';
  secondDateFormat = '';
  thirdDateFormat = '';
  forthDateFormat = '';
  constructor(private channelService:ChannelService) { }

  ngOnInit() {
    this.callServiceFunction();
  }

  callServiceFunction(){
    this.channelService.getDetails().subscribe({
      next:(response) =>{
        if(response.length > 0 || response !==null || response !==undefined){
          this.channelListArray = response;
          // sort logic for date  wise
          this.channelListArray.sort(function(a, b) {
            a = new Date(a.time);
            b = new Date(b.time);
            return a<b ? -1 :  1 ;
          });

          //comparing of time key
           var firstDate = ['2016-01-01 20:00:00','2016-01-01 21:00:00',];
          // Adding to array based on date wise
          this.firstArray = this.channelListArray.filter((item) =>{
            return firstDate.indexOf(item.time) > -1;
          });
          // To show Date
          this.firstDateFormat = this.firstArray[0].time;

          //comparing of time key
          var secondDate = ['2016-01-03 20:00:00','2016-01-03 21:00:00','2016-01-03 22:00:00'];
          // Adding to array based on date wise
          this.secondArray = this.channelListArray.filter((item) =>{
            return secondDate.indexOf(item.time) > -1;
          });

          // To show Date
          this.secondDateFormat = this.secondArray[0].time;


          //comparing of time key
          var thirdDate = ['2016-01-04 21:00:00'];
          // Adding to array based on date wise
          this.thirdArray = this.channelListArray.filter((item) =>{
            return thirdDate.indexOf(item.time) > -1;
          });
          // To show Date
          this.thirdDateFormat = this.thirdArray[0].time;

          //comparing of time key
          var forthDate = ['2016-01-05 19:00:00','2016-01-05 22:00:00'];
          // Adding to array based on date wise
          this.forthArray = this.channelListArray.filter((item) =>{
            return forthDate.indexOf(item.time) > -1;
          });
          // To show Date
          this.forthDateFormat = this.forthArray[0].time;
        }
      },
      error:(error) =>{

      }
    });
  }
}
