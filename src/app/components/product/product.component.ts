import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product-service.service';
import { NgOptimizedImage } from '@angular/common';
import { ShareDataService } from '../../share-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  
})

export class ProductComponent {



  @Input() product!:Product;
  @Output() deleteProduct = new EventEmitter<number>(); // Emitir evento de eliminación




  constructor(private productService: ProductService, private sharedDataService: ShareDataService ) { }
  
  updateForm(productedit:Product):void {

    this.sharedDataService.updateProduct(productedit)

}

delete(): void {
  // Emitir el evento de eliminación con el ID del producto
  this.deleteProduct.emit(this.product.id);
}
}



    



