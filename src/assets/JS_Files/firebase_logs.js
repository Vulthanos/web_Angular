import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAOs5F1izcHbBhvDIZf_-SjG6rHkegt9dQ",
    authDomain: "vulthanosangular.firebaseapp.com",
    projectId: "vulthanosangular",
    storageBucket: "vulthanosangular.appspot.com",
    messagingSenderId: "1083165440814",
    appId: "1:1083165440814:web:3f9b27d670e2247e30d8bf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getLogs() {
    const logsCol = collection(db, 'logs');
    const logsSnapshot = await getDocs(logsCol);
    return logsSnapshot.docs.map(doc => doc.data());
}

async function getLogged() {
    const docRef = doc(db, "logs", "logged");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().logged;
    } else {
        console.log("No existe el document");
    }
}

async function getLoggedUser() {
    const docRef = doc(db, "logs", "logged");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().loggedUser;
    } else {
        console.log("No existe el document");
    }
}

async function setLogged() {
    const docRef = doc(db, "logs", "logged");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.logged;
    } else {
        console.log("No existe el document");
    }
}

export { getLogs, getLogged, getLoggedUser, setLogged};
