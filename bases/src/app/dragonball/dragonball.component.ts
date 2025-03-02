import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  // imports: [NgClass],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  name = signal('Goku');
  power = signal(10000);

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

  addCharacter() {
    console.log(this.name(), this.power());

    if(!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update(characters => [...characters, newCharacter]);

    this.resetFields();

  }

  resetFields(){
    this.name.set('');
    this.power.set(0);

  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // })

}
