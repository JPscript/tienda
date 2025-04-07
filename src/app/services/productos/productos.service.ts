import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string | null;
  precio: string;
  stock: number | null;
  imagen: string | null;
  categoria: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);
  private apiUrl: string = 'http://localhost:3000/api/productos';
  getProductos(): Observable<Producto[]> {
    console.log('ProductosService initialized');
    return this.http.get<Producto[]>(this.apiUrl); 
  }
  getProducto(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/${id}`); 
  }
  createProducto(producto: Producto): Observable<Producto[]> {
    return this.http.post<Producto[]>(this.apiUrl, producto); 
  }
  updateProducto(id: number, producto: Producto): Observable<Producto[]> {
    return this.http.put<Producto[]>(`${this.apiUrl}/${id}`, producto); 
  }
  
  deleteProducto(id: number): Observable<Producto[]> {
    return this.http.delete<Producto[]>(`${this.apiUrl}/${id}`); 
  }
}
