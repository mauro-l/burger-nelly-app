import {
  PiNewspaperClipping,
  PiPersonSimpleRun,
  PiTag,
  PiUserCircle,
  PiHouseFill,
} from "react-icons/pi";

function Footer() {
  return (
    <div className="w-full text-center fixed bottom-0 border-t pt-1 border-gray-300 border-solid text-yellow-600/60">
      <ul className="flex justify-around items-center p-2">
        <li>
          <a href="#" className="flex flex-col justify-center items-center">
            <PiHouseFill size={24} />
            <p className="text-sm">Home</p>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col justify-center items-center">
            <PiNewspaperClipping size={24} />
            <p className="text-sm">Order</p>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col justify-center items-center">
            <PiPersonSimpleRun size={24} />
            <p className="text-sm">PickUp</p>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col justify-center items-center">
            <PiTag size={22} />
            <p className="pt-0.5 text-sm">Gift</p>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col justify-center items-center">
            <PiUserCircle size={24} />
            <p className="text-sm">Profile</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
