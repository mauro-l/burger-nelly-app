import hero from "/burger.jpg";

function Home() {
  return (
    <div className="w-full h-full bg-slate-100 text-center">
      <div>
        <img src={hero} alt="hero image" className="h-[40vh] object-cover" />
      </div>
      <h2>Este es el Home</h2>
    </div>
  );
}

export default Home;
