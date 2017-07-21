import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {
  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController ) {}
  showAlert(title: string, desc: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: desc,
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    
    return loading;
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">Custom loading style</div>
      </div>`,
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
    
    return loading;
  }

  presentLoadingText(text:string) {
    let loading = this.loadingCtrl.create({
      content: text
    });

    loading.present();

    return loading;
  }
}
