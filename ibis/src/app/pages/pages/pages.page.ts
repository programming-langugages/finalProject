import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  pages: any = [];

  constructor(public storage: Storage, public router: Router, public tools: ToolsService) {
    
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getPages();
  }

  async getPages(){
    this.pages = await this.storage.get('pages')
  }

  openPage(page){
    this.tools.currentPageName = page.name;
    this.tools.currentRows = page.rows;
    this.router.navigate(['/create-page'])
  }

  newPage(){
    this.tools.currentPageName = null;
    this.tools.currentRows = null;
    this.router.navigate(['/create-page'])
  }
}
