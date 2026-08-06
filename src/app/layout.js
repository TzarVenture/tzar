
import { Inter } from "next/font/google";
import { Image } from "react-bootstrap";
import Script from 'next/script';
import "./globals.css";
import "../assets/styles/mibooz.css";
import "../assets/styles/mibooz-responsive.css";
import "../assets/styles/custom.css";
import "../assets/styles/uicons-regular-rounded.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../assets/vendors/mibooz-icons/style.css";
import "../assets/vendors/fontawesome/css/all.min.css";
import "../assets/vendors/animate/animate.min.css";
import "../assets/vendors/animate/custom-animate.css";
import "../assets/vendors/reey-font/stylesheet.css";
import "../assets/vendors/the-sayinistic-font/stylesheet.css";
import SiteFooter from "./componants/FooterSection/SiteFooter";
import Header from "./componants/Header/Header";

import Whatsapp from "../assets/images/icons/whatsapp.png";

import HeaderFooterWrapper from "./HeaderFooterWrapper";
import { useRootContext } from "@/app/componants/context/context";
import MobileMenu from "./componants/MobileMenu/MobileMenu";
import StickyBar from "./componants/Header/StickyBar";
// import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency",
  description: "Tzar Digital Marketing Agency",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKLMM6DX');
  `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C01Z53HPJQ"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-C01Z53HPJQ');
  `}
        </Script>

        {/* Google Tag Delayed Navigation Helper Script */}
        <Script id="gtag-send-event" strategy="afterInteractive">
          {`
    function gtagSendEvent(url) {
      var callback = function () {
        if (typeof url === 'string') {
          window.location = url;
        }
      };
      gtag('event', 'ads_conversion_Contact_Us_1', {
        'event_callback': callback,
        'event_timeout': 2000,
      });
      return false;
    }
  `}
        </Script>
        <meta content="India's fastest growing digital marketing agency | company in India - TZAR VENTURE- Digital Marketing Agency Mumbai" property="og:title" />
        <meta content="https://www.tzar.co/" property="og:url" />
        <link rel="icon" href="tzar-favicon.png" />
        <meta name="description" content="Online digital marketing Agency -  Tzar Venture India's fatest growing company/agency in online digital marketing services. DMA is a web marketing agency that offers SEO services, PPC services, social media marketing services, web design services." />
        <meta name="next-head-count" content="8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script async src="//www.instagram.com/embed.js"></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Federo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />


        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css" rel="stylesheet" />


        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,700;1,800&display=swap" rel="stylesheet" />


        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css"
          rel="stylesheet"
        />


        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.0.1/swiper-bundle.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"></script>

        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <link href=
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet" />
        <script src=
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js">
        </script>

        <meta name="facebook-domain-verification" content="sog1mzogyompx9km1xruxelfqoqx9b" />


        {/* <!-- Meta Pixel Code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
             !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '468974660407931');
          fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=468974660407931&ev=PageView&noscript=1" alt="Meta Pixel" />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}

      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKLMM6DX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}


        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
        {/* <StickyBar /> */}

        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>


      </body>
    </html>
  );
}
