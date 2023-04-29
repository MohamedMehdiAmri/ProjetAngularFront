import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-marque-voiture',
  templateUrl: './marque-voiture.component.html',
  styleUrls: ['./marque-voiture.component.css']
})
export class MarqueVoitureComponent implements OnInit{

  constructor(private ms:MarqueService){

  }

  brand:Marque[] = [];

  ngOnInit(): void {
    this.ms.getAllMarques().subscribe(data=>{this.brand=data;});
  }

  onDelete(id){
    this.ms.deleteMarque(id).subscribe(
      (res)=>{
        console.log(res);
        this.ms.getAllMarques().subscribe(data=>{this.brand=data;});
      }
    )
  }

}
