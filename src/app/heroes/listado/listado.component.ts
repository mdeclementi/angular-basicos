import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
	heroes: string[] = ['Sipderman','Ironman','Hulk','Batman','Capitanga'];
	heroeBorrado: string = '';

	borrarHeroe() {
		this.heroeBorrado = this.heroes.shift() || '';
	}
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-listado',
//   templateUrl: './listado.component.html'
// })
// export class ListadoComponent {
// 	heroes: string[] = ['Sipderman','Ironman','Hulk','Batman','Capitanga'];
// 	heroesBorrados: string[] = [];

// 	borrarHeroe() {
// 		//console.log('borrando heror...')
// 		//this.heroes.splice(0,1);
// 		const heroeBorrado = this.heroes.shift() || '';
// 		heroeBorrado ? console.log('Se ha eliminado el hore: ' + heroeBorrado) : console.log('no hay mas info')

// 		heroeBorrado ? this.heroesBorrados.push(heroeBorrado) : console.log('no hay mas info')
// 		// if(this.heroesBorrados.length<0) {
// 		// 	console.log('no hay herores borrados')
// 		// }
// 	}
// }