import { MdHomeFilled } from "react-icons/md";
import { RiShieldCheckFill, RiSettings5Fill, RiCompass4Fill } from "react-icons/ri";
import { AiFillCompass, AiFillClockCircle, AiFillStar } from "react-icons/ai";
import { IoExit, IoVideocam } from "react-icons/io5";
import { IoIosDownload, IoMdPerson } from "react-icons/io";
import { TiThLarge } from "react-icons/ti";
import { FaAward } from "react-icons/fa";

let currentId = 0;
const getMenuId = () => ++currentId;

export const MAIN_MENU = {
  title: "Menu",
  items: 
  [
    {
      id: getMenuId(),
      label: "Home",
      icon: MdHomeFilled,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Community",
      icon: RiShieldCheckFill,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Discover",
      icon: AiFillCompass,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Awards",
      icon: FaAward,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Celebs",
      icon: IoMdPerson,
      path: "/"
    },
  ]
};

export const LIBRARY = {
  title: "Library",
  items: 
  [
    {
      id: getMenuId(),
      label: "Recent",
      icon: AiFillClockCircle,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Top Rated",
      icon: AiFillStar,
      path: "/"
    },
    {
      id: getMenuId(),
      label: "Downloaded",
      icon: IoIosDownload,
      path: "/"
    },
  ]
};

