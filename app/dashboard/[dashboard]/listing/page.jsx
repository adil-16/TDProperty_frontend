import PropertyListingSection from "@/components/Sections/ListingPage/PropertyListingSection";

const CompanyListingPage = ({ params }) => {
  const dashboard = params.dashboard;
  return <PropertyListingSection dashboard={dashboard} />;
};

export default CompanyListingPage;
