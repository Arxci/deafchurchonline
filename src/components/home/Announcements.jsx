import React, { useEffect, useState } from 'react'

export default function Announcements() {
    const [currentNum, setCurrentNum] = useState(0)
    const [bannerState, setBannerState] = useState('one');
    const phoneWidth = 640;
    const items = {
        item01: {
            "title": 'title 01',
            "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum sunt tenetur dolorum enim architecto atque aut excepturi, hic dolorem animi impedit deleniti veniam earum asperiores. Soluta numquam asperiores odio illum accusantium. Repellat, atque? Harum adipisci tempora minima quisquam, vero accusamus voluptatum assumenda! Sed, praesentium ullam? Ducimus, ab ratione dolore maxime non distinctio optio excepturi! Possimus porro animi quis hic eius mollitia deserunt. Dolorem voluptate fuga nulla excepturi deserunt tempore fugiat magnam. Rerum nisi perspiciatis deserunt at voluptatem. Facilis, eius. Quidem eum neque a expedita asperiores vitae incidunt aut quasi nihil reprehenderit odit animi voluptates, velit illum quibusdam architecto hic eveniet?'
        },

        item02: {
            "title": 'title 02',
            "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum sunt tenetur dolorum enim architecto atque aut excepturi, hic dolorem animi impedit deleniti veniam earum asperiores. Soluta numquam asperiores odio illum accusantium. Repellat, atque? Harum adipisci tempora minima quisquam, vero accusamus voluptatum assumenda! Sed, praesentium ullam? Ducimus, ab ratione dolore maxime non distinctio optio excepturi! Possimus porro animi quis hic eius mollitia deserunt. Dolorem voluptate fuga nulla excepturi deserunt tempore fugiat magnam. Rerum nisi perspiciatis deserunt at voluptatem. Facilis, eius. Quidem eum neque a expedita asperiores vitae incidunt aut quasi nihil reprehenderit odit animi voluptates, velit illum quibusdam architecto hic eveniet?'
        },

        item03: {
            "title": 'title 03',
            "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum sunt tenetur dolorum enim architecto atque aut excepturi, hic dolorem animi impedit deleniti veniam earum asperiores. Soluta numquam asperiores odio illum accusantium. Repellat, atque? Harum adipisci tempora minima quisquam, vero accusamus voluptatum assumenda! Sed, praesentium ullam? Ducimus, ab ratione dolore maxime non distinctio optio excepturi! Possimus porro animi quis hic eius mollitia deserunt. Dolorem voluptate fuga nulla excepturi deserunt tempore fugiat magnam. Rerum nisi perspiciatis deserunt at voluptatem. Facilis, eius. Quidem eum neque a expedita asperiores vitae incidunt aut quasi nihil reprehenderit odit animi voluptates, velit illum quibusdam architecto hic eveniet?'
        },
    }

    function HandleResize() {
        var descriptions = document.querySelectorAll('.banner__description');
        var idx = 0
        if (window.innerWidth < phoneWidth) {
            descriptions.forEach(item => {
                item.innerText = item.innerText.substring(0, 150) + '.....';
                idx += 1;
            });
        } else {
            descriptions.forEach(item => {
                if (idx === 0) {
                    item.innerText = items.item01.description
                } else if (idx === 1) {
                    item.innerText = items.item02.description
                } else {
                    item.innerText = items.item03.description
                }
                idx += 1;
            });
        }
    }

    useEffect(() => {
        window.addEventListener('resize', HandleResize);
        HandleResize()
        return () => window.removeEventListener('resize', HandleResize);
      }, [HandleResize]);

    function UpdateBanner(direction) {
        console.log(currentNum)
        console.log(bannerState)
        if (currentNum < 0) {
            setCurrentNum(0);
            return;
        } else if (currentNum > 2) {
            setCurrentNum(2);
            return;
        }
        if (currentNum === 0) {
            if (direction === "left") {
                setBannerState('three')
                setCurrentNum(currentNum + 2);
                return
            }
            setBannerState('two')
            setCurrentNum(currentNum + 1);
            return
        } else if (currentNum === 1) {
            if (direction === 'left') {
                setBannerState('one')
                setCurrentNum(currentNum - 1);
                return
            }
            setBannerState('three')
            setCurrentNum(currentNum + 1);
            return
        } else {
            if (direction === 'left') {
                setBannerState('two')
                setCurrentNum(currentNum - 1);
                return
            }
            setBannerState('one')
            setCurrentNum(currentNum - 2);
            return
        }

    }

  return (
    <div className='banner'>
        <div className='banner__title'>
            ANNOUNCEMENTS
        </div>
        <div className='banner__count'>
            <span className={currentNum === 0 ? 'active' : ''}></span>
            <span className={currentNum === 1 ? 'active' : ''}></span>
            <span className={currentNum === 2 ? 'active' : ''}></span>
        </div>

        <div className='banner__carousel'>
            <div className={bannerState}>
                <div className='banner__item'>
                    <div>
                        {items.item01.title}
                    </div>
                    <div>
                        <p className='banner__description'>
                        {items.item01.description}
                        </p>
                    </div>
                    <div>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
                <div className='banner__item'>
                    <div>
                        {items.item02.title}
                    </div>
                    <div>
                        <p className='banner__description'>
                        {items.item02.description}
                        </p>
                    </div>
                    <div>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
                <div className='banner__item'>
                    <div>
                        {items.item03.title} 
                    </div>
                    <div>
                        <p className='banner__description'>
                        {items.item03.description}
                        </p>
                    </div>
                    <div>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='banner__arrows'>
            <i onClick={() => UpdateBanner('left')} class="fa-solid fa-chevron-left"></i>
            <i onClick={() => UpdateBanner('right')} class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
  )
}
