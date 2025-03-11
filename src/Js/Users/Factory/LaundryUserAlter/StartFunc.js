import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
const StartFunc = () => {

    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
    };
};
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("yourPassword");
    let icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
});
StartFunc();