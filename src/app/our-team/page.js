import React from "react";
import PageHeaderTeam from "../componants/team/PageHeaderTeam";
import TeamR from "../componants/team/TeamR";
import CTAOne from "../componants/home/CTAOne";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Team - Tzar Venture Online Digital Marketing Services - Tzar Venture",
  description: "Team - End to End Digital Marketing Services Online."
}

const Page = () => {
  return (
    <>
      <PageHeaderTeam page="Team" title="Our Team" />
      <TeamR />
      <CTAOne />
    </>
  );
};
export default Page;
