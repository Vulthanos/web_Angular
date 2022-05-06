import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

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
    return await getDocs(collection(db, 'logs'));
}

async function getLogged() {
    const docSnap = await getDoc(doc(db, "logs", "logged"));
    if (docSnap.exists()) {
        return docSnap.data().logged;
    } else {
        console.log("No existe el document");
    }
}

async function getLoggedUser() {
    const docSnap = await getDoc(doc(db, "logs", "logged"));
    if (docSnap.exists()) {
        return docSnap;
    } else {
        console.log("No existe el document");
    }
}

async function setLogged(state, user) {
    const newValues = {logged: state,
    loggedUser: user};
    updateDoc(doc(db, "logs", "logged"), newValues);
}

export { getLogs, getLoggedUser, setLogged, getLogged};
