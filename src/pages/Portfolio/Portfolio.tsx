import LoadingScreen from "@/components/portfolio/LoadingScreen";
import { useState } from "react";

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}
    </>
  );
};
export default Portfolio;
