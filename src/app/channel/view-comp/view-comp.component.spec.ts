import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompComponent } from './view-comp.component';
import {ChannelService} from '../channel.service';

describe('ViewCompComponent', () => {
  let component: ViewCompComponent;
  let fixture: ComponentFixture<ViewCompComponent>;
  let service : ChannelService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompComponent);
    service = TestBed.get(ChannelService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  /*it('component function',() =>{
    component.callServiceFunction();
    //change Detection
    fixture.detectChanges();
  })*/
});
