import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  SearchIcon,
  UserCircleIcon,
  BellIcon,
  ChatAlt2Icon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import {
  PencilIcon,
  CogIcon,
  LogoutIcon,
  DesktopComputerIcon,
  LoginIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// Dummy notification list
const notifications = [
  {
    name: "Friend Request",
    description: "You have a pending friend request",
    href: "##",
    icon: IconOne,
  },
  {
    name: "New Video",
    description: "Someone you follow posted a new skill video",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Message",
    description: "New message from your skill buddy",
    href: "##",
    icon: IconThree,
  },
];

function Header() {

  //The header
  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md py-5 px-5 md:px-10">
        
  {/* Logo/Link to Home */}
  <a href="https://updated-skill-box-website.vercel.app">
      <div className="relative flex items-center h-10 my-auto w-32">
          <div className="cursor-pointer p-2 bg-transparent hover:shadow-md">
            <p className="inline text-2xl font-bold text-gray-100">Skill</p>
            <p className="inline text-2xl font-bold text-purple-500">Box</p>
          </div>
      </div>
       </a>
    </header>
  );
}

export default Header;

function IconOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
}
