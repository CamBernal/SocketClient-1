import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  // variable para capturar el estdo del servidor
  statusServer = false;

  // variable para crear un usuario
  connectedUser!: User | null;

  // Constructor de la clase
  constructor(private socket: Socket, private router: Router) {
    this.checkStatus();
    this.loadUser();
  }

  // verificar el estado del servidor 'conectado o desconectado'
  public checkStatus() {
    this.socket.on('connect', () => {
      console.log('Connected to Server');
      this.statusServer = true;
      this.loadUser();
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected to Server');
      this.statusServer = false;
    });
  }

  // Emitir eventos o mensajes
  sendMessage(msg: string, payload?: any, callback?: Function) {
    // payload? --> puede venir o no, (opcional)
    this.socket.emit(msg, payload, callback);
  }

  //  Escuchar eventos o mensajes
  listenMessages(msg: string) {
    return this.socket.fromEvent(msg);
  }

  // capturar cunado un usuario se loguea
  loginSS(user: string) {
    return new Promise<void>((resolve, reject) => {
      this.sendMessage('set user', { user }, (res: any) => {
        this.connectedUser = new User(user, '1234');
        this.saveStorage();
        resolve();
      });
    });
  }

  // capturar cuando un usuario cierra sesión
  logoutSS() {
    this.connectedUser = null;
    localStorage.removeItem('usuario');
    const payload = { name: 'sin-nombre' };
    this.sendMessage('set user', payload, () => {});
    this.router.navigateByUrl('/');
  }

  // obtener un usuario
  getUser() {
    return this.connectedUser;
  }

  // guardar ususario
  saveStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.connectedUser));
  }

  // cargar el usuario del storage
  loadUser() {
    if (localStorage.getItem('usuario')) {
      this.connectedUser = JSON.parse(localStorage.getItem('usuario')!);
      this.loginSS(this.connectedUser!.user);
    }
  }
}
