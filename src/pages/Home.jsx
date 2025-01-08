import hero from "/burger.jpg";
import Button from "../components/Button.jsx";

function Home() {
  return (
    <div className="w-full h-full bg-slate-100 text-center">
      <div>
        <img src={hero} alt="hero image" className="h-[40vh] object-cover" />
      </div>
      
      <ul className="mx-3">
        <li>
          <Button props={"bg-orange-600 font-semibold mt-3"}>
            <a> Oder now </a>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <a> Menú </a>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <a> Deals </a>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <a> Acounts </a>
          </Button>
        </li>
        <li>
          <Button props={"bg-orange-600/15 text-black mt-3"}>
            <a> Find a Store </a>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Home;
