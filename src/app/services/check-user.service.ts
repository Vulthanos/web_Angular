import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {doc, getDoc, getFirestore, getDocs, collection} from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {app} from "../../environments/environment";
import { Producto } from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})


export class CheckUserService {

    constructor(
        private af: AngularFirestore, private angularFireAuth: AngularFireAuth

) {
    }


    async getUserId(){
        const db = getFirestore(app);
        const docSnap = await getDoc(doc(db, "logs", "logged"));
        if (docSnap.exists()) {
            if(docSnap.data()['logged']){
                return docSnap.data()['loggedUser'];
            } else{
                console.log("No hay usuarios logueados");
            }
        } else {
            console.log("No existe el document");
        }
    }

    async addProductoToUserCart(pDesc, pName, pPrice, pImg){
        const db = getFirestore(app);
        const docSnap = await getDoc(doc(db, "logs", "logged"));
        if (docSnap.exists()) {
            if(docSnap.data()['logged']){
                const user = await getDoc(doc(db, "users", docSnap.data()['loggedUser']))
                const userCart = user.data()['cart'];
                const productsSnap = await getDocs(collection(db, "products"));
                productsSnap.forEach(p => {
                    const pData = p.data();
                    if (pData['description'] === pDesc && pData['name'] === pName && pData['price'] === pPrice && pData['img'] === pImg) {
                        userCart.push(p.id);
                    }
                });
            } else{
                console.log("No hay usuarios logueados");
            }
        } else {
            console.log("No existe el document");
        }
    }

}


    /*
getCurrentUser(): Observable<any> {
    var user = new Subject<any>();
    this.angularFireAuth.authState.subscribe(userResponse => {
        user.next(userResponse);
    })
    return user.asObservable();
}

    async getU() {
        const fs = getFirestore(app);
        const docSnap = await getDoc(doc(fs, "logs", "logged"));
        if (docSnap.exists()) {
            return docSnap.data()['loggedUser'];
        } else {
            console.log("No existe el documento")
        }
    }


}
*/
        //return this.af.collection<Log>('logs').valueChanges();


    /*
  constructor() { }


    async getUser(){
      const docSnap = await getDoc(doc(db,"logs", "logged"));
      if (docSnap.exists()){
          return docSnap.data().loggedUser;
      } else { console.log("No existe el documento")}
    }
}
*/
