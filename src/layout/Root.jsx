import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import bg_image from '../assets/images/dog bg.png'

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
         <Header></Header>
            <main className="grow bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${bg_image})`,
                }}>
                 {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
               <Outlet></Outlet> 
            </main>
        <Footer></Footer>
        </div>
    );
};

export default Root;