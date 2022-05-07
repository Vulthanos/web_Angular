import { setLogged } from "./firebase_logs.mjs";

document.getElementById("logout").addEventListener("click", async function() {
    await setLogged(false, "not logged");
});
