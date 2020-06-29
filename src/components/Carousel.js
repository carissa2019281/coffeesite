import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import V60Maker from '../posts/v60_photo.jpg';
import EspressoMaker from '../posts/EspressoMachine.jpg'
import MokaPot from '../posts/MokaPot.jpg'
import Chemex from '../posts/Chemex.jpg'
import './Carousel.css';

const items = [
  {
    src: V60Maker,
    altText: 'Slide 1',
    caption: 'Pour-over | Course Grind | 3 Min',
    title: 'Hario V60'
  },
  {
    src: EspressoMaker,
    altText: 'Slide 2', 
    caption: 'Espresso Coffee | Fine Grind | 8 Min',
    title: 'Espresso'
  },
  {
    src: MokaPot,
    altText: 'Slide 3',
    caption: 'Moka | Medium Grind | 10 Min',
    title: 'Bialetti'
  },
  {
    src: Chemex,
    altText: 'Slide 4',
    caption: 'Pour-over | Course Grind | 3 Min',
    title: 'Chemex'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='image'/>
        <CarouselCaption captionText={item.caption} captionHeader={item.title} className='caption'/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='Carousel'
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;