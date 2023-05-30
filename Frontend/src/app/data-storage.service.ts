import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { TablazatService } from "./recept-tablazat/tablazat.service";
import { Recept } from "./recept-interface";

@Injectable({
    providedIn: 'root'
})

export class DataStorageService {
    constructor(private http: HttpClient, private ts: TablazatService) { }

    fetchReceptek() {
        this.http.get(URl + '/receptek/list').subscribe((data: Recept[]) => {
            this.ts.setAdatok(data)
        })
    }

    fetchKategoriak() {
        this.http.get(URl + '/kategoriak/list').subscribe((data: []) => {
            this.ts.setKategoriak(data)
            console.log(data);

        })
    }

    getSortedReceptek(nev: string) {
        this.http.get(URl + '/receptek/listByKategoria/' + nev).subscribe((data: Recept[]) => {
            this.ts.setSortedAdatok(data)
        })
    }


}

export const URl = 'https://localhost:7258'