import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recept } from "../recept-interface";

@Injectable({
    providedIn: 'root'
})

export class TablazatService {
    dataChanged = new Subject<Recept[]>()
    selectedReceptChanged = new Subject<Recept>()
    kategoriaChanged = new Subject<any>()

    private adatok: Recept[]
    private selectedRecept: Recept
    private kategoriak: []

    setAdatok(receptek: Recept[]) {
        this.adatok = receptek
        this.dataChanged.next(this.adatok.slice())
    }

    setSortedAdatok(receptek: Recept[]) {
        this.adatok = receptek
        this.dataChanged.next(this.adatok.slice())

    }

    setKategoriak(kategoriak: []) {
        this.kategoriak = kategoriak
        this.kategoriaChanged.next(this.kategoriak.slice())
    }

    setSelectedRecept(receptId: number) {
        this.selectedRecept = this.adatok[this.getReceptIndex(receptId)]
        this.selectedReceptChanged.next(this.selectedRecept)
    }

    getReceptIndex(receptId: number) {
        let index = this.adatok.findIndex(id => id.id === receptId)
        return index
    }

    getRecept(receptId: number) {
        return this.adatok[this.getReceptIndex(receptId)]
    }
}