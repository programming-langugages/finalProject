import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-row',
  templateUrl: './create-row.page.html',
  styleUrls: ['./create-row.page.scss'],
})
export class CreateRowPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  //Function to close modal
  closeModal() {
    this.modalController.dismiss();
  }

  setLayout(sizes){
    var layout = []
    for(let size of sizes){
      layout.push({
        size : size,
        content: '<p>Nicolás maricon ijoputa</p>'
      })
    }
    this.modalController.dismiss(layout);
  }
}
