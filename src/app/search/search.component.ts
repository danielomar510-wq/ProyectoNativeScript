import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
import { NoticiasService } from "../domain/noticias.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    providers: [NoticiasService]
})
export class SearchComponent implements OnInit {
    resultados: Array<string> = []; 

    constructor(private noticias: NoticiasService) { }

    ngOnInit(): void { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(): void {
        console.dir();
    }

    buscarAhora(s: string) {
        this.noticias.buscar(s).then((r: any) => {
            console.log("resultados buscarAhora: " + JSON.stringify(r));
            this.resultados = r;
        }, (e) => {
            console.log("error buscarAhora: " + e);
        });
    }
}