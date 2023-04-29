import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  logout(){
    
Swal.fire({
  title: 'Do you want to Logout?',
  showDenyButton: true,
  confirmButtonText: 'Non',
  denyButtonText: `Logout`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isDenied) {
    localStorage.clear();
this.router.navigate(["login"]);
Swal.fire('Logout with success!', '', 'success')
  }
})
  }



}
