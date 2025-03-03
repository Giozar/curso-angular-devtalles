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
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
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
