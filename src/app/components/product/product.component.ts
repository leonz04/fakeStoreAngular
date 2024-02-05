import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product-service.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  
})

export class ProductComponent {



  @Input() product!:Product;

  @Output() changeProduct= new EventEmitter<Product>();



  constructor(private productService: ProductService, private fb: FormBuilder) { }
  
  update(id:number,productedit:Product):void { 

    this.changeProduct.emit(productedit)

    console.log(this.product)

    console.log(this.product.title)
    console.log(productedit.title)
    
    this.product.title = productedit.title;
    this.product.description = productedit.description;
    //this.product.title= "LeonZ"
    //this.product.description="Peligroso animal"
    // this.product.images=["https://media.istockphoto.com/id/877369086/es/foto/le%C3%B3n-panthera-leo-10-a%C3%B1os-de-edad-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=DY-jSoHGFJ-_fstEWhOZ5kAufR1zHFjwQdwZjI1vEoI="]
    
    console.log('first')
  //   this.productService.updateProduct(id.toString(),product).subscribe(data => {       

  //   // Mostramos la respuesta del servidor
  //   console.log(data);

  // })
}



    
}


