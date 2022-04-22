import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://thucanh.net/wp-content/uploads/2021/05/153690725_471266317334718_4681912668534432416_n.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
