import { Component, inject } from '@angular/core';
import { Producto, ProductosService } from '../../../services/productos/productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  private productosService = inject(ProductosService);
  estosSiSonProductos: Producto[] = [];
  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: (productos) => {
        this.estosSiSonProductos = productos;
      },
      error: (err) => console.error('Error fetching productos:', err)
    });
  }
}
