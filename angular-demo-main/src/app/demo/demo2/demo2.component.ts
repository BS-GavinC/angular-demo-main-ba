import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {

  isActive : boolean = false;

  users : user[] = [
    {
      name : 'pol',
      lastname : 'pol',
      age : 25
    },
    {
      name : 'poul',
      lastname : 'poul',
      age : 2
    },
    {
      name : 'pil',
      lastname : 'pil',
      age : 65
    },
    {
      name : 'pul',
      lastname : 'pul',
      age : 47
    }
  ]

}

export interface user{
  name: string
  lastname : string
  age : number
}
