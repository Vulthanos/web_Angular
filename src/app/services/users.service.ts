import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Usuario} from "../interfaces/usuario.interface";
import {Producto} from "../interfaces/producto.interface";
import {documentId} from "@angular/fire/firestore";
import { doc, setDoc } from "firebase/firestore";

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
        return this.af.collection<Producto>('products').valueChanges()}

    getProductsByCart(cart: []){
        return this.af.collection('products', ref => ref.where(documentId(), "in", cart)).valueChanges();
    }

    getUserByID(id: string){
        return this.af.collection('users').doc(id).valueChanges();
    }
}


