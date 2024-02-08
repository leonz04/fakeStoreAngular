import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  //Url base de la Api
  private baseUrl = 'https://api.escuelajs.co/api/v1';

  private productSource = new BehaviorSubject<Product>({} as Product); // Esta es la variable que guarda el producto
  currentProduct = this.productSource.asObservable(); // Este es el observable que se puede obtener

  constructor(private http: HttpClient){ }

  // Método para obtener todos los productos
  getAllProducts() {
    // Usamos el método get del HttpClient y le pasamos la ruta de la API
    return this.http.get<Product[]>(`${this.baseUrl}/products/`);
  }

  createProduct(product:any) {

    // Creamos los headers con el tipo de contenido
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Usamos el método get del HttpClient y le pasamos la ruta de la API
    return this.http.post(`${this.baseUrl}/products/`,product,{headers});
  }

  updateProduct(id:string,product:Product) {
    // Creamos los headers con el tipo de contenido
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Usamos el método post del HttpClient y le pasamos la URL, el objeto con los datos y las opciones con los headers
    return this.http.put<Product>(`${this.baseUrl}/products/${id}`, product);
}

  deleteProduct(id:string){

    return this.http.delete<Product>(`${this.baseUrl}/products/${id}`);


  }

}
