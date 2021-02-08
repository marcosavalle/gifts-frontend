import React from 'react';
import Carousel from 'react-material-ui-carousel';

const CarouselMeli = (): JSX.Element => {
  return (
    <Carousel
      fullHeightHover
      navButtonsAlwaysVisible
      autoPlay
      interval={6000}
      indicators={false}
      animation="slide"
      timeout={{ appear: 200, enter: 200, exit: 500 }}>
      <img
        src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-9c165ffa-5660-4f98-bf20-83e536834377.jpg"
        alt="Banner Home 1"
        style={{ width: '100%' }}
      />
      <img
        src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLA-especial-autopartes/17b0b640-25d9-11eb-adfa-b9821623cbb3-home-slider_desktop.jpg"
        alt="Banner Home 2"
        style={{ width: '100%' }}
      />
      <img
        src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-23b718ca-01d9-464a-8594-4fdb7acd1028.jpg"
        alt="Banner Home 3"
        style={{ width: '100%' }}
      />
      <img
        src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-de4e8ccb-5b7c-4179-a445-e95103e7554e.jpg"
        alt="Banner Home 4"
        style={{ width: '100%' }}
      />
      <img
        src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-5d3b5f19-fb06-485b-849d-43ca1ff622f2.jpg"
        alt="Banner Home 5"
        style={{ width: '100%' }}
      />
    </Carousel>
  );
};

export default CarouselMeli;
