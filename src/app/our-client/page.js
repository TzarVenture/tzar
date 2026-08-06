import React from "react";
import Client from "../componants/ClientPG/Client";
import PageHeaderCli from "../componants/ClientPG/PageHeaderCli";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Our Client  - Our Digital Marketing Online Clients in India | Tzar Venture",
  description: "Our Digital Marketing Clients : Tzar Venture has generated leads online for our B2B | B2C clients at provides them unconceivable results through website development, digital marketing and online social media channels."
}

const Page = () => {
  return (
    <>
      <PageHeaderCli arent="Our Agency" title="Our Client" page="Our Client" />
      <Client />
    </>
  );
};
export default Page;
