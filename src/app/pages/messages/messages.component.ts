import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public socketService: SocketService) { }

  ngOnInit(): void {
  }
  logout(){
    this.socketService.logoutSS();
  }
}
