import Axios from "axios";

// TODO: need to make the serverhost name start with https
const serverhost = "http://52.38.209.156:80";
const localhost = "http://localhost:80";

let hostname;

// TODO: automate this variable so that it automatically toggles when the
//       npm run deploy command is run
const local = false;
localStorage.setItem("user", "guest");

if (local) {
  hostname = localhost;
} else {
  hostname = serverhost;
}

export default Axios.create({
  baseURL: hostname,
});
