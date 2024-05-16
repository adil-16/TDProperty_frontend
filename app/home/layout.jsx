import CompanyFooter from "@/components/Footer/CompanyFooter";
import LandingNavbar from "@/components/Navbars/LandingNavbar";

const LandingLayout = ({ children }) => {
  return (
    <>
      <LandingNavbar />
      {children}
      <CompanyFooter />
    </>
  );
};

export default LandingLayout;
