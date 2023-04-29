import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import { VoitureService } from 'src/app/services/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.css']
})
export class AjouterVoitureComponent implements OnInit{
  constructor(private ms:MarqueService, public voitureService: VoitureService,private router:Router) { }

  marques:Marque[]=[];

  ngOnInit() {
    this.ms.getAllMarques().subscribe(data=>{this.marques=data;})
  }

  AjouterVoiture(f:any){
    let fd = new FormData();
    //fd.append("file",this.file);
    fd.append("voiture",JSON.stringify(fd));
    console.log(f.value)
    this.voitureService.saveVoiture(f.value).subscribe(voiture=>{
      console.log(voiture)
      Swal.fire({
        title: 'Added!',
        text: 'Car has been added.',
        icon: 'success'
      })
      this.router.navigate(["/voiture"])
    })
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
