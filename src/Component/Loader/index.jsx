import "./Loader.css";
import LoadingImg from "../../Asset/Loader/Loading.gif";

function Loader() {
  return (
    <div className="loading_img">
      <img src={LoadingImg} alt="loading_img" />
    </div>
  );
}

export default Loader;
