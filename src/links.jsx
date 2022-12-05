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
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo laudantium minus neque, ea, officia minima iusto possimus deleniti aperiam nostrum fuga a iure eaque.",
    icon: <FaRunning />,
  },
  {
    text: "Aim training and Recoil Control",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo laudantium minus neque, ea, officia minima iusto possimus deleniti aperiam nostrum fuga a iure eaque.",
    icon: <FaCrosshairs />,
  },
  {
    text: "Positioning",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo laudantium minus neque, ea, officia minima iusto possimus deleniti aperiam nostrum fuga a iure eaque.",
    icon: <FaArrowsAlt />,
  },
  {
    text: "Ring Prediction",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo laudantium minus neque, ea, officia minima iusto possimus deleniti aperiam nostrum fuga a iure eaque.",
    icon: <FaRing />,
  },
  {
    text: "Team Composition",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo laudantium minus neque, ea, officia minima iusto possimus deleniti aperiam nostrum fuga a iure eaque.",
    icon: <FaPeopleCarry />,
  },
]

// Testimonials

export const testimonialsList = [
  {
    user: "Name Here",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, perferendis amet earum delectus quidem iusto laborum, iste quas voluptatibus dolorum, incidunt quo impedit rem deserunt.",
    img: "",
  },
]

export const purchaseTiers = [
  {
    title: "Basic",
    cost: 2500,
    offers: [
      "1 hr live coaching session (Find out bad habits, How to improve)",
      "VOD Review",
    ],
    bannerColor: "hsl(var(--clr-q-blue))",
    userType: "basic",
    purchaseLink: import.meta.env.VITE_BASIC_LINK,
  },
  {
    title: "Pro",
    cost: 5000,
    offers: [
      "2 days 2.5 hr live coaching session (Find out bad habits, How to improve)",
      "VOD review",
    ],
    bannerColor: "hsl(var(--clr-q-purple))",
    userType: "pro",
    purchaseLink: import.meta.env.VITE_PRO_LINK,
  },
  {
    title: "Deluxe",
    cost: 22500,
    offers: ["2hr daily coaching sessions for 1 week", "VOD Review"],
    bannerColor: "hsl(var(--clr-q-yellow))",
    userType: "deluxe",
    purchaseLink: import.meta.env.VITE_DELUXE_LINK,
  },
  {
    title: "MVP",
    cost: 100000,
    offers: [
      "Everything from previous tiers",
      "1 month of 2hr coaching sessions of any day of your choosing.",
      "Play together in ranked to get at least Diamond rank and try to reach Masters rank",
    ],
    bannerColor: "hsl(var(--clr-q-red))",
    userType: "mvp",
    purchaseLink: import.meta.env.VITE_MVP_LINK,
  },
]
