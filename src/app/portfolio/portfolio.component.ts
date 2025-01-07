import { Component } from '@angular/core';
interface image{
  src:string;
  alt?:string
}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgs:string[]=
  [
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png'
  ];
  imgIndex: number = 0;
  imgSrc: string = '';
  showLightContainer: boolean = false;

  openImg(i: number): void {
    this.imgIndex = i;
    this.imgSrc = this.imgs[this.imgIndex];
    this.showLightContainer = true;
  }

  closeImg(): void {
    this.showLightContainer = false;
  }

  nextImage(): void {
    this.imgIndex = (this.imgIndex + 1) % this.imgs.length;
    this.imgSrc = this.imgs[this.imgIndex];
  }

  prevImage(): void {
    this.imgIndex = (this.imgIndex - 1 + this.imgs.length) % this.imgs.length;
    this.imgSrc = this.imgs[this.imgIndex];
  }


}
