import CommunityBottomBar from "@/components/Navbars/CommunityBottomBar";


const CommunityLayout = ({ children }) => {
  return (
    <div>
      {children}
      <CommunityBottomBar />
    </div>
  );
};

export default CommunityLayout;
