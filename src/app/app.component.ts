import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './product-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 

  products: Product[]=[];
  
  product:any= {
    
    title: '',
    description:'',
    categoryId:0,        
    price: 0,
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Flockerhero.com.co%2Fproducto%2Fbuso-licrado-dama%2F&psig=AOvVaw1qxMFLb2Xe1biN1Fhu8DWn&ust=1707239216082000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOidhOvXlIQDFQAAAAAdAAAAABAS']
  };
  
  constructor(private productService: ProductService) { }

  recibirProducto(event:Event)
  {
    this.product.title="leonz0406"
    console.log(event)
  }

  

  ngOnInit():void{
    
    // Nos suscribimos al método del servicio que hace la petición
    this.productService.getAllProducts().subscribe(data=>{
        
      // Asignamos los datos a la variable products
      this.products=data ;
      console.log(data)

      },
      error=>{
        console.log(error)
      })
    }

     // Método para enviar el producto
  submit() {
    // Llamamos al método del servicio que hace el post
    this.productService.createProduct(this.product).subscribe(data => {
      // Mostramos la respuesta del servidor
      console.log(data);
    });

  }

  
}
