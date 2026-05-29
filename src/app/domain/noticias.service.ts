import { Injectable } from "@angular/core";
import { Http } from "@nativescript/core";

@Injectable()
export class NoticiasService {

    api: string = "http://localhost:3000";

agregar(s: string) {
        return Http.request({
            url: this.api + "/favs",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                nuevo: s
            })
        });
    }

    favs() {
        return Http.getJSON(this.api + "/favs");
    }

    buscar(s: string) {
        return Http.getJSON(this.api + "/get?q=" + s);
    }
}
