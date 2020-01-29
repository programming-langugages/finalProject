import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public menuCtrl: MenuController) {}

  goToCreatePage(){
    this.router.navigate(['/create-page'])
  }

  openMenu() {
    this.menuCtrl.open();
  }
}

