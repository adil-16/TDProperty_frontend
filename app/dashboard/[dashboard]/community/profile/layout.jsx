import CommunityProfileNavbar from "@/components/Navbars/CommunityProfileNavbar";


const CommunityProfileLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <CommunityProfileNavbar />
      <div className="max-w-6xl w-full">{children}</div>
    </div>
  );
};

export default CommunityProfileLayout;
