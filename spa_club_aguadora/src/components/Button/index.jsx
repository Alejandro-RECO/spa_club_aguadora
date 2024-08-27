/* eslint-disable react/prop-types */

const Button = ({
   children,
   variant,
}) => {
    const variantClass = {
        default: "bg-primary-500 text-secondary hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-500 focus:ring-2 outline-none",
        secondary: "bg-primary-950/70 text-gray-50 hover:bg-primary-950",
        destructive: "bg-red-600/80 text-gray-100 hover:bg-red-600",
    };
  
    return (
        <button
          type="button"
          className={`px-4 py-2 font-medium ${variantClass[variant]} rounded-md transition-all hover:shadow-lg`}
        >
          {children}
        </button>
    );
};

export default Button;
