import { Injectable } from '@angular/core';
import {doc, getDoc, getFirestore, getDocs, collection, setDoc} from "@angular/fire/firestore";
import {app} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class CheckUserService {

    constructor() {
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
                const user = await getDoc(doc(db, "users", docSnap.data()['loggedUser']));
                const userCart = user.data()['cart'];
                console.log("Carrito usuario: ", userCart);
                const productsSnap = await getDocs(collection(db, "products"));
                productsSnap.forEach(p => {
                    const pData = p.data();
                    if (pData['description'] === pDesc && pData['name'] === pName && pData['price'] === pPrice && pData['img'] === pImg) {
                        console.log("coincide un pructo con id: ", p.id);
                        userCart.push(p.id);
                        console.log(userCart);
                        const userEmail = user.data()['email'];
                        console.log(userEmail);
                        const userName = user.data()['name'];
                        console.log(userName);
                        const userPassword = user.data()['password'];
                        console.log(userPassword);
                        const userSurname = user.data()['surname'];
                        console.log(userSurname);
                        setDoc(user, {userCart, userEmail, userName, userPassword, userSurname});
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
