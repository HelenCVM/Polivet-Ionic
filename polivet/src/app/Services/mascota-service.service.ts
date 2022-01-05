import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Mascota, Raza } from '../Modelo/Mascota';


@Injectable({
  providedIn: 'root'
})
export class MascotaServiceService {

  private url: string;
  private urlEspecie: string;
  constructor(public http: HttpClient, public alertController: AlertController) {
    this.url = '/TesisVeterinaria/rest/prueba/registrarMascota'
  }

  crearMascota(mascota: Mascota) {
    console.log("serviciossss", mascota)
    const body = new HttpParams()
      .set('idPro', mascota.idPro)
      .set('nombre', mascota.nombre)
      .set('especie', mascota.especie)
      .set('raza', mascota.raza)
      .set('sexo', mascota.sexo)
      .set('fechaNac', mascota.fechaNac)
      .set('edad', mascota.edad)
      .set('coloYSenalesParti', mascota.coloYSenalesParti)

    return this.http.post(this.url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
  }

  obtenerEspecie() {
    console.log("Estamos en el service")
    return this.http.get("/TesisVeterinaria/rest/prueba/obtenerEspecieMascota")
  }
  obtenerRaza(idEspecie) {
    console.log("Estamos en el service especie")
    return this.http.get("/TesisVeterinaria/rest/prueba/obtenerRazaByEspecie/" + idEspecie)
  }
  crearEspecie(especie: Raza) {
    console.log("Crear especie", especie)
    const body = new HttpParams()
      .set('nombreEspecie', especie.nombreEspecie)
    return this.http.post("/TesisVeterinaria/rest/prueba/registrarEspecie",
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
  }

  

  editarEspecie(especie, nombreEspecie) {
    console.log("editar especie", especie, nombreEspecie)
    const body = new HttpParams()
      .set('idEspecie', especie)
      .set('nombreEspecie', nombreEspecie)
    return this.http.post("/TesisVeterinaria/rest/prueba/editarEspecie",
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
  }

  eliminarEspecie(especie) {
    console.log("eliminar especie", especie)
    const body = new HttpParams()
      .set('idEspecie', especie)

    return this.http.post("/TesisVeterinaria/rest/prueba/eliminarEspecie/",
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'

      }

    );
}

crearRaza(raza: Raza) {
  console.log("Crear especie", raza)
  const body = new HttpParams()
    .set('nombreEspecie', raza.nombreEspecie)
    .set('nombreRaza', raza.nombre)
  return this.http.post("/TesisVeterinaria/rest/prueba/registrarRaza",
    body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    }
  );
}

editarRaza(especie, nombreEspecie, nombreRaza) {
  console.log("editar especie", especie, nombreEspecie, nombreRaza)
  const body = new HttpParams()
    .set('raza_id', especie)
    .set('nombreRaza', nombreRaza)
    .set('nombreEspecie',nombreEspecie )
  return this.http.post("/TesisVeterinaria/rest/prueba/editarRaza",
    body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'
    }
  );
}

eliminarRaza(raza) {
  console.log("eliminar raza", raza)
  const body = new HttpParams()
    .set('idRaza', raza)

  return this.http.post("/TesisVeterinaria/rest/prueba/eliminarRaza",
    body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      responseType: 'text'

    }

  );
}
  async presentAlert(texto: string, subtitulo: string) {
    let aceptar = false;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: texto,
      subHeader: subtitulo,
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',

      }, {
        text: 'Ok',
        handler: () => {
        aceptar = true
        }
      }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
    return aceptar
  }
}

