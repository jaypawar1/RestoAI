"use client"

import React, { useState } from 'react';
import { MdDashboard, MdCampaign, MdOutlineQrCodeScanner } from 'react-icons/md';
import { PiChatsBold } from "react-icons/pi";
import { VscFeedback } from 'react-icons/vsc';

// Assuming these are the paths to your components
import Dashboard from './Dashboard/page';
import Menu from './Menu/page';

export default function Home() {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  // Function to determine which component to render
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Menu':
        return <Menu />;
      // Add cases for other components as needed
      default:
        return <div>Select a component</div>;
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-[20vw] bg-zinc-900 text-gray-200 flex flex-col items-center p-3 sticky top-0 left-0">
        <p className="font-bold text-4xl my-3">
          <span className="text-[#009945]">Resto</span>AI
        </p>
        <ul className="w-full">
          <li className="my-3">
            <span onClick={() => setActiveComponent('Dashboard')} className="cursor-pointer flex items-center p-1 rounded text-xl font-semibold hover:bg-zinc-700 active:bg-zinc-600 transition duration-150 ease-in-out">
              <MdDashboard className="text-3xl mr-1" /> Dashboard
            </span>
          </li>
          <li className="my-3">
            <span onClick={() => setActiveComponent('Menu')} className="cursor-pointer flex items-center p-1 rounded text-xl font-semibold hover:bg-zinc-700 active:bg-zinc-600 transition duration-150 ease-in-out">
              <MdCampaign className="text-3xl mr-1" /> Campaigns
            </span>
          </li>
          <li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1"><PiChatsBold/></span> Auto Campaigns</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1"><VscFeedback/></span> Feedback</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1">< MdOutlineQrCodeScanner/></span> QR Code</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1">< PiChatsBold/></span> Chat Flows</a></li>
        </ul>
      </div>
      <div className="flex-1">
        {/* This will render the component based on the current state */}
        {renderComponent()}
      </div>
    </div>
  );
}
