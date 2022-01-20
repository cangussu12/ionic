import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public precoGasolina: string
  public precoAlcool: string
  public resultado: string = ""

  calcular() {
    //validar se os campos foram preenchidos

    if(this.precoAlcool && this.precoGasolina) {

      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoAlcool)
      
      var res = pAlcool / pGasolina
      if( res >= 0.7) {
        this.resultado = "Melhor utilizar Gasolina"

      } else {
        this.resultado = "Melhor utilizar Alcool"
      }
    } else {
     
      this.resultado = "Preencha corretamente os campos !"
    }
  }
}
