import React from "react";
import MembershipCard from "../Cards/MembershipCard";

const MembershipSection = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <h1 className="text-4xl font-extrabold text-black">
        Get your membership and enjoy perks
      </h1>
      <h2 className="mt-8 text-2xl font-bold text-[#4F4F4F]">Pricing</h2>
      <div className="flex w-[64rem] flex-wrap justify-center gap-x-10 gap-y-20 py-10">
        <MembershipCard
          title="Single"
          subtitle="Perfect for beginners"
          pricing={99}
        >
          <div className="px-10 py-4 text-[15px] font-semibold leading-5">
            <ul className="flex list-image-[url('/svgs/yellowtick.svg')] flex-col gap-2">
              <li>1 listing</li>
              <li>Matching Alert</li>
              <li>
                Monitor the total number of views your listing has received
              </li>
            </ul>
          </div>
        </MembershipCard>
        <MembershipCard
          title="Golden"
          subtitle="Perfect for business"
          pricing={199}
        >
          <div className="px-10 py-4 text-[15px] font-semibold leading-5">
            <ul className="flex list-image-[url('/svgs/yellowtick.svg')] flex-col gap-2">
              <li>100 listing slots</li>
              <li>Matching Alert</li>
              <li>Rich Analytics</li>
              <li>Engage with True Dar Community</li>
              <li>Scheduler Tool</li>
              <li>Direct Inquiries</li>
              <li>Favorites Tracking</li>
              <li>Search Insights</li>
              <li>Gold Membership Badge</li>
            </ul>
          </div>
        </MembershipCard>
        <MembershipCard
          title="Basic"
          subtitle="Perfect for personal"
          pricing={299}
        >
          <div className="px-10 py-4 text-[15px] font-semibold leading-5">
            <ul className="flex list-image-[url('/svgs/yellowtick.svg')] flex-col gap-2">
              <li>20 listing slots</li>
              <li>Matching Alert</li>
              <li>Rich Analytics</li>
              <li>Engage with True Dar Community</li>
              <li>Scheduler Tool</li>
              <li>Direct Inquiries</li>
            </ul>
          </div>
        </MembershipCard>
        <MembershipCard
          title="Platinum"
          subtitle="Perfect for business"
          pricing={399}
        >
          <div className="px-10 py-4 text-[15px] font-semibold leading-5">
            <ul className="flex list-image-[url('/svgs/yellowtick.svg')] flex-col gap-2">
              <li>250 listing slots</li>
              <li>Matching Alert</li>
              <li>Rich Analytics</li>
              <li>Engage with True Dar Community</li>
              <li>Scheduler Tool</li>
              <li>Direct Inquiries</li>
              <li>Favorites Tracking</li>
              <li>Search Insights</li>
              <li>Gold Membership Badge</li>
              <li>10 Additional Users</li>
              <li>Manager Role</li>
              <li>Prime Listing Area</li>
            </ul>
          </div>
        </MembershipCard>
        <MembershipCard
          title="Elite"
          subtitle="Perfect for business"
          pricing={499}
        >
          <div className="px-10 py-4 text-[15px] font-semibold leading-5">
            <ul className="flex list-image-[url('/svgs/yellowtick.svg')] flex-col gap-2">
              <li>Unlimited listing slots</li>
              <li>Matching Alert</li>
              <li>Rich Analytics</li>
              <li>Engage with True Dar Community</li>
              <li>Scheduler Tool</li>
              <li>Direct Inquiries</li>
              <li>Favorites Tracking</li>
              <li>Search Insights</li>
              <li>Elite Membership Badge</li>
              <li>10 Additional Users</li>
              <li>Manager Role</li>
              <li>Prime Listing Area</li>
              <li>Manager Role</li>
            </ul>
          </div>
        </MembershipCard>
      </div>
    </div>
  );
};

export default MembershipSection;
