import { Component, OnInit } from '@angular/core';
import { ChatsService } from './services/chats.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Client-Angular';

  constructor(public socketService: SocketService, public chatService: ChatsService) {}

  ngOnInit() {
    this.chatService.getMessagesPrivate().subscribe(msgp => {
      console.log(msgp);
      
    });
  }
}
