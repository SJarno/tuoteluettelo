import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Tuoteluettelo';
  products: any = [];
  name = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/puhelinten-tuotetiedot/phones/phones.json").subscribe(data => {
      this.products = data;
    })
  }
  sortByNewest() {
    this.products.sort((a: any, b: any) => b.age - a.age);
  }
  sortByAlphabet() {
    this.products.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }
  
  sort(event: any){
    /* console.log(event.target.value); */
    let option = event.target.value;
    if (option === "newest") {
      this.sortByNewest();
    } 
    else if (option === "alphabetical") {
      this.sortByAlphabet();
    }
  }

}
