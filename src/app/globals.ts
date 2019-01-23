import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  firstName = 'Keanu';
  lastName = 'Kerr';
  fullName = this.firstName + ' ' + this.lastName;
}
