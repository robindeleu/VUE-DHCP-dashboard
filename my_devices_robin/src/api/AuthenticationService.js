import Api from "../api/api";

export default {
  register(accountInfo) {
    console.log("register from AthenticationService.js",accountInfo)
    return Api().post("register", accountInfo);
  },
  login(credentials) {
    console.log("login from AthenticationService.js",credentials)
    return Api().post("login", credentials);
  },
  logout() {
    console.log("logout from AthenticationService.js")
    return Api().delete("logout");
  },
};