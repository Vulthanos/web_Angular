import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Usuario} from "../interfaces/usuario.interface";
import {Producto} from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

    constructor(
        private af: AngularFirestore
    ) { }

    getUsers(){
        return this.af.collection<Usuario>('users').valueChanges();
    }

    getUCart(){
    return this.af.collection<Producto>('ususuaris').valueChanges()}
}


