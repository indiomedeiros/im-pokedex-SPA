import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
   }

   
  
   @font-face {
      font-family:Poppins, Inter, sans-serif; 
      src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap');
      src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
   }

   h1,h2,h3,h4{
      font-family: Poppins;
   };
   p{
      font-family: Inter;
   }
  
   
`;
