import "./style.scss";
import Sketch from "./js/sketch";
import DebugPanel from "./js/debugPanel";

// const logger = (msg) => {
//   console.log(msg);
// };

// logger("coucou");
new Sketch();
new DebugPanel({ visibility: true });
