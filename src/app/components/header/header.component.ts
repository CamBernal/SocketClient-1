import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  userConnected = false;

  constructor(public socketService: SocketService) {}

  ngOnInit(): void {}

  logout() {
    this.socketService.logoutSS();
    // console.log(this.socketService.checkStatus());
  }
}
