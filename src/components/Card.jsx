{
  /* <img src="https://ecook.mx/wp-content/uploads/2024/07/receta-de-hamburguesa.png" alt="Hamburguesa" /> */
}

const Card = ({ children, title, subtitle}) => {
  return (
    <div className="m-5  ">
      {children}
      <h3 className="font-bold text-lg mt-3  "> {title} </h3>
      <p className="text-amber-700/80 mt-2"> {subtitle} </p>      
    </div>
  );
};

export default Card;

