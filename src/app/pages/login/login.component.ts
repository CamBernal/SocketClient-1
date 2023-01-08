import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //porpiedades
  user = '';
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    public socketService: SocketService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      pass: '',
    });
  }

  ngOnInit(): void {}

  //logearse en el chat
  login() {
    // Process checkout data here    console.log(user);
    this.socketService.loginSS(this.user).then( () =>{
      this.router.navigateByUrl('/messages');
    });
  }
  // this.checkoutForm.reset();
}
