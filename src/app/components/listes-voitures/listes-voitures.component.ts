import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Voiture } from 'src/app/models/voiture';
import { MarqueService } from 'src/app/services/marque.service';
import { VoitureService } from 'src/app/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listes-voitures',
  templateUrl: './listes-voitures.component.html',
  styleUrls: ['./listes-voitures.component.css']
})
export class ListesVoituresComponent implements OnInit{
  
 page :number=1;
 voitures:Voiture[]=[];
 voituresF:Voiture[]=[];
 categories:any[]=[];
 marques:any[]= [];
 constructor(private ar:ActivatedRoute, public voitureService:VoitureService,
   public marqueService:MarqueService,private router:Router ){
  marqueService.getAllMarques().subscribe(marques=>{
   this.marques = marques;
  })
   //this.categories.push({id: 1, nom: "Mercedes", })
 };
 
 getAllVoiture(){
 
this.voitureService.getAllVoiture().subscribe(voitures=>{
   this.voitures=voitures;
  this.voituresF=voitures;

 } 

 )
 }
 onTableDataChange(event: any) {
   this.page = event;
 }
set v(a:string){
 this.voituresF= this.filtrer(a)
}
filtrer (contenu:string){
 return this.voitures.filter(
   (x)=>
   x.name.indexOf(contenu)!= -1 || x.brand.name.indexOf(contenu)!= -1 
 )
}
 
 ngOnInit() {

  this.ar.paramMap.subscribe(params=>{
   let exist=this.ar.snapshot.paramMap.has('brand')
   if (!exist){
     this.voitureService.getAllVoiture().subscribe(data=>{
       this.voitures=data;
       this.voituresF=this.voitures;
       console.log(this.voituresF)
     })
   } else {
    console.log("g")
     let brand:string=this.ar.snapshot.params['brand']
     this.voitureService.getByBrand(brand).subscribe(data=>{
      this.voitures=data;
      this.voituresF=data;
      console.log(this.voituresF)});
   }
  })
   this.getAllVoiture() 
 }
 deleteData(id:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id);
   this.voitureService.delete(id).subscribe(res => {
    this.page = this.page - 1;
    this.getAllVoiture();
});
      Swal.fire(
        'Deleted!',
        'Your Car has been deleted.',
        'success'
      )
    }
  })
   


 }
 getMarquePath(selectedMarque:string){
   const imageObject = this.marques.filter(marque => marque.name === selectedMarque)[0];
   if(imageObject){
     return 'assets/'+ imageObject.imagePath ;
   } else {
     return 'assets/icon/marque/default.png'; 
   }
 


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

 //supprimer(item:Voiture){
  
   //this.voitureService.delete(item.id).subscribe(()=>this.voituresF.splice(this.voituresF.indexOf(item),1))
   
   //console.log(this.voituresF)


}
