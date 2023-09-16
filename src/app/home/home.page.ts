import { Component,} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private animation!: Animation;
  constructor(private router: Router, private auth: AutenticacionService) { }
  public mensaje = ""

  public alertButtons = ['OK'];

  

  user = {
    usuario: "",
    password: ""
  }

  enviarInformacion() {
    this.auth.login(this.user.usuario, this.user.password)
    if (this.auth.autenticado) {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.mensaje = "Debe ingresar sus credenciales";
    }
  }
}
