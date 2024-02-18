import React from "react";

import money_manager from "../assets/portfolio/money-manager.png";
import tublight from "../assets/portfolio/tublight.png";
import portfolio from "../assets/portfolio/demo-portfolio.png";
import ttt from "../assets/portfolio/tic-tac-toe.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tublight,
      link: 'https://vishaltawar6963.github.io/tublite-effect/',
      repo: 'https://github.com/vishaltawar6963/tublite-effect'
    },
    {
      id: 2,
      src: money_manager,
      link: 'https://vishaltawar6963.github.io/Money_manager_app/',
      repo: 'https://github.com/vishaltawar6963/Money_manager_app'
    },
    {
      id: 3,
      src: portfolio,
      link: 'https://vishaltawar6963.github.io/portfolio/',
      repo: 'https://github.com/vishaltawar6963/portfolio'
    },
    {
      id: 4,
      src: ttt,
      link: 'https://vishaltawar6963.github.io/tictactoe/',
      repo: 'https://github.com/vishaltawar6963/tictactoe'
    },
   
    
  ].reverse()

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 overflow-y-auto w-full scrollbar-hide py-5">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
