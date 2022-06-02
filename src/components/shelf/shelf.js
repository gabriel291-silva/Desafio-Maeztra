import './shelf.scss';
import {Carousel} from "react-bootstrap"
import CardBootstrap from '../card/cardBootstrap';

function Shelf() {
  return (
    <Carousel>
    <Carousel.Item>
     <CardBootstrap/>
    </Carousel.Item>

    <Carousel.Item>
    <CardBootstrap/>
    </Carousel.Item>

    <Carousel.Item>
    <CardBootstrap/>
    </Carousel.Item>

  </Carousel>
  );
}

export default Shelf;
