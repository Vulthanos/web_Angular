import { setLogged } from "../../assets/JS_Files/firebase_logs.mjs";
document.getElementById("logout").addEventListener("click", async function() {
    setLogged(false,"notlogged").finally();
    location.href="http://localhost:4200/";
});