import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe]
})
export class HeroPageComponent {
    name = signal('Superman');
    age = signal(30);
    heroDescription = computed(() => {
        const description = this.name() + ' ' + this.age();
        return description;
    })
    capitalizedName = computed(() => {
        return this.name().toUpperCase();
    })

    constructor() {}

    changeHero(){
        this.name.set('Batman');
        this.age.set(40);
    }

    changeAge(){
        this.age.update((current) => current + 1);
    }

    resetForm(){
        this.name.set('Superman');
        this.age.set(30);
    }
}