import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  activeUser!: Observable<any>;

  constructor(public chatService: ChatsService) { this.chatService.getActiveUsers();
  }

  ngOnInit(): void {
    this.activeUser = this.chatService.getActiveUsers();
    this.chatService.shareActiveUsers();
  }

}
