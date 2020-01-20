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

  setLayout(layout){
    this.modalController.dismiss(layout);
  }
}
