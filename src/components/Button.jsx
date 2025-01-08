

const Button = ({ children , props }) => {

  return (
    <button className={` rounded-2xl  text-center w-full flex justify-center py-1 text-white ${props} `}>
        { children }
    </button>
  )

}

export default Button 