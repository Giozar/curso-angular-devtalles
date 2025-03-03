import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-super',
  // imports: [NgClass],
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Trunks', power: 7000 },
    { id: 5, name: 'Piccolo', power: 6000 },
    { id: 6, name: 'Bulma', power: 5000 },
    { id: 7, name: 'Krillin', power: 4000 },
    { id: 8, name: 'Picollo', power: 3000 },
    { id: 9, name: 'Chichi', power: 2000 },
    { id: 10, name: 'Yamcha', power: 1000 }
  ]);
}
