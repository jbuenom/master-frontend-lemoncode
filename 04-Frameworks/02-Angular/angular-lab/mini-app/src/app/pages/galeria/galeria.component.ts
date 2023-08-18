import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  images = [
    {id: 1, src: 'assets/img/pexels-denner-trindade-17821539.jpg', title: 'bridge'},
    {id: 2, src: 'assets/img/pexels-febe-vanermen-17827719.jpg', title: 'snow'},
    {id: 3, src: 'assets/img/pexels-mokhalad-musavi-16452397.jpg', title: 'desert'},
    {id: 4, src: 'assets/img/pexels-norbert-kundrak-1630442.jpg', title: 'city'},
    {id: 5, src: 'assets/img/pexels-peter-holmboe-17878653.jpg', title: 'mountain'},
    {id: 6, src: 'assets/img/pexels-rahib-yaqubov-15056061.jpg', title: 'mosque'},
    {id: 7, src: 'assets/img/pexels-soner-arkan-17733091.jpg', title: 'sea'},
    {id: 8, src: 'assets/img/pexels-├ính-─æß║Àng-16398350.jpg', title: 'flower'},
  ]

  imageSelected = this.images[0];

  initPage = 0;
  endPage = 3;
  sizePage = 3;


  widthImage = 500;
  heightImage = 250;
  showStop = false;
  intervalId!: any;


  onBefore(): void {
    const index = this.images.findIndex((image) => image.id === this.imageSelected.id);
    this.imageSelected = this.images[index-1];
    
  }

  onNext(): void {
    const index = this.images.findIndex((image) => image.id === this.imageSelected.id);
    this.imageSelected = this.images[index+1];
  }

  onIncrease(): void {
      this.widthImage+= 50;
      this.heightImage+=25;
  }

  onDecrease(): void {
    if(this.widthImage > 51 && this.heightImage > 26) {
    this.widthImage-=50;
    this.heightImage-=25;
    }
  }

  onPlay(): void {
    this.showStop = true;
    this.intervalId = setInterval(() => {
      const index = this.images.findIndex((image) => image.id === this.imageSelected.id);
      if(index === (this.images.length - 1)) {
        this.imageSelected = this.images[0];
      } else {
        this.imageSelected = this.images[index+1];
      }
    }, 2000);
  }

  onStop(): void {
    this.showStop = false;
    clearInterval(this.intervalId);
  }

  previousPage(): void {
    if(this.initPage > 0) {
      this.initPage -= this.sizePage;
      this.endPage -= this.sizePage;
    }
  }

  nextPage(): void {
    if(this.endPage < this.images.length - 1) {
      this.initPage += this.sizePage;
      this.endPage += this.sizePage;
    }
  }

  isLast(): boolean {
    const index = this.images.findIndex((image) => image.id === this.imageSelected.id);
    return (this.images.length - 1 )  === index;
  }

  isFirst(): boolean {
    const index = this.images.findIndex((image) => image.id === this.imageSelected.id);
    return index === 0;
  }

  onImage(id: number) {
    const index = this.images.findIndex((image) => image.id === id);
    this.imageSelected = this.images[index];
  }
}