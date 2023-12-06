import React from "react";
import { useNavigate } from "react-router-dom";
import animeBackground1 from "../assets/img/anime-bg-1.jpg";
import FooterComponent from "../components/Footer";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateSearchPage = () => {
    navigate("/search");
  };

  return (
    <div>
    <div className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row mb-20">
      <div className="lg:flex-1 p-8">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            Flowbite is out! See what's new
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
          Here at Flowbite, we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
          <button
            onClick={navigateSearchPage}
            className="inline-flex justify-start items-start py-3 px-5 text-base font-medium text-start text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Quick Start
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414l4.293-4.293H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012-2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              <path
                fillRule="evenodd"
                d="M0 3a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm2 0a1 1 0 011-1h14a1 1 0 011-1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"
                clipRule="evenodd"
              ></path>
            </svg>
            Learn More
          </a>
        </div>
      </div>

      <div className="md:lg:w-2/5">
        <img
          src={animeBackground1}
          alt="Anime Background 1"
          className="w-full h-full mt-6 object-cover rounded-tl-3xl rounded-bl-3xl"
        />
      </div>
    </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
