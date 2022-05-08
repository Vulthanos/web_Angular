import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    addDoc,
    setDoc
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

async function getUsers() {
    return await getDocs(collection(db, "users"));
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
        return docSnap.data().loggedUser;
    } else {
        console.log("No existe el document");
    }
}

async function setLogged(state, user) {
    const newValues = {logged: state,
    loggedUser: user};
    setDoc(doc(db, "logs", "logged"), newValues).then();
}

async function newUser(newUser) {
    addDoc(collection(db, "users"), newUser);
    const docsSnap = await getDocs(collection(db, "users"));
    docsSnap.forEach(doc => {
        const data = doc.data();
        if (data.email === newUser.email && data.password === newUser.password && data.name === newUser.name && data.surname === newUser.surname) {
            setLogged(true, doc.id);
        }
    });
}

async function getUserCart() {
    const userId = await getLoggedUser();
    const userCart = await getDoc(doc(db, "users", userId));
    if (userCart.exists()) {
        return userCart.data().cart;
    } else {
        console.log("No existe el usuario");
    }
}

async function getUserById(userId) {
    const user = await getDoc(doc(db, "users", userId));
    return user.data();
}

export { getLogs, getLoggedUser, setLogged, getLogged, getUsers, newUser, getUserCart, getUserById };
