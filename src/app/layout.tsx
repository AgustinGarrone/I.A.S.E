import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "animate.css";
import Head from "next/head";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I.A.S.E",
  description: "Ingenieria Aplicada a Sistemas de Energía",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          INGENIERÍA APLICADA A SISTEMAS DE ENERGÍA S.A. | I.A.S.E. S.A.
        </title>
        <meta
          name="description"
          content="I.A.S.E. S.A. es una empresa especializada en la ingeniería eléctrica, con más de veinticinco años de experiencia, que ofrece servicios de excelencia en sectores como urbanizaciones especiales, edificios inteligentes, alumbrado público, instalaciones industriales y más."
        />
        <meta
          name="keywords"
          content="Ingeniería eléctrica, IASE SA, servicios eléctricos, urbanizaciones especiales, edificios inteligentes, alumbrado público, instalaciones industriales, transmisión y distribución de energía, tableros eléctricos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph (para compartir en redes sociales) */}
        <meta
          property="og:title"
          content="INGENIERÍA APLICADA A SISTEMAS DE ENERGÍA S.A. | I.A.S.E. S.A."
        />
        <meta
          property="og:description"
          content="I.A.S.E. S.A. ofrece servicios de ingeniería eléctrica con más de veinticinco años de experiencia en sectores como urbanizaciones especiales, edificios inteligentes, alumbrado público, instalaciones industriales y más."
        />
        <meta property="og:image" content="/logo.png" />{" "}
        {/* Ruta a la imagen representativa de la empresa */}
        <meta property="og:url" content="https://www.iasesa.com" />{" "}
        {/* URL de la página web */}
        <meta property="og:type" content="website" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="INGENIERÍA APLICADA A SISTEMAS DE ENERGÍA S.A. | I.A.S.E. S.A."
        />
        <meta
          name="twitter:description"
          content="I.A.S.E. S.A. es una empresa especializada en la ingeniería eléctrica, ofreciendo servicios en sectores como urbanizaciones especiales, edificios inteligentes, alumbrado público, instalaciones industriales y más."
        />
        <meta name="twitter:image" content="/logo.png" />{" "}
        {/* Ruta a la imagen representativa de la empresa */}
        <meta name="twitter:site" content="@tu_usuario_de_twitter" />{" "}
        {/* Usuario de Twitter de la empresa, si lo hay */}
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* Ruta al favicon de la empresa */}
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.iasesa.com" />{" "}
        {/* URL canónica de la página */}
      </Head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
