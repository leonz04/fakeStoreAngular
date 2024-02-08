import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './product-service.service';
import { ShareDataService } from './share-data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 

  products: Product[]=[];

  isUpdateMode = false; // Variable para rastrear el modo de actualización

  
  product:any= {
    
    title: '',
    description:'',
    categoryId:0,        
    price: 0,
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Flockerhero.com.co%2Fproducto%2Fbuso-licrado-dama%2F&psig=AOvVaw1qxMFLb2Xe1biN1Fhu8DWn&ust=1707239216082000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOidhOvXlIQDFQAAAAAdAAAAABAS']
  };
  
  constructor(private productService: ProductService, private sharedDataService:ShareDataService ) { }

  

  ngOnInit():void{

    this.sharedDataService.updatedProduct$.subscribe((updateProduct)=>{
      if(updateProduct) {
        this.product=updateProduct
        this.isUpdateMode = true; // Cambiar al modo de actualización

      }
  })

    
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
    if(isUpdateMode:boolean){
      

    }
    
    

     // Método para enviar el producto
  submit() {
    if (this.isUpdateMode) {
      this.product.images=["https://img.freepik.com/foto-gratis/mujer-fitness-atletica-capucha-gris-sesion-estudio_613910-13822.jpg"]
      // Lógica para la actualización del producto
      this.productService.updateProduct(this.product.id.toString(), this.product).subscribe(data => {
        console.log('Producto actualizado:', data);
        // Puedes realizar otras acciones después de la actualización
      });
      this.product={title: '',
      description:'',
      categoryId:0,        
      price: 0,
    }
    this.isUpdateMode=false;
    } else {
      // Lógica para la creación de un nuevo producto
      this.productService.createProduct(this.product).subscribe(data => {
        console.log('Producto creado:', data);
        // Puedes realizar otras acciones después de la creación
      });
      
  }}

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id.toString()).subscribe(() => {
      console.log('Producto eliminado:', id);
      // Puedes realizar otras acciones después de la eliminación
    });
  }
}