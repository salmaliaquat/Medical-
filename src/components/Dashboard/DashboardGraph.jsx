import React from "react";
import RevenueTrend from "./RevenueTrend";
import AppointmentsStatus from "./AppointmentsStatus";

const DashboardGraphs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7">
      <RevenueTrend />
      <AppointmentsStatus />
    </div>
  );
};

export default DashboardGraphs;
