import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { MarqueService } from 'src/app/services/marque.service';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  idV:number=0;
  voiture!:Voiture;
  constructor(public voitureService:VoitureService,public marqueService:MarqueService , public ar:ActivatedRoute, public router:Router){ }
  ngOnInit(): void {
    this.idV=Number(this.ar.snapshot.paramMap.get('id'));
    this.ar.paramMap.subscribe(params => {
      this.voitureService.getVoitureById(this.idV).subscribe(data=>{this.voiture=data})
    })
  }
  retour(){
    this.router.navigate(['voiture'])
  }

}
