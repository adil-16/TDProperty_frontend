
import SidebarButton from "../Buttons/SidebarButton";
import DashboardSvg from "../Svgs/DashboardSvg";
import CompanyLogo from "../Logos/CompanyLogo";
import PropertiesSvg from "../Svgs/PropertiesSvg";
import UsersSvg from "../Svgs/UsersSvg";
import TransactionsSvg from "../Svgs/TransactionsSvg";
import PrivilegesSvg from "../Svgs/PrivilegesSvg";
import CommunitySvg from "../Svgs/CommunitySvg";
import MessagingSvg from "../Svgs/MessagingSvg";
import AdsManagementSvg from "../Svgs/AdsManagementSvg";
import SpecialBrokerSvg from "../Svgs/SpecialBrokerSvg";
import AffiliateMarketingSvg from "../Svgs/AffiliateMarketingSvg";
import RatingSvg from "../Svgs/RatingSvg";
import SignOutSvg from "../Svgs/SignOutSvg";

const Sidebar = () => {
  return (
    <div className="bg-secondary min-w-[243px] flex flex-col items-center text-white min-h-full pb-20">
      <div className="my-10">
        <CompanyLogo />
      </div>
      <div className="flex flex-col gap-4 mb-20">
        <SidebarButton title="Dashboards" icon={<DashboardSvg />} />
        <SidebarButton title="Properties" icon={<PropertiesSvg />} />
        <SidebarButton title="Users" icon={<UsersSvg />} />
        <SidebarButton title="Transactions" icon={<TransactionsSvg />} />
        <SidebarButton title="Privileges" icon={<PrivilegesSvg />} />
        <SidebarButton title="Community" icon={<CommunitySvg />} />
        <SidebarButton title="Messaging" icon={<MessagingSvg />} />
        <SidebarButton title="Ads Management" icon={<AdsManagementSvg />} />
        <SidebarButton title="Special Broker" icon={<SpecialBrokerSvg />} />
        <SidebarButton
          title="Affiliate Marketing"
          icon={<AffiliateMarketingSvg />}
        />
        <SidebarButton title="Rating and Reviews" icon={<RatingSvg />} />
      </div>
      <SidebarButton title="Sign Out" icon={<SignOutSvg />} />
    </div>
  );
};

export default Sidebar;
