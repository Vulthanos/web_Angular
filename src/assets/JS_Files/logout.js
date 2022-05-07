import {getLogged, setLogged} from "./firebase_logs.mjs";

async function logOut() {
    const isOut = await getLogged();
    if (!isOut) {
        location.href = "http://localhost:4200";
    }
}

document.getElementById("logout").addEventListener("click", async function() {
    await setLogged(false, "not logged");
    await logOut();
});
