import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateRowPage } from 'src/app/modals/create-row/create-row.page';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit {
  rows:any = []

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  addRow(){
    var row = {
      name: 'todo',
      cols: [3, 6, 3]
    }
    this.rows.push(row)
  }

  deleteRows(){
    this.rows = []
  }

  removeRow(row){
    var index = this.rows.indexOf(row)
    this.rows.splice(index,1)
  }

  // Function to open Create row modal
async presentCreateRowModal(){
  const modal = await this.modalController.create({
    component: CreateRowPage,
  });

  modal.onDidDismiss()
      .then((layout) => {
        var row = {
          name: 'New Row',
          cols: layout.data
        }
        console.log(row)
        this.rows.push(row)
    });

  return await modal.present();
}

}
