import "./style.scss";
import Sketch from "./js/sketch";
import DebugPanel from "./js/debugPanel";

const init = () => {
  new Sketch();
  new DebugPanel({ visibility: true });
};

init();
