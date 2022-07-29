import React, { useEffect } from 'react'
import Banner from './home/Banner'

export default function Home({setCurrentHeaderIndex}) {
  useEffect(() => {
    setCurrentHeaderIndex(1)
  })

  return (
    <div className='home'>
        <Banner title={'ANNOUNCEMENTS'} subtext={'            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi quisquam ullam tenetur, illum maiores, officia vitae eaque ipsam facilis possimus, distinctio molestiae labore soluta ratione nam alias molestias. Voluptate molestias amet numquam tenetur sunt, at aspernatur quasi illo voluptatum consequatur deleniti saepe earum. Tempore dignissimos soluta molestias ipsum fuga. Dolores, dolorum dolorem debitis ad non perferendis quisquam natus omnis labore obcaecati nulla? Aspernatur eos quam obcaecati labore laborum enim magni blanditiis aliquam, qui commodi tempore ex error pariatur assumenda ea libero nobis eius, repudiandae, ratione optio quas? Veritatis quia excepturi repellendus, voluptas ad iusto omnis amet accusamus modi veniam.'} buttonLink={"#"} buttonText={'Learn More'}/>
        <div className='container__S'>
          <div className='home__title'>
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
        <div className='home__about'>
          <div className='container__S'>
          </div>
        </div>
    </div>
  )
}
