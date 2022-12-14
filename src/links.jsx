import { Home, Services, Payment, Team } from "./assets/icons/AllIcons"
import {
  FaRing,
  FaRunning,
  FaPeopleCarry,
  FaArrowsAlt,
  FaCrosshairs,
} from "react-icons/fa"

import { BsTwitch, BsTwitter } from "react-icons/bs"

import {
  coach1,
  coach2,
  coach3,
  coach4,
  coach5,
  coach6,
  coach7,
  coach1avatar,
  coach2avatar,
  coach3avatar,
  coach4avatar,
  coach5avatar,
  coach6avatar,
  coach7avatar,
} from "./assets/images/images"

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
    review:
      "I booked a coaching session with <b>Daiwik</b> and I have to say it was the most improvement I've ever made in Apex in the span of one hour. He immediately identified my shortcomings as a player and helped me improve on them with insight I would never have known about just watching other pro players play the game. I'll definitely be looking forward to more enlightening sessions in the near future.",
    user: "Matt Y.",
  },
  {
    review:
      "I was very lucky to have <b>Arnold</b> as my coach in multiple coacing sessions. After being in diamond rank for so long, I finally reached Masters rank by using everything he taught me about team composition and positioning. I've always been able to aim pretty well in my fps gaming history, but Apex Legends is a different beast altogether when it comes to teamwork and luck. Minimizing bad luck is the side effect from learning from the best like Arnold.",
    user: "Chad S.",
  },
  {
    review:
      "<b>James</b> and <b>Steve</b> are both beasts!! I booked an MVP package with them as my coaches, and they are THE MOST knowledgeable and skillful players I've ever had the pleasure of playing with. They were able to help me reach Predator in Season 11 with the new map addition of Storm Point. Now with the current season, I'll be trying to reach that height on my own and make use of everything they taught me.",
    user: "Curtis B.",
  },
  {
    review:
      "In-Freakin-credible is the word I would use to describe <b>G??nter 'W??nderbar' K??nig</b>. One of the most gifted movement players I've ever spectated in Apex Legends, his deep knowledge of the game's mechanics explained in ways I could easily understand helped propel me forward from Diamond to high Masters. To this day I still use the techniques he taught me and it has helped carry me through many ranked games with ease.",
    user: "Jeff F.",
  },
]

export const teamStats = [
  "Experience participating in ALGS and various tournaments",
  "Consistently place above Masters and top 500 Apex Predator rank every season",
  "Customer satisfaction rating of 4+ stars",
  "Diverse list of backgrounds in games within a competitive setting.",
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

export const coachInfo = [
  {
    id: 1,
    name: "James 'xXAimbotXx' Brooks",
    games: [
      "Apex Legends",
      "Valorant",
      "CS: Global Offensive",
      "Overwatch",
      "Fortnite",
      "Smash Bros. Melee",
    ],
    profileImg: coach1,
    avatar: coach1avatar,
    imgAlt: "James 'xXAimbotXx' Brooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae voluptas in similique aliquid tempora officiis, quam accusamus expedita, ea necessitatibus blanditiis iste eius nam cum voluptatibus minus natus aspernatur reiciendis illum eos perspiciatis assumenda.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: true,
  },
  {
    id: 2,
    name: "Arnold 'SunTzu' Tang",
    games: [
      "Apex Legends",
      "Valorant",
      "CS: Global Offensive",
      "Overwatch",
      "Dota2",
      "Tekken 7",
    ],
    profileImg: coach2,
    avatar: coach2avatar,
    imgAlt: "Arnold 'SunTzu' Tang",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae voluptas in similique aliquid tempora officiis, quam accusamus expedita, ea necessitatibus blanditiis iste eius nam cum voluptatibus minus natus aspernatur reiciendis illum eos perspiciatis assumenda.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: true,
  },
  {
    id: 3,
    name: "Steve 'DrawinBlanks' Young",
    games: [
      "Apex Legends",
      "Valorant",
      "CS: Global Offensive",
      "Team Fortress 2",
      "Smite",
    ],
    profileImg: coach3,
    avatar: coach3avatar,
    imgAlt: "Name 'DrawinBlanks' Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae voluptas in similique aliquid tempora officiis, quam accusamus expedita, ea necessitatibus blanditiis iste eius nam cum voluptatibus minus natus aspernatur reiciendis illum eos perspiciatis assumenda.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: true,
  },
  {
    id: 4,
    name: "Si-woo 'NoCap' Kim",
    games: ["Apex Legends", "League of Legends", "Modern Warfare 2"],
    profileImg: coach4,
    avatar: coach4avatar,
    imgAlt: "Si-woo 'NoCap' Kim",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae voluptas in similique aliquid tempora officiis, quam accusamus expedita, ea necessitatibus blanditiis iste eius nam cum voluptatibus minus natus aspernatur reiciendis illum eos perspiciatis assumenda.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: false,
  },
  {
    id: 5,
    name: "Daiwik 'KaiserKing' Dhar",
    games: ["Apex Legends", "Apex Legends Mobile", "Titanfall 2"],
    profileImg: coach5,
    avatar: coach5avatar,
    imgAlt: "Daiwik 'KaiserKing' Dhar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae voluptas in similique aliquid tempora officiis, quam accusamus expedita, ea necessitatibus blanditiis iste eius nam cum voluptatibus minus natus aspernatur reiciendis illum eos perspiciatis assumenda.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: true,
  },
  {
    id: 6,
    name: "Geoff 'Nameless_wind' Smith",
    games: ["Apex Legends", "Rainbow 6 Siege", "Modern Warfare 2"],
    profileImg: coach6,
    avatar: coach6avatar,
    imgAlt: "Geoff 'Nameless_wind' Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae voluptas in similique aliquid tempora officiis, quam accusamus expedita, ea necessitatibus blanditiis iste eius nam cum voluptatibus minus natus aspernatur reiciendis illum eos perspiciatis assumenda.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: true,
  },
  {
    id: 7,
    name: "G??nter 'W??nderbar' K??nig",
    games: ["Apex Legends", "Halo Infinite", "H1Z1"],
    profileImg: coach7,
    avatar: coach7avatar,
    imgAlt: "G??nter 'W??nderbar' K??nig",
    description:
      "Gaming was not his original passion. He found his calling after visiting a local internet cafe and witnessing a tournament unfold before his eyes. After witnessing a victory, that was the moment he wanted a taste of it for himself. Since then he has dedicated his entire gaming career to be the best at what he plays.",
    socials: [
      { url: "https://twitter.com/", icon: <BsTwitter /> },
      { url: "https://twitch.com/", icon: <BsTwitch /> },
    ],
    isAvailable: false,
  },
]

export const servicesList = [
  {
    title: "Movement Techniques",
    description:
      "From tap and lurch strafing, to wall bounces, we will teach you how to perform deadly techniques in movement so you can dominate any fight while helping you stay alive and hard to hit. We can suggest optimal keybinds to fit your personal playstyle. Everyone knows movement is the secret ingredient to becoming an <b>Apex Predator</b>.",
    imgLink:
      "https://media4.giphy.com/media/CMm2c7Gqd8UVB5VkCQ/giphy.gif?cid=ecf05e479ep09i6j3yyxm43uaz3joxna7o3uknf03liazurb&rid=giphy.gif&ct=g",
  },
  {
    title: "Aim Training and Recoil Control",
    description:
      "While movement will keep you alive, learning to aim is where you can make sure your enemies won't be around to put you down. Our goal is to make you the <b>deadliest predator</b> on the battlefield.",
    imgLink:
      "https://media2.giphy.com/media/iciWusgKvCka8hIWVE/giphy.gif?cid=ecf05e47qlw4fm0mngajoutim54sts31dpm3g8moadu1zjwj&rid=giphy.gif&ct=g",
  },
  {
    title: "Positioning",
    description:
      "You, your enemies, and the ring will always be on the move. Knowing where and when to <b>change your position</b> is the key to getting 1st place. We can help you determine the optimal strategy to turn the tide of any fight in your favor.",
    imgLink:
      "https://media1.giphy.com/media/M68u4NDrK8gogZdcNf/giphy.gif?cid=ecf05e474vauyz8zmrd3kepwtlk0ao5gnzjmz1ddpcq3gr3r&rid=giphy.gif&ct=g",
  },
  {
    title: "Ring Prediction",
    description:
      "No matter your playstyle whether you prefer to play late rotate or early aggression, we will equip you with the knowledge to accurately predict where the final ring will pull towards. Gain the upper hand by securing the best spot on the map.",
    imgLink:
      "https://www.wikihow-fun.com/images/thumb/a/ad/Wikihow-Picture-8.png/558px-Wikihow-Picture-8.png",
  },
  {
    title: "Team Composition",
    description:
      "You might not currently have the mechanical skills to win you games single-handedly, but playing towards the strengths of your team by <b>choosing the perfect legend</b> to fit your playstyle and team synergy will be one of your greatest asset.",
    imgLink:
      "https://media3.giphy.com/media/sNyjG5CwcBACHrCJkm/giphy.gif?cid=ecf05e479ep09i6j3yyxm43uaz3joxna7o3uknf03liazurb&rid=giphy.gif&ct=g",
  },
]
