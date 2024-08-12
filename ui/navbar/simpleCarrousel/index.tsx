import { Flex, Img } from "@chakra-ui/react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import haras from "../../../public/clients/haras.png";
import gb from "../../../public/clients/grand-bell.png"

export const SimpleCarrousel = () => {

  return (
    <Flex>
      <Splide options={{
              perPage: 1,
              perMove: 1,
              gap: "3em",
              interval:1500,
              autoplay:true,
              arrows: false,
              width: "10em", 
              type: "fade",
              resetProgress: true,
              drag: false,
              height: "20em",
              pagination:false,
              rewind:true,
            }}>
        <SplideSlide>
          <Img src={haras.src} />
        </SplideSlide>
        <SplideSlide>
          <Img src={gb.src} />
        </SplideSlide>
      </Splide>
    </Flex>
  );
};
