"use client";


import TableWithSort from "./TableWithSort";
import RecordButton from "../Dropdowns/RecordDropdown";
import SortByButton from "../Dropdowns/UsersSortByDropdown";
import SearchIconSvg from "../Svgs/SearchIconSvg";
import ActionDropdown from "../Dropdowns/ActionDropdown";
import TablePagination from "./TablePagination";

const SpecialBrokerTable = (isModalOpen= false) => {
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Links Opened", key: "linksOpened" },
    { id: 3, label: "Accounts Created", key: "accountsCreated" },
    { id: 4, label: "Referrals Subscribed", key: "referralsSubscribed" },
    { id: 5, label: "Revenue Generated $", key: "revenueGenerated" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      linksOpened: 4,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 2,
      name: "Rock Apartments Limited",
      profilePic: "/imgs/profile.png",
      linksOpened: 15,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 3,
      name: "Matilda Robertson",
      profilePic: "/imgs/profile.png",
      linksOpened: 4,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 4,
      name: "French Southern Terr",
      profilePic: "/imgs/profile.png",
      linksOpened: 8,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 5,
      name: "Martha Barnes",
      profilePic: "/imgs/profile.png",
      linksOpened: 9,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 6,
      name: "Monaco",
      profilePic: "/imgs/profile.png",
      linksOpened: 8,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 7,
      name: "Minnie Hoffman",
      profilePic: "/imgs/profile.png",
      linksOpened: 9,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 8,
      name: "Lawrence Walton",
      profilePic: "/imgs/profile.png",
      linksOpened: 4,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 9,
      name: "Mable Fernandez",
      profilePic: "/imgs/profile.png",
      linksOpened: 8,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
    {
      id: 10,
      name: "Gregory Maldonado",
      profilePic: "/imgs/profile.png",
      linksOpened: 8,
      accountsCreated: 12,
      referralsSubscribed: 14,
      revenueGenerated: <b>$ 15</b>,
    },
  ];
  return (
    <div className="flex flex-col">
      <TableWithSort size="lg" isModalOpen={isModalOpen} headings={headings} data={data} />
    </div>
  );
};

export default SpecialBrokerTable;
