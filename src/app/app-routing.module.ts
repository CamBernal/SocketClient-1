import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';
import { UserGuardService } from './guards/user-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'messenger', component: ChatsComponent, canActivate: [UserGuardService] },
  { path: 'messages', component: MessagesComponent, canActivate: [UserGuardService] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
