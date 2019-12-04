import { Component, OnInit } from '@angular/core';
import{ Bem} from '../modelo/bem.model'
import{ Crfb } from '../modelo/crfb.model'

import { ManterbemService } from '../servico/manterbem.service';
import {CrfbService} from '../servico/crfb.service'

@Component({
  selector: 'app-manterbem',
  templateUrl: './manterbem.component.html',
  styleUrls: ['./manterbem.component.css']
})
export class ManterbemComponent implements OnInit {
  listaBem: Bem[] = [];

  listaCrfb: Crfb[] = [];

  
  Obj: Bem= {id:0, codigo:'', nome:'' ,descricao:'', classificacao: new Crfb, valor_aquisicao:0.00, valor_venda:0.00, estado_aquisicao:false,turnos:0,status:false, dt_aquisicao: new(Date), dt_venda: new(Date)}
  
  ObjCrfb: Crfb={id:0,ref_ncm:'',descricao:'',vida_util:0,taxa_depreciacao:0.00}
  
  

  msg = '';
  constructor(private api: ManterbemService) { }

  ngOnInit( ){
    this.consultarBem();
    this.consultarCrfb();
  }
  
  

  
consultarBem(){
  this.api.consultarBem().toPromise().then(res=>{this.listaBem=res;});
  
  }

  /*consultarCrfbPorId(){
    this.api.consultarCrfbPorId(this.Obj.id_crfb).toPromise().then(res=>{this.ObjCrfb=res;});
    } */

    consultarCrfb(){
      this.api.consultarCrfb().toPromise().then(res=>{this.listaCrfb=res;});
      }

  adicionarBem(){
    this.api.adicionarBem(this.Obj)
    .toPromise()
    .then(Bem => {this.msg="Bem "+Bem.nome+" cadastrado com sucesso!";
    this.consultarBem()});
  }
  excluirBem(){
    this.api.excluirBem(this.Obj.id).toPromise()
    .then(Bem => {this.msg="Bem excluído com sucesso!";
    this.consultarBem()});
  }
  
  alterarBem(){
    this.api.alterarBem(this.Obj.id,this.Obj).toPromise()
    .then(Bem =>{this.msg="Bem " +Bem.nome+" atualizada com sucesso!";this.consultarBem()});
  }
  
  carregarDadosBem(c: Bem){
  this.Obj = c;
  }
  

}
