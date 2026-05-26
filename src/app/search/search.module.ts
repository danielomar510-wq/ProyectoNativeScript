import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-formcomponent';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent,
        SearchFormComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SearchModule { }