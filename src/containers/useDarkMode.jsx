// import { useEffect, useState } from "react";

// export const DarkMode = () => {
//   const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.body.classList.remove('dark-mode');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const ToggleDarkmode = () => {
//     setDarkMode(!darkMode);
//   };

//   return [darkMode, ToggleDarkmode];
// };
