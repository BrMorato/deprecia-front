import { Component, OnInit } from '@angular/core';
import{ Depreciacao} from '../modelo/depreciacao.model'
import{ Bem} from '../modelo/bem.model'
import { DepreciacaoService } from '../servico/depreciacao.service';

import { ResolveEnd } from '@angular/router';
import { resolve } from 'url';
import {AlertType} from '../alert/alert';
import { Crfb } from '../modelo/crfb.model';


@Component({
  selector: 'app-depreciacao',
  templateUrl: './depreciacao.component.html',
  styleUrls: ['./depreciacao.component.css']
})
export class DepreciacaoComponent implements OnInit {

  Bem: Bem;

  listaDepreciacao: Depreciacao[] = [];

  cssBarraNotify: String;

  ehVisivel: boolean = true;

  alertType: AlertType = AlertType.INFO;
  
  mensagem: String = '';



  Obj: Bem= {id:0, codigo:'', nome:'' ,descricao:'', classificacao: new Crfb, valor_aquisicao:0.00, valor_venda:0.00, estado_aquisicao:false,turnos:0,status:false, dt_aquisicao: new(Date), dt_venda: new(Date)}

  ObjCrfb: Crfb={id:0,ref_ncm:'',descricao:'',vida_util:0,taxa_depreciacao:0.00}

  ObjDepreciacao: Depreciacao={id:0, bem: new Bem, mes:0,ano:0, valor:0.00}



  msg = '';
  constructor(private api: DepreciacaoService) { }

  ngOnInit( ){
    this.consultarDepreciacaoBem();
    this.cssBarraNotify ='alert alert-primary';
  }

  consultarDepreciacao(){
    this.api.consultarDepreciacao().toPromise().then(res=>{this.listaDepreciacao=res;});
  
    }
  


consultarDepreciacaoBem(){
  this.api.consultarDepreciacaoBem(this.ObjDepreciacao.bem.id).toPromise().then(res=>{this.listaDepreciacao=res;});

  }

  /*consultarCrfbPorId(){
    this.api.consultarCrfbPorId(this.Obj.id_crfb).toPromise().then(res=>{this.ObjCrfb=res;});
    } */

    

    calcularDepreciacao(){
    this.api.calcularDepreciacao(this.Obj)
    .toPromise()
    .then(Depreciacao => {
    this.consultarDepreciacaoBem();this.mensagem="Depreciação do bem '"+this.ObjDepreciacao.bem.nome+"' calculada com sucesso!";
  this.ehVisivel=true;this.alertType=AlertType.SUCCESS;}, Depreciacao=>{this.mensagem="Houve um problema ao calcular a depreciação!";this.cssBarraNotify='alert alert-danger';})
  }

  excluirDepreciacao(){
    this.api.excluirDepreciacao(this.Obj.id).toPromise()
    .then(Depreciacao => {this.msg="Depreciação excluída com sucesso!";
    this.consultarDepreciacaoBem()});
  }
/*
  alterarBem(){
    this.api.alterarBem(this.Obj.id,this.Obj).toPromise()
    .then(Bem =>{this.mensagem="Bem "+Bem.nome+" cadastrado com sucesso!";
    this.ehVisivel=true;this.alertType=AlertType.SUCCESS;this.consultarBem();this.cssBarraNotify='alert alert-primary';}
    ,Bem=>{this.mensagem="Houve um problema ao alterar!";
    this.ehVisivel=true;this.alertType=AlertType.DANGER;});
  }
*/
  carregarDadosBem(c: Depreciacao){
  this.ObjDepreciacao = c;
  }

  compararClassificacao(a, b) {
      return a.id === b.id;
  }

  compararAB(a, b) {
    return a === b;
}


}
