import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "../app/componants/home/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: "India's fastest growing digital marketing agency | company in India - TZAR VENTURE- Digital Marketing Agency Mumbai",
  description: "Online digital marketing Agency -  Tzar Venture India's fatest growing company/agency in online digital marketing services. DMA is a web marketing agency that offers SEO services, PPC services, social media marketing services, web design services."
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
