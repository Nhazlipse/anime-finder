import React, { useEffect, useState } from "react";
import LoadingComponent from "../components/Loading";
import HomePage from "./homePage";

const RootPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000); 
      }, []);

  return (
    loading ? <LoadingComponent /> : <HomePage />
  );
};

export default RootPage;
