import CompanyFooter from "@/components/Footer/CompanyFooter";
import CompanyNavbar from "@/components/Navbars/CompanyNavbar";


const CompanyDashboardLayout = ({ params, children }) => {
  const dashboard = params.dashboard;
  const allowedDashboards = [
    "company",
    "broker",
    "specialbroker",
    "propertyowner",
    "normaluser",
  ];
  if (!allowedDashboards.includes(dashboard)) {
    return <div>404</div>;
  }
  return (
    <div>
      <CompanyNavbar />
      {children}
      <CompanyFooter />
    </div>
  );
};

export default CompanyDashboardLayout;
