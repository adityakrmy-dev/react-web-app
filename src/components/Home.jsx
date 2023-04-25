import React from 'react';
import vg from "../assets/Aditya1.png";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Ad star</h1>
                    <p>Solution to All your problem by ad</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" className="src" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Animi enim nostrum dicta totam
                        , repellendus, ipsam excepturi ullam quidem 
                        ndaeLorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Animi enim nostrum dicta totam
                        
                         
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Hello Guys, Thanks for visit Here 👇</h1>
                    <p>dipisicing elit. Aliquam molestias placeat fugit officiis tempore 
                        voluptatem iusto sit laudantium dolorem? Quasi voluptate vero ipsam d
                        olorem maxime fuga, porro aperiam temporibus eaque!
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Animi enim nostrum dicta totam
                        , repellendus, ipsam excepturi ullam quidem 
                        cupiditate iure harum tenetur sint, repudiandae
                         facere asperiores impedit! Temporibus, ex fugit!</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                <h1> Brands</h1>

                <article>
                
                    <div style={{
                        animationDelay: "0.3s",

                    }}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: "1s",

                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
               
                </article>
                </div>
            </div>
        </>
    );
}

export default Home;
