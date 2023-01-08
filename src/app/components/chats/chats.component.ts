import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit, OnDestroy {
  //Propiedades
  text = '';
  mensajeSubscription: Subscription = new Subscription();
  elemento!: HTMLElement;
  chats: any[] = [];

  constructor(public chatService: ChatsService) {}

  ngOnInit(): void {
    // const elemento = document.getElementById('chats') as HTMLElement;
    this.elemento = document.getElementById('chats')!;
    // this.mensajeSubscription = this.chatService.getMessage().subscribe((msg) => {
    //   this.chats.push(msg);

    //   setTimeout(() => {
    //     this.elemento.scrollTop = this.elemento.scrollHeight;
    //   }, 100);
    // });
    this.chatService.getMessage().subscribe((msg) => {
      this.chats.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 100);
    });
  }

  ngOnDestroy(): void {
    this.mensajeSubscription.unsubscribe();
  }

  public send() {
    if (this.text.trim().length === 0) {
      return;
    }
    this.chatService.sendMessage(this.text);
    this.text = '';
  }
}
