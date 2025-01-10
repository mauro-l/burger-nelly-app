import Card from "../components/Card.jsx";


function Menu() {
  return (
    <div>
      <Card title={"The classic Burguer"} subtitle={"$1000"} >
      <img
            className="rounded-2xl"
            src="https://ecook.mx/wp-content/uploads/2024/07/receta-de-hamburguesa.png"
            alt="Hamburguesa"
          />
          
      </Card>
    </div>
  );
}

export default Menu;
