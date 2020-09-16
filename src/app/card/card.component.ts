import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faDatabase, faEnvelope, faMapMarkedAlt, faPhone,} from '@fortawesome/free-solid-svg-icons';

import {UserService} from '../services/user.service';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() user;
  @Output() newUser: EventEmitter<any>;

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;

  constructor(private userService: UserService) {
    this.newUser = new EventEmitter<any>()
  }

  ngOnInit(): void {
  }

  generateNewUser(){
    this.userService.getUser().subscribe((data:any) => {
      this.newUser.emit(data)
    }, error => console.log(error))
  }




}
