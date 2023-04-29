import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-marque',
  templateUrl: './ajouter-marque.component.html',
  styleUrls: ['./ajouter-marque.component.css']
})
export class AjouterMarqueComponent implements OnInit{
  marque: Marque[]=[];
  ngOnInit(): void {
 
      
  }
  constructor(private marqueService:MarqueService,private router:Router){
  
  }
  
  insertData(f:NgForm){
 
    this.marqueService.saveMarque(f.value).subscribe(res=>{
      console.log(res);
      Swal.fire({
        title: 'Added!',
        text: 'Marque has been added.',
        icon: 'success'
      })
      this.router.navigate(['voiture'])
  
    })
  }
  retour(){
    this.router.navigate(['voiture'])
  }
}
