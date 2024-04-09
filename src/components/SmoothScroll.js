import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  dumping: 0.15,
  maxOverScroll: 150,
};

const options = {
  damping: 0.07,
  plugins: { overscroll: { ...overscrollOptions } },
};

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);

    if (Scrollbar) Scrollbar.destroy(document.body);
  }, []);
  return null;
};

export default SmoothScroll;
