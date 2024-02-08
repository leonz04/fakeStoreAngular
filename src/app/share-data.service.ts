import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private updatedProductSource = new BehaviorSubject<Product | null>(null);
  updatedProduct$ = this.updatedProductSource.asObservable();

  updateProduct(product: Product): void {
    this.updatedProductSource.next(product);
  }
}
