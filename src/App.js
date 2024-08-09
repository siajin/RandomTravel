import { Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import "./static/pageTransition.scss";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/*" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Routes>{" "}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
