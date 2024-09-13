import Carousel from 'react-bootstrap/Carousel';

function ImgContent() {
  return (
    <Carousel data-bs-theme="dark" className='bg'>
      <Carousel.Item className='center'>
        <img
          className="d-block w-1"
          src="1558-19f-Shot6_Still_Life-Environmental-Pastries_414-RGB (1).jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='center'>
        <img
          className="d-block w-1"
          src="1558-05h-Shot14_Ingredients_PLATES_HERO__0590-RGB+1 (1).jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='center'>
        <img
          className="d-block w-1"
          src="1558-12f-Shot1_Pastries_106-RGB.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgContent;