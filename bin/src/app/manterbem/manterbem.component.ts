import { Component, OnInit } from '@angular/core';
import{ Bem} from '../modelo/bem.model'
import { ManterbemService } from '../servico/manterbem.service';

@Component({
  selector: 'app-manterbem',
  templateUrl: './manterbem.component.html',
  styleUrls: ['./manterbem.component.css']
})
export class ManterbemComponent implements OnInit {
  listaBem: Bem[] = [];
  
  Obj: Bem= {id:0, codigo:'', nome:'' ,descricao:'', classificacao:'', quantidade:0, dt_aquisicao: new(Date), dt_venda: new(Date)}

  msg = '';
  constructor(private api: ManterbemService) { }

  ngOnInit( ){
    this.consultarBem();
  }
  
  
consultarBem(){
  this.api.consultarBem().toPromise().then(res=>{this.listaBem=res;});
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
