import { Home, Services, Payment, Team } from "./assets/icons/AllIcons"
import {
  FaRing,
  FaRunning,
  FaPeopleCarry,
  FaArrowsAlt,
  FaCrosshairs,
} from "react-icons/fa"

export const navLinks = [
  { name: "Home", path: "/", icon: <Home className="icon" /> },
  {
    name: "Services",
    path: "/services",
    icon: <Services className="icon" />,
  },
  {
    name: "Our Team",
    path: "/team",
    icon: <Team className="icon" />,
  },
  {
    name: "Purchase",
    path: "/purchase",
    icon: <Payment className="icon" />,
  },
]

export const teachings = [
  {
    text: "Movement techniques",
    content: "",
    icon: <FaRunning />,
  },
  {
    text: "Aim training and Recoil Control",
    content: "",
    icon: <FaCrosshairs />,
  },
  {
    text: "Positioning",
    content: "",
    icon: <FaArrowsAlt />,
  },
  {
    text: "Ring Prediction",
    content: "",
    icon: <FaRing />,
  },
  {
    text: "Team Composition",
    content: "",
    icon: <FaPeopleCarry />,
  },
]
