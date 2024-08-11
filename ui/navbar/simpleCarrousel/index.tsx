import { Flex, Img } from "@chakra-ui/react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import haras from "../../../public/clients/haras.png";
import gb from "../../../public/clients/grand-bell.png"

export const SimpleCarrousel = () => {
    const settings = {
        type       : 'fade', // Efecto de desvanecimiento
        perPage:1 ,
        perMove: 1,
        pagination: false, // Muestra los puntos de paginación
        arrows     : false, // Oculta las flechas de navegación
        autoplay   : true, // Habilita el autoplay
        speed: 300,
      };

  return (
    <Flex>
      <Splide options={{
              perPage: 1,
              perMove: 1,
              gap: "3em",
              interval:5000,
              autoplay:true,
              arrows: false,
              width: "70vw", // Ajusta la altura según tus necesidades
              type: "fade",
              resetProgress: true,
              height: "20em",
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
