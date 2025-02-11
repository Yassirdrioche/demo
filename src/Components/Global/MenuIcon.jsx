import { Icon } from "@iconify/react";
import { Global } from "../../Context/GlobalContext";

const MenuIcon = () => {
  const { isSideBarOpen, setIsSideBarOpen } = Global(); // Call Global as a function
  const HandleClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
    console.log(!isSideBarOpen); // Log the new state
  };
  return (
    <div className="">
      <Icon onClick={HandleClick} icon="proicons:menu" width="32" height="32" />
    </div>
  );
};
export default MenuIcon;
