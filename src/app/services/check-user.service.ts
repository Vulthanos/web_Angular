import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {doc, getDoc, getFirestore} from "@angular/fire/firestore";
import {app} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

    constructor(
        private af: AngularFirestore
    ) {
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
