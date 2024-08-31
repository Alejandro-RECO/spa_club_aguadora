// eslint-disable-next-line react/prop-types
export const Img = ({ src, alt, size, shape, className }) => {
   const sizeClass = {
      s: "w-14 h-14",
      m: "w-48 h-48",
      l: "w-72 h-72",
      xl: "w-96 h-96",
      sizeHeader: "w-14 h-16",
   };
   const shapeClass = {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full",
   };
   return (
      <img
         src={src}
         alt={alt}
         className={`${(sizeClass[size])} ${(shapeClass[shape])} object-cover ${className}`}
         loading="lazy"
      />
   );
};
