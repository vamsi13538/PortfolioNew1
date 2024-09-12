import React from 'react'
import NavBarH from '../Components/NavBarH'
import TypeWriterText from '../Components/TypeWriterText'
import { useTheme } from '../ThemeContext/ThemeProvider';

const HomePage = () => {

    const {theme, toggleTheme} = useTheme();

  return (
    <div className={`PageContainer ${theme}`}>
        <NavBarH />
        <div className="aboutMeText">
            <h2 className={`aboutMeBorderText ${theme}`}>About Me</h2>
            <div className="typeWriteContainer">
                {/* <p className="welcomeText">Hello! Welcome To My Website</p> */}
                <h1>
                    I am Vamsi <TypeWriterText />
                </h1>
            </div>    
            <p className='homePageText'>
                👋 Hi there! I'm a passionate Full Stack Developer with a love for crafting innovative and effective websites. With a strong foundation in Java, I'm always eager to dive into new technologies and solve challenges that come my way. I believe in putting my heart into every project, ensuring 100% quality and dedication.
            </p>
            <p className='homePageText'>
                🚀 What excites me the most? Learning! I approach every task with enthusiasm, always ready to explore the next big thing in tech. My journey into software engineering is a bit unique—I started with a degree in Mechanical Engineering. Yep, I’m just as fascinated by the mechanics of machines as I am by coding. Whether it’s bikes, cars, or just about anything with an engine, I’m all in! 🏍️🚗
            </p>
            <p className='homePageText'>
                When I'm not coding or exploring the tech world, you’ll find me cruising on my bike, gaming to unwind (battle games are my go-to! 🎮), or whipping up something delicious in the kitchen. Cooking is my creative outlet, and it’s a fantastic way to de-stress after a long day.
            </p>
            <p className='homePageText'>
                I’m also someone who loves to laugh and have a good time with friends. For me, learning and working should always be enjoyable. So, whether it's tackling a new tech challenge or planning a fun road trip, I’m all about balancing work and play.
            </p>
        </div> 
        <div className="aboutMeText2">
            <h2>What I'm Doing</h2>
            <div className="cardsCotainer">
                <div className="card" id='card'>
                    <div className="CardImageCotainer">
                        <img src="dist\Images\Web Desgin Logo - Comic.jpg" alt="No_Image" />
                    </div>
                    <div className="cardInfo">
                        <p className="cardLabel">Web Design</p>
                        <p className="cardBody">
                        Crafting modern, high-quality designs that stand out at a professional level. My goal is to blend creativity with functionality, ensuring that every website I design not only looks stunning but also offers an exceptional user experience.
                        </p>
                    </div>
                </div>
                <div className="card" id='card'>
                    <div className="CardImageCotainer">
                        <img src="dist\Images\Web Desgin Logo - Fantasy.jpg" alt="No_Image" />
                    </div>
                    <div className="cardInfo">
                        <p className="cardLabel">Web Development</p>
                        <p className="cardBody">
                        Building robust, high-quality websites with a focus on performance and scalability. I bring professionalism and attention to detail to every project, ensuring that the final product is not just functional, but also optimized for the best user interactions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage