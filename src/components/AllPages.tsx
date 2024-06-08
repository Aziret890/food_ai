import Intro from "./intro/Intro";
import Menu from "./menu/Menu";
import MoreInfo from "./moreInfo/MoreInfo";
import { RootState } from "../typeOfStates/RootState";
import { useSelector } from "react-redux";
import Chat from "./chat/Chat";

const AllPages = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <>
      <div className="content">
        <Intro />
        <Menu />
        <MoreInfo />
        {/* {cart && <Cart />} */}
      </div>
      <div className="msg__block">
        <Chat />
      </div>
    </>
  );
};

export default AllPages;
