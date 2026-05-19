import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
constructor(private noticias: NoticiasService) { 
    // Use the component constructor to inject providers.
}

  ngOnInit(): void {
    console.log("adasd");
    console.log({nombre: {nombre: {nombre: {nombre: "pepe"}}}});
    console.dir({nombre: {nombre: {nombre: {nombre: "pepe"}}}});
    console.log([1, 2, 3]);
    console.dir([4, 5, 6]);
}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
