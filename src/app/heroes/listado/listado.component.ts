import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroesborrado: string = '';

  borraHeroe():void{
    const heroeBorrado = this.heroes.shift() || '';


    this.heroesborrado = heroeBorrado;
  }
}
