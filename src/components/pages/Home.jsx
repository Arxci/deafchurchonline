import React, { useEffect, useState } from 'react'
import ButtonCTA from '../global/ButtonCTA'
import Banner from './home/Banner'
import "aos/dist/aos.css";

export default function Home({setCurrentHeaderIndex}) {
  const [aboutImgFocus, setAboutImgFocus] = useState(false);

  useEffect(() => {
    setCurrentHeaderIndex(1)
  })

  function onUpdateAIF() {
    setAboutImgFocus(!aboutImgFocus);
  }

  function onFadeIn() {
    setAboutImgFocus(true);
  }

  function onFadeOut() {
    setAboutImgFocus(false);
  }

  return (
    <div className='home'>
        <Banner title={'ANNOUNCEMENTS'} subtext={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi quisquam ullam tenetur, illum maiores, officia vitae eaque ipsam facilis possimus, distinctio molestiae labore soluta ratione nam alias molestias. Voluptate molestias amet numquam tenetur sunt, at aspernatur quasi illo voluptatum consequatur deleniti saepe earum. Tempore dignissimos soluta molestias ipsum fuga. Dolores, dolorum dolorem debitis ad non perferendis quisquam natus omnis labore obcaecati nulla? Aspernatur eos quam obcaecati labore laborum enim magni blanditiis aliquam, qui commodi tempore ex error pariatur assumenda ea libero nobis eius, repudiandae, ratione optio quas? Veritatis quia excepturi repellendus, voluptas ad iusto omnis amet accusamus modi veniam.'} buttonLink={"#"} buttonText={'Learn More'}/>
        <div className='home__title'>
          <div className='container__S'>
            <div className='home__title' data-aos="fade-up">
              <span>
                WELCOME TO SOUTHERN
              </span>
              <span>
                DEAF
              </span>
              <span>
                FELLOWSHIP
              </span>
            </div>
          </div>
        </div>
        <div className='home__about'>
          <div className='container__S'>
            <ul className='home__about__list'>
              <li className='home__about__left' data-aos="fade-right">
                <div className='home__about__subtitle'>
                  About The Church
                </div>
                <div className='home__about__title'>
                  Deaf Church Online is an online church for deaf and hard of hearing people and their loved ones.
                </div>
                <div className='home__about__text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore omnis, dolor tempore sed officia repellat, cumque voluptatem et quod tempora ipsa natus ut iusto id sapiente ratione. Hic, deserunt facilis! Sint veritatis, exercitationem ullam delectus ipsum praesentium architecto nobis nihil sed vero molestias facere maxime amet ducimus dolore ipsam ut accusamus enim obcaecati, voluptatum tenetur nulla. Architecto quo facilis dolorum ex itaque nobis, suscipit recusandae nisi similique sunt vitae, quibusdam optio iste sequi? Recusandae impedit magni odio voluptatum atque, blanditiis aspernatur sequi nihil. Perspiciatis repellendus, doloremque blanditiis error quis illo optio deserunt quibusdam asperiores distinctio qui repudiandae repellat magnam possimus!
                </div>
              </li> 
              <li className='home__about__right'  data-aos="fade-left">
                <div className={aboutImgFocus ? 'home__about__imageBTN has-fade fade-in' : 'home__about__imageBTN has-fade fade-out'} onBlur={() => onFadeOut()} onFocus={() => onFadeIn()} onMouseEnter={() => onFadeIn()} onMouseLeave={() => onFadeOut()}>
                  <div>
                    <ButtonCTA buttonLink={'/about'} buttonText={'LEARN MORE'}/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
