import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Recept } from '../recept-interface';
import { TablazatService } from '../recept-tablazat/tablazat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recept-sor',
  templateUrl: './recept-sor.component.html',
  styleUrls: ['./recept-sor.component.css']
})
export class ReceptSorComponent implements OnInit, OnDestroy{
  constructor(private ts: TablazatService) { }

  //@Input() selectedRecept: Recept
  selectedRecept: Recept
  nev: string = ''
  kat: string = ''
  kep: string = ''
  leiras: string = ''

  receptSub: Subscription

  ngOnInit(): void {
    this.receptSub = this.ts.selectedReceptChanged.subscribe((data: Recept) => {
      this.selectedRecept = data
      this.nev = data.nev
      this.kat = data.katNev
      this.kep = data.kep_eleresi_ut
      this.leiras = data.leiras
    })
  }

  ngOnDestroy(): void {
    this.receptSub.unsubscribe()
  }
}
