import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
constructor(private authService:AuthService,private router:Router){
  if(authService.getAcess()!=null){this.router.navigate(['home'])}}

  save(f:NgForm){
    this.authService.login(f.value).subscribe(data =>{
      if (data.success){
        console.log(data.token)
        this.authService.setAcess(data.token);
        this.router.navigate(['home'])
      } else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message,
        })
      }
    })
  }

}
