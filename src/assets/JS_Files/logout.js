import {getLogged, setLogged, getLoggedUser, getUserById} from "./firebase_logs.mjs";

async function logOut() {
    const isOut = await getLogged();
    if (!isOut) {
        location.href = "http://localhost:4200";
    }
}

const userId = await getLoggedUser();
const user = await getUserById(userId);
const user_name = document.getElementById('user_name');
user_name.append(user.name + " " + user.surname);

const user_mail = document.getElementById('user_mail');
user_mail.append(user.email);

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", async function() {
    await setLogged(false, "not logged");
});
