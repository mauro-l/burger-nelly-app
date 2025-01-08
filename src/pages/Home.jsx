import hero from "/burger.jpg";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-full bg-slate-100 text-center">
      <div>
        <img src={hero} alt="hero image" className="h-[40vh] object-cover" />
      </div>
      
      <ul className="mx-3">
        <li>
          <Button props={"bg-orange-600 font-semibold mt-3"}>
            <Link to="#"> Oder now </Link>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <Link to="/menu"> Menú </Link>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <Link to="#"> Deals </Link>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <Link to="#"> Acounts </Link>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <Link to="#"> Find a Store </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Home;
