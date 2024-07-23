import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  date1:Date=new Date();
  // product:Iproduct={
  //   id:6,
  //   name:"iphone",
  //   price:2000,
  //   quantity:1,
  //   categoryID:1,
  //   prdImgURL:"https://media.istockphoto.com/id/1371695315/photo/iphone-13-pro-sierra-blue.jpg?s=612x612&w=0&k=20&c=-0Mr9DdIRHFoLUozdltlHdkum0ChCNTGfLhxc-3oHmI="
  // }

  productsAfterFilter:Iproduct[]=[];
  set filterByName(value:string){

    // console.log(value);

   this.productsAfterFilter= this.performFilter(value);
  //  console.log(this.productsAfterFilter);

  }
  productsList:Iproduct[];

  inputValue:string="ali";
  // 1-initialize ,2-inject

  // categoryID => 1 (tables) , 2 (chairs) , 3 (tv units)
  constructor(){

    this.productsList=[
      {id:1, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Engineered Wood'},
      {id:5, name: 'Trixia 4-Seater Glass Top Dining Table', price: 30000, quantity:8, PrdimgURL:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
      {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
      {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
      {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
      {id:9, name: 'Boston Study Chair', price: 1000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
      {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},
      {id:15, name: 'Accent TV Unit', price: 36999, quantity:4, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'MDF'},
      {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:3, PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'wood'}
    ];
  }
  ngOnInit(): void {
   this.productsAfterFilter=this.productsList;
  }


  performFilter(filterValue:string):Iproduct[] {
    filterValue=filterValue.toLowerCase();
    return this.productsList.filter((prd:Iproduct)=>prd.name.toLowerCase().includes(filterValue))
  }
}
