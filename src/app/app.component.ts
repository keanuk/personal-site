import { Component, Directive, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 

  constructor() { }

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    document.getElementById("navbar").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.opacity = "0";
  }
} 
