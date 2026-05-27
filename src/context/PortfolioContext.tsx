import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type PortfolioContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  portfolioData:PortfolioData | null;
};

type Profile = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  profilePicURL: string;
  resumeURL: string;
  owner: string;
  bio: string;
  name: string;
  title: string;
};

type Project = {
  _id: string;
  imageURL: string;
  title: string;
  description: string;
  githubURL: string;
  tags: string;
  demoURL: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
};

type Skill = {
  _id: string;
  name: string;
  type: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
};

type PortfolioData = {
  profile: Profile;
  projects: Project[];
  skills: Skill[];
};

const PortfolioContext =createContext<PortfolioContextType | null>(null);

export const PortfolioProvider = ({children,}:{children: ReactNode;}) => {

  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_BACKEND_API;

  const [portfolioData, setPortfolioData] =useState<PortfolioData | null>(null);

  const fetchPortfolio = async () => {
  try {
    setLoading(true);

    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }
    
    const data = await res.json();
    // console.log(data);

    setPortfolioData(data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchPortfolio();
  },[])


  return (
    <PortfolioContext.Provider value={{ loading, setLoading, portfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const portfolio = useContext(PortfolioContext);

  if (!portfolio) {
    throw new Error(
      "usePortfolio must be used inside PortfolioProvider"
    );
  }

  return portfolio;
};
