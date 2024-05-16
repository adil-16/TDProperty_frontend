import InDepthStatsButton from "@/components/Buttons/InDepthStatsButton";
import PropertiesPieGraph from "@/components/Graph/PropertiesPieGraph";
import SalesRevenueGraph from "@/components/Graph/SalesRevenueGraph";
import AnalyticsSection from "@/components/Sections/Analytics/AnalyticsSection";
import CompanyStats from "@/components/Sections/CompanyStats";
import LatestSalesSection from "@/components/Sections/LatestSales/LatestSalesSection";
import TopProperties from "@/components/Sections/TopProperty/TopProperties";


const CompanyDashboard = () => {
  return (
    <div className="px-24 py-16">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
          <InDepthStatsButton />
        </div>
        <div className="flex gap-8 mt-10">
          <div className="w-3/4 flex flex-col gap-6">
            <CompanyStats />
            <SalesRevenueGraph />
            <AnalyticsSection />
          </div>
          <div className="w-1/4 flex flex-col gap-6">
            <TopProperties />
            <LatestSalesSection />
            <PropertiesPieGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
