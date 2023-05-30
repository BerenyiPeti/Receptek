import { Component, OnDestroy, OnInit } from '@angular/core';
import { TablazatService } from './tablazat.service';
import { DataStorageService } from '../data-storage.service';
import { Recept } from '../recept-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recept-tablazat',
  templateUrl: './recept-tablazat.component.html',
  styleUrls: ['./recept-tablazat.component.css']
})
export class ReceptTablazatComponent implements OnInit, OnDestroy{
  constructor(private ts: TablazatService, private ds: DataStorageService) { }

  adatok: Recept[]
  kategoriak: []
  dataChangedSub: Subscription
  kategoriakChangedSub: Subscription
  receptSelected: boolean

  ngOnInit(): void {
    this.receptSelected = false
    this.ds.fetchReceptek()
    this.ds.fetchKategoriak()

    this.dataChangedSub = this.ts.dataChanged.subscribe((data: Recept[]) => {
      this.adatok = data
    })

    this.kategoriakChangedSub = this.ts.kategoriaChanged.subscribe((data)=> {
      this.kategoriak = data
    })
  }

  ngOnDestroy(): void {
    this.dataChangedSub.unsubscribe()
    this.kategoriakChangedSub.unsubscribe()
    this.receptSelected = false
  }

  onClickSor(id: number) {
    console.log(id);
    console.log(this.ts.getRecept(id));
    this.ts.setSelectedRecept(id)
    
  }

  onSelected(value: string) {
    if (value === 'összes') {
      this.ds.fetchReceptek()
    } else {
      this.ds.getSortedReceptek(value)
    }
    
    
  }
}
