import Lottie from "lottie-react";
import "./Loader.css";
import LoaderLottie from "../../Asset/Lottie/Loader.json";

function Loader() {
  return (
    <div className="loading_img">
      <Lottie
        animationData={LoaderLottie}
        loop={true}
        style={{ width: "400px" }}
        className="DNF_card_lottie"
      />
    </div>
  );
}

export default Loader;
