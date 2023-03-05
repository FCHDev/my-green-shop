import React from 'react';
// @ts-ignore
import imageHome from "../assets/home.png"
import {NavLink} from "react-router-dom";

const Home = () => {

    return (
        <section className="flex flex-col justify-center items-center bg-white bg-opacity-50 rounded-2xl py-3">
            <div className="flex flex-col-reverse sm:grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mx-auto px-1 place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Bienvenue sur Daily<span className="text-primary-600">Green</span>
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Nous sommes fiers de vous proposer une large gamme de produits écologiques pour tous les aspects
                        de votre
                        vie quotidienne : de l'alimentation à la décoration, en passant par l'entretien de votre maison
                        et
                        votre bien-être.
                    </p>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Nous sommes convaincus que nous pouvons tous
                        contribuer à un monde plus durable en faisant des choix responsables dans notre consommation.
                    </p>
                    <NavLink to="/store"
                       className="inline-flex items-center decoration-0 text-decoration-none justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300">
                        Découvrez
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </NavLink>
                </div>
                <div className="flex items-center lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={imageHome} className="object-cover sm:h-2/3 w-auto pb-3 sm:pb-0"
                         alt="mockup"/>
                </div>
            </div>
        </section>
    );
};

export default Home;