import { motion } from "framer-motion";
const Button = ({ text, className, onClick }) => {
  return (
    <motion.button
      type="button"
      className={` px-2 py-2 mx gap-2 rounded-[30px] border-[1px] border-black ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#84cc16", //hover berubah
        color: "#ffffff", //font berubah
        borderColor: "#84cc16",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};
export default Button;
