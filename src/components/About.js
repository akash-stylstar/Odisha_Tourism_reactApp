import React from 'react'
//import AboutImage from '../images/about.jpeg'
import Title from './Title'

const About = () => {
    return (
        <section className="section" id="about">
            <Title title='about' subTitle='us' />

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        // src={AboutImage}
                        src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Suntemple-Konark.jpg"
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        The ancient temples, such as the famous Jagannath temple in Puri, are major attractions for tourists. The local cuisine is unique and famous for its variety of flavors and spices. The state is also rich in history, culture, and art, and visitors can learn about its diverse tribal communities. From exploring the Konark Sun Temple to taking a boat ride on Chilika Lake, Odisha offers a range of activities for every type of traveler.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Tourism_in_Odisha" className="btn">read more</a>
                </article>
            </div>
        </section>
    )
}

export default About