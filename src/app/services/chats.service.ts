import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(public socketService: SocketService) { }

   //Enviar mensajes
  sendMessage(message: string) {
    const payload = {
      de: this.socketService.getUser()?.user,
      mensaje: message
      // datos: []     
    };
    this.socketService.sendMessage('message', payload);
  }

  // capturar los mensajes o eventos de otros clients 
  getMessage(){
    return this.socketService.listenMessages('new-message');
  }

  // obtener mensajes privadeos
  getMessagesPrivate(){
    return this.socketService.listenMessages('private-messsage');
  }

  // obtener los usuarios activos 
  getActiveUsers(){
    return this.socketService.listenMessages('active-users')
  }

  // emitir usuarios activos 
  shareActiveUsers(){
    this.socketService.sendMessage('get users');
  }
}
