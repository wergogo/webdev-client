import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsHeartFill } from "react-icons/bs";
import { GiRocket } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <BsHeartFill className="text-red-500" />
        <GiRocket className="text-5xl text-orange-500" />
        <MdHome className="text-4xl text-blue-600" />
        <HiAcademicCap className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
