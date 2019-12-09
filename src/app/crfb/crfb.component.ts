import { Component, OnInit } from '@angular/core';
import{ Crfb} from '../modelo/crfb.model'
import { CrfbService } from '../servico/crfb.service';
import {AlertType} from '../alert/alert';


@Component({
  selector: 'app-crfb',
  templateUrl: './crfb.component.html',
  styleUrls: ['./crfb.component.css']
})
export class CrfbComponent implements OnInit {
  listaCrfb: Crfb[] = [];
  
  Obj: Crfb= {id:0, ref_ncm:'', descricao:'', vida_util:0, taxa_depreciacao:0}

  msg = '';

  cssBarraNotify: String;

  ehVisivel: boolean = true;
  
  alertType: AlertType = AlertType.INFO;
  
  mensagem: String = '';

  constructor(private api: CrfbService) { }

  ngOnInit( ){
    this.consultarCrfb();
    this.cssBarraNotify ='alert alert-primary';

  }
  
  
consultarCrfb(){
  this.api.consultarCrfb().toPromise().then(res=>{this.listaCrfb=res;});
  }

  consultarFCrfb(){
    this.api.consultarFcrfb().toPromise().then(res=>{this.listaCrfb=res;});
    }
  
  adicionarCrfb(){
    this.api.adicionarCrfb(this.Obj)
    .toPromise()
    .then(Crfb => {this.msg="Classificação "+Crfb.descricao+" cadastrado com sucesso!";
    this.consultarCrfb()});
  }
  excluirCrfb(){
    this.api.excluirCrfb(this.Obj.id).toPromise()
    .then(Crfb => {this.msg="Classificação excluído com sucesso!";
    this.consultarCrfb()});
  }
  
  alterarCrfb(){
    this.api.alterarCrfb(this.Obj.id,this.Obj).toPromise()
    .then(Crfb =>{this.msg="Classificação " +Crfb.nome+" atualizada com sucesso!";this.consultarCrfb()});
  }
  
  carregarDadosCrfb(c: Crfb){
  this.Obj = c;
  }
  

}
