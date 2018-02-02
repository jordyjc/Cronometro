import { Component } from '@angular/core';

import { Ventana1Page } from "../ventana1/ventana1";
import { RegistrosPage } from "../registros/registros";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Ventana1Page;
  tab2Root = RegistrosPage;

  constructor() {

  }
}
