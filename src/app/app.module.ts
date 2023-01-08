import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatsComponent } from './components/chats/chats.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';

const config: SocketIoConfig = { url: environment.urlServer, options: {} };

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, ChatsComponent, UsersComponent, LoginComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SocketIoModule.forRoot(config), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
