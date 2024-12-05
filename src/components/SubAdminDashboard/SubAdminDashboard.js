import CustomStats from 'components/CustomStats/CustomStats';
import MainMenuLinks from 'components/MainMenuLinks/MainMenuLinks';
import React from 'react';

const SubAdminDashboard = () => {

    const menuLinks = [
        {
          text:"Sellers",
          url:"#"
        },
        {
          text:"Supervisors",
          url:"#"
        },
        {
          text:"Payment",
          url:"#"
        },
        {
          text:"blockNumber",
          url:"#"
        },
        {
          text:"saleLimit",
          url:"#"
        },
        {
          text:"winNumbers",
          url:"#"
        },
        {
          text:"Tickets",
          url:"#"
        },
        {
          text:"saleDetails",
          url:"#"
        },
        {
          text:"deleted Tickets",
          url:"#"
        },
        {
          text:"winning Tickets",
          url:"#"
        },
        {
          text:"saleReports",
          url:"#"
        },
        {
          text:"Percentage",
          url:"#"
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