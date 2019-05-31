import { Component, OnInit, HostListener } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable} from 'rxjs';
import { map, takeWhile, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  constructor() { }

  ngOnInit() {

  }

  goTo(url): void {
    window.location.href = url;
  }
}
