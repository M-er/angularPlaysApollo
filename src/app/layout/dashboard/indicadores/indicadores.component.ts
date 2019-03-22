import { Component, OnInit } from '@angular/core';
import { HttpService, UtilService } from '@app/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'tr-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.buscoLibros();
  }
  buscoLibros() {
    this.apollo.watchQuery({ query: gql`{ books { title author stock} }`, }).valueChanges
      .subscribe(result => {
        console.log("Festeje")
        console.log(result);
      });
  }
}
