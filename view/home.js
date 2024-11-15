import React from "react";
import Header from "./partial/header";
import Footer from "./partial/footer";

const Home = () => {
    return (
        <div>
            <Header />
            <section id="intro">
                <img id="mypic" src="images/mypic.jpg" alt="mypic" />
                <div id="introText">
                    <h1>Bernie <br />Zhong</h1>
                    <p>
                        I am a dedicated student with growing skills in front-end development and a deepening understanding of backend technologies. 
                        <br />
                        I recently completed a certificate from BYU-Idaho, 
                        which has been a key milestone in my educational journey. 
                        <br />
                        I am eager to continue expanding my skills and contributing to innovative projects.
                    </p>
                </div>
            </section>
            <main id="hPage">
                <div class="tab">
                    <button class="sectionSwitchs" onClick="openSection(event, 'aboutMe')">About Me</button>
                    <button class="sectionSwitchs" onClick="openSection(event, 'timeLine')">Time Line</button>
                    <button class="sectionSwitchs" onClick="openSection(event, 'projects')">Projects</button>
                    <button class="sectionSwitchs" onClick="openSection(event, 'contact')">Contact Me</button>
                </div>
                <section id="aboutMe" class="mainSection">
                    <h3>About Me</h3>
                    <div></div>
                </section>
                <section id="timeLine" class="mainSection">
                    <h3>Time Line</h3>
                    <div></div>
                </section>
                <section id="projects" class="mainSection">
                    <h3>Projects</h3>
                    <div></div>
                </section>
                <section id="contact" class="mainSection">
                    <h3>Contact Me</h3>
                    <div>
                        <h3>Phone</h3>
                        <p>(886)9xx-xxx-xxx</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>berniezhong0316@gmail.com</p>
                    </div>
                    <div>
                        <h3>Follw Me</h3>
                        <div class="social">
                            <a href="https://www.facebook.com/profile.php?id=100028553119174&sk=map" target="_blank"> 
                                f
                            </a>
                            <a href="https://www.linkedin.com/in/zhong0316/" target="_blank"> 
                                in
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <br />
            <Footer />
        </div>
    )
}

export default Home;