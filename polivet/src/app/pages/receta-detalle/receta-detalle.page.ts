import { Component, OnInit,Input} from '@angular/core';
import {RecetaService} from 'src/app/Services/receta.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
})
export class RecetaDetallePage implements OnInit {
  idDetallevreceta:any
  Recetadetalle: any= []
  public estado: boolean = true;
  fecha:any
  propietario:any
  mascotaNombre:any
  public receta: any

  @Input() RecetaDetalleDetails = {
    idReceta: '',prescripcion: '',rp: '',consulta_id: ''
  }

  constructor(private recetaService: RecetaService,public router: Router) {
    console.log('------')
    this.recetaService.$getObjectSource.subscribe(
      data=>{
        this.idDetallevreceta=data
        console.log('recibo id de receta',data)
        console.log('recibo id de receta',this.idDetallevreceta)
        this.DetallerecetaMedica()
      }
    )
    //this.imprimir()
  }

  ngOnInit() {

  }

  aceptar(){
    this.router.navigate(['/historia-det'])
  }

  imprimir(): void {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
      logging: true,
      letterRendering: true,
      //useCORS: true
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_receta.pdf`);
    });
  }

  DetallerecetaMedica(){
    this.recetaService.listadetalleReceta(this.idDetallevreceta).subscribe(data => {
      this.Recetadetalle = data
      console.log('receta detalle---',this.Recetadetalle)
      this.fecha = this.Recetadetalle[0].fecha.split('T')[0]
      //this.RecetaDetalleDetails.fecha = this.fecha
      this.RecetaDetalleDetails.rp = this.Recetadetalle[0].rp
      this.RecetaDetalleDetails.prescripcion = this.Recetadetalle[0].prescripcion
      this.RecetaDetalleDetails.idReceta = this.Recetadetalle[0].idReceta
      this.RecetaDetalleDetails.consulta_id = this.Recetadetalle[0].consulta_id.idConsultaMedica
      this.propietario = this.Recetadetalle[0].consulta_id.historia_Id.mascota_id.id_mascota_propietario.propietario
      this.mascotaNombre = this.Recetadetalle[0].consulta_id.historia_Id.mascota_id.nombre
      //console.log('fecha',this.RecetaDetalleDetails.fecha)
      console.log('rp',this.RecetaDetalleDetails.rp)
      console.log('prescripcion',this.RecetaDetalleDetails.prescripcion)
      console.log('idreceta',this.RecetaDetalleDetails.idReceta)
      console.log('id consulta', this.RecetaDetalleDetails.consulta_id)
      console.log(this.propietario)
      console.log(this.mascotaNombre)
    })
  }

  openModal()
  {
    if (this.estado === true ) {
      this.estado = false;
    } else {
      this.estado = true;
    }
  }

  guardar(){
    this.recetaService.actualizarReceta(this.RecetaDetalleDetails)
    .subscribe((data) => {

      console.log('Estamos en el propietario')
      this.receta=data
      console.log("recibo",this.receta)
      this.router.navigate(['/historia-det'])
    },(error)=>{
      console.log(error)
    }
    );
  }

}
