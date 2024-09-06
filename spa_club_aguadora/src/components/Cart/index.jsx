/* eslint-disable react/prop-types */

export const Cart = ({src, alt, description}) => {
  return (
    <div className="w-[320px] h-[350px] shadow-md rounded">
      <div className="relative h-36"> 
        <img className="w-full h-full object-cover opacity-90 rounded-t shadow" src={src} alt={alt}/>
      </div>
      <p className="py-5 px-3 font-serif">
        {description}
      </p>
    </div>
  )
}
