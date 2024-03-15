
import { MdDashboard } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { PiChatsBold } from "react-icons/pi";



export const Sidebar = () =>{
    return(
	<div className="h-screen w-[18vw] flex items-center  justify-center">
        <div className="flex flex-col items-center bg-gray-200 sm:h-[95vh] p-3 rounded w-[15vw]  text-gray-800">
			<p className="font-bold text-4xl"><span className=" text-[#009945]">Resto</span>AI</p>
			<ul className="w-full my-5">
				<li className="option my-3 active text-white rounded bg-[#009945] p-1 flex items-center text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1"><MdDashboard/></span> Dashboard</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1"><MdCampaign/></span> Campaigns</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1"><SiChatbot/></span> Auto Campaigns</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1"><VscFeedback/></span> Feedback</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1">< MdOutlineQrCodeScanner/></span> QR Code</a></li>
				<li className="option my-3 flex p-1 items-center rounded text-xl font-semibold"><a className="flex items-center" href="."><span className="text-3xl mr-1">< PiChatsBold/></span> Chat Flows</a></li>
			</ul>
	</div> 
	</div>
    )
}