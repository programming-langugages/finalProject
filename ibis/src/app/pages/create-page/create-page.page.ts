import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { CreateRowPage } from 'src/app/modals/create-row/create-row.page';
import { Storage } from '@ionic/storage';
import { ToolsService } from 'src/app/services/tools.service';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit {
  rows:any = []
  pageName: any = "New Page"

  constructor(
    public modalController: ModalController,
    public menuCtrl: MenuController,
    private storage: Storage,
    public tools: ToolsService,
    public toastController: ToastController,
    private http: HttpClient,
    public loadingController: LoadingController
  ) {

   }

  ngOnInit() {

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Generando página...'
    });
    await loading.present();
  }

  async dismissLoader() {
    return await this.loadingController.dismiss()
  }

  ionViewDidEnter(){
    if(this.tools.currentPageName)
      this.pageName = this.tools.currentPageName
    if(this.tools.currentRows)
      this.rows = this.tools.currentRows
    console.log("current rows", this.tools.currentRows)
  }

  deleteRows(){
    this.rows = []
  }

  openMenu() {
    this.menuCtrl.open();
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
          name: 'New row',
          cols: layout.data
        }
        console.log(row)
        this.rows.push(row)
    });

  return await modal.present();
}

async generatePage(){
  console.log(this.rows)
  await this.presentLoading();
  var header = `
  <html>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
  `
  var body = ''
  for(let row of this.rows){
    body += `
        <!--` + row.name + `-->
        <div class="row">
    `
    for(let col of row.cols){
      body += `
          <div class="col-`+ col.size +`">
            `+ await this.getTranslation(col.content) + `
          </div>
      `
    }
    body +=`
        </div>
    `
  }
  var end_body = `
      </div>
    </body>
  </html>
  `

  var page = header + body + end_body
  console.log(page)
  this.download(page, this.pageName + '.html', 'text/plain');
  await this.dismissLoader();
}

download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);
    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */
    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
 }


 async savePage(){
  var pages = await this.storage.get('pages')
  if(!pages){
    pages = []
    pages.push({name: this.pageName, rows: this.rows})
  }else{
    var page = pages.find((item) => item.name == this.pageName)
    if(page)
      page.rows = this.rows
    else
      pages.push({name: this.pageName, rows: this.rows})
  }
  this.presentToast()
  this.storage.set('pages', pages)
 }


 async presentToast() {
  const toast = await this.toastController.create({
    message: 'Your page have been saved.',
    duration: 2000
  });
  toast.present();
}


 getTranslation(content):Promise<any>{
   let url = "http://localhost:1337" //TIENE QUE PONER EL ENDPOINT DE VERDAD
   let body = {
     content: content.toString()
   }
   console.log("Body request", body)
   return this.http.post(url, body).toPromise()
   .then((response) => {return Promise.resolve(response.translation)})
   .catch((error)=>{
    console.error("Error in translation", error)
    return Promise.resolve(content) //CUANDO DA ERROR DEVOLVEMOS EL MISMO CONTENT SIN SER TRADUCIDO
   })
 }
}
