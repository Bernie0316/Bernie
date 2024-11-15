// try to use react to do header
import React from 'react';

const Header = () => {
    return (
        <header>
            <a id="leftHeader" href="index.html">Bernie Zhong</a>
            <section id="rightHeader">
                <div id="menu" class="hamToggle">
                    <span class="bar1"></span>
                    <span class="bar2"></span>
                </div>
                <nav class="navbar">
                    <a>TimeLine</a>
                    <a>Projects</a>
                    <a href="contact.html">Contact</a>
                    <a href="sitePlan/sitePlan.html">SitePlan</a>
                    {/* <!-- <div id="darkmode" class="dmToggle"></div> --> */}
                    <button id="dmbLarge" class="mode"></button>
                </nav>
                <button id="dmbSmall" class="mode"></button>
            </section>
        </header>
    )
}

export default Header;