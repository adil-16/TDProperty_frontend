"use client";


import TableWithSort from "./TableWithSort";
import RecordButton from "../Dropdowns/RecordDropdown";
import SortByButton from "../Dropdowns/UsersSortByDropdown";
import SearchIconSvg from "../Svgs/SearchIconSvg";
import TablePagination from "./TablePagination";

const AffiliateMarketingTable = () => {
  const headings = [
    { id: 1, label: "Name", key: "name" },
    { id: 2, label: "Link Sent", key: "linkSent" },
    { id: 3, label: "Link Opened", key: "linkOpened" },
    { id: 4, label: "Referral Registered", key: "referralRegistered" },
  ];
  const data = [
    {
      id: 1,
      name: "Myra Foster",
      profilePic: "/imgs/profile.png",
      linkSent: 4,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 2,
      name: "Rock Apartments Limited",
      profilePic: "/imgs/profile.png",
      linkSent: 15,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 3,
      name: "Matilda Robertson",
      profilePic: "/imgs/profile.png",
      linkSent: 4,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 4,
      name: "French Southern Terr",
      profilePic: "/imgs/profile.png",
      linkSent: 8,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 5,
      name: "Martha Barnes",
      profilePic: "/imgs/profile.png",
      linkSent: 9,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 6,
      name: "Monaco",
      profilePic: "/imgs/profile.png",
      linkSent: 8,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 7,
      name: "Minnie Hoffman",
      profilePic: "/imgs/profile.png",
      linkSent: 9,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 8,
      name: "Lawrence Walton",
      profilePic: "/imgs/profile.png",
      linkSent: 4,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 9,
      name: "Mable Fernandez",
      profilePic: "/imgs/profile.png",
      linkSent: 8,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
    {
      id: 10,
      name: "Gregory Maldonado",
      profilePic: "/imgs/profile.png",
      linkSent: 8,
      linkOpened: 12,
      referralRegistered: (<b>14</b>),
    },
  ];
  return (
    <div className="flex flex-col">

      <TableWithSort
        size="lg"
        headings={headings}
        data={data}
        redirectUrl="/users/companies/companyprofile"
      />
    </div>
  );
};

export default AffiliateMarketingTable;
