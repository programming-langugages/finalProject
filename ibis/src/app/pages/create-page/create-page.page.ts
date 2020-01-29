import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { CreateRowPage } from 'src/app/modals/create-row/create-row.page';

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
    public menuCtrl: MenuController
  ) {

   }

  ngOnInit() {

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

generatePage(){
  console.log(this.rows)
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
            `+ col.content + `
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
  //1this.download(page, this.pageName + '.html', 'text/plain');
}

download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
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

}
