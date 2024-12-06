import CustomStats from 'components/CustomStats/CustomStats';
import MainMenuLinks from 'components/MainMenuLinks/MainMenuLinks';
import React from 'react';

const SubAdminDashboard = () => {

    const menuLinks = [
        {
          text:"Sellers",
          url:"/subadmin/SellerManagement"
        },
        {
          text:"Supervisors",
          url:"/subadmin/SupervisorManagement"
        },
        {
          text:"Payment",
          url:"/subadmin/paymentcondition"
        },
        {
          text:"blockNumber",
          url:"/subadmin/blocknumber"
        },
        {
          text:"saleLimit",
          url:"/subadmin/addlimit"
        },
        {
          text:"winNumbers",
          url:"/subadmin/winningnumberviews"
        },
        {
          text:"Tickets",
          url:"/subadmin/soldtickets"
        },
        {
          text:"saleDetails",
          url:"/subadmin/saledetails"
        },
        {
          text:"deleted Tickets",
          url:"/subadmin/deleteticket"
        },
        {
          text:"winning Tickets",
          url:"/subadmin/winningtickets"
        },
        {
          text:"saleReports",
          url:"/subadmin/salereports"
        },
        {
          text:"Percentage",
          url:"/subadmin/PercentageLimit"
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