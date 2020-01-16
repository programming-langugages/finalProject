import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit {
  rows:any = []

  constructor() { }

  ngOnInit() {
  }

  addRow(){
    var row = {
      name: 'todo',
      cols: ["3", "6", "3"]
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
}
