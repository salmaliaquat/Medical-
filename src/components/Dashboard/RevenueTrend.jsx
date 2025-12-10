import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
    { date: "Dec 03", revenue: 10 },
    { date: "Dec 04", revenue: 40 },
    { date: "Dec 05", revenue: 40 },
    { date: "Dec 06", revenue: 40 },
    { date: "Dec 07", revenue: 40 },
    { date: "Dec 08", revenue: 40 },
    { date: "Dec 09", revenue: 40 },
];

const RevenueTrend = () => {
    return (
        <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-6">
            <div className="tracking-tight text-lg font-semibold text-slate-900 mb-4">
                Revenue Trend (Last 7 Days)
            </div>
            <ResponsiveContainer width="100%" height={300} className="focus-none-important">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#14B8A6" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueTrend;
