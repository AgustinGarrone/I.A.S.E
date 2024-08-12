import urbanizaciones from "../../../../../public/specialties/urbanizaciones.png";
import industrial from "../../../../../public/specialties/industrial.png";
import casaCategoria from "../../../../../public/specialties/casa-categoria.png";
import casaInteligente from "../../../../../public/specialties/casa-inteligente.png";
import distribucion from "../../../../../public/specialties/distribucion-electrica.png";
import transmision from "../../../../../public/specialties/transmision.png";
import alumbrado from "../../../../../public/specialties/alumbrado.png";
import tableros from "../../../../../public/specialties/tableros.png";

type SpecialityData = {
  title: string;
  img: string;
  color: string;
};

export const SPECIALITIES_DATA: SpecialityData[] = [
  {
    title: "URBANIZACIONES ESPECIALES",
    img: urbanizaciones.src,
    color: "teal.500",
  },
  {
    title: "EDIFICIOS INTELIGENTES",
    img: casaInteligente.src,
    color: "blue.500",
  },
  {
    title: "VIVIENDAS ALTA CATEGORÍA",
    img: casaCategoria.src,
    color: "orange.500",
  },
  {
    title: "INSTALACIÓN DE ALUMBRADO",
    img: alumbrado.src,
    color: "yellow.500",
  },
  {
    title: "INSTALACIONES INDUSTRIALES",
    img: industrial.src,
    color: "red.500",
  },
  {
    title: "INSTALACIONES DE TRANSMISIÓN",
    img: transmision.src,
    color: "purple.500",
  },
  {
    title: "INSTALACIONES DE DISTRIBUCIÓN",
    img: distribucion.src,
    color: "green.500",
  },
  {
    title: "TABLEROS ELÉCTRICOS",
    img: tableros.src,
    color: "pink.500",
  },
];
