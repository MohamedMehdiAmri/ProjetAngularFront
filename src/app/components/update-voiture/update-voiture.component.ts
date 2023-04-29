import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { Voiture } from 'src/app/models/voiture';
import { MarqueService } from 'src/app/services/marque.service';
import { VoitureService } from 'src/app/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {
voiture!:Voiture;
idV:number=0;
file!:File;
marques:Marque[]=[];

  
    
  
  constructor(public voitureService:VoitureService,public marqueService:MarqueService , public ar:ActivatedRoute, public router:Router){ }
  ngOnInit(): void {
    this.marqueService.getAllMarques().subscribe(data=>{this.marques=data;})
    this.idV=Number(this.ar.snapshot.paramMap.get('id'));
    this.ar.paramMap.subscribe(params => {
      this.voitureService.getVoitureById(this.idV).subscribe(data=>{this.voiture=data})
    })
  }
  UpdateVoiture(f: any) {
    const body = f.value;
    console.log(f.value);
    
    body.id = this.idV;
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to update this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.voitureService.update(this.idV,body).subscribe(voiture => {
          Swal.fire({
            title: 'Updated!',
            text: 'Car has been updated.',
            icon: 'success'
          }).then(() => {
            this.router.navigate(['/voiture']);
          });
        });
      }
    });
  }
  //UpdateVoiture(f:any){
   //const body = f.value;
   //body.id = this.idV;
    //this.voitureService.update(this.idV,body).subscribe(voiture=>{
      //console.log("ok")
      //this.router.navigate(["/voiture"])
    //})
  //}
  fileName: string ="";
  selectImage(e){
    let files: File[] = e.target.files;
    const formData: FormData = new FormData();
    for (const file of files){
      formData.append("files", file, file.name)
    }
    this.voitureService.upload(formData).subscribe(
      (res: any)=>{        
        this.fileName = res[0];
        console.log(this.fileName);
        
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
        
      }
    )
    console.log(this.fileName);
    
  
}

}


