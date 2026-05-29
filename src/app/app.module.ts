import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

// Importaciones esenciales de NgRx
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// Importaciones de rutas y componentes base
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoticiasService } from "./domain/noticias.service";
// 1. Definición de la interfaz global del Estado de la App
export interface AppState {
    noticias: any; 
}


const reducersInitialState = {
};

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        
    ],
    providers: [
        NoticiasService
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }