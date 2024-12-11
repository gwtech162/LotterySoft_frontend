import CustomStats from 'components/CustomStats/CustomStats';
import MainMenuLinks from 'components/MainMenuLinks/MainMenuLinks';
import React from 'react';

import { ImUsers } from "react-icons/im";
import { FaUserSecret } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { SiAdblock } from "react-icons/si";
import { RiNumbersFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const SubAdminDashboard = () => {

    const menuLinks = [
        {
          text:"Sellers",
          url:"/subadmin/SellerManagement",
          icon:<FaUserTie color='white' size={24}/>,
        },
        {
          text:"Supervisors",
          url:"/subadmin/SupervisorManagement",
          icon: <FaUserSecret color='white' size={24}/>
        },
        {
          text:"Payment",
          url:"/subadmin/paymentcondition",
          icon: <MdPayments color='inherit' size={24}/>
        },
        {
          text:"blockNumber",
          url:"/subadmin/blocknumber",
          icon: <SiAdblock color='inherit' size={24}/>
        },
        {
          text:"saleLimit",
          url:"/subadmin/addlimit",
          icon: <MdProductionQuantityLimits color='inherit' size={24}/>
        },
        {
          text:"winNumbers",
          url:"/subadmin/winningnumberviews",
          icon: <RiNumbersFill color='inherit' size={24}/>
        },
        {
          text:"Tickets",
          url:"/subadmin/soldtickets",
          icon: <MdFactCheck color='inherit' size={24}/>
        },
        {
          text:"saleDetails",
          url:"/subadmin/saledetails",
          icon: <MdFactCheck color='inherit' size={24}/>
        },
        {
          text:"deleted Tickets",
          url:"/subadmin/deleteticket",
          icon: <RiDeleteBin5Fill color='inherit' size={24}/>
        },
        {
          text:"winning Tickets",
          url:"/subadmin/winningtickets",
          icon: <FaFortAwesome color='inherit' size={24}/>
        },
        {
          text:"saleReports",
          url:"/subadmin/salereports",
          icon: <FaInfoCircle color='inherit' size={24}/>
        },
        {
          text:"Percentage",
          url:"/subadmin/PercentageLimit",
          icon: <ImUsers color='inherit' size={24}/>
        }
      ];

    return (
       <>
        <CustomStats />
        <MainMenuLinks links={menuLinks}/>
       </>
    )
};


export default SubAdminDashboard;