// import React from "react";
// import SalesRow from "./SalesRow";

// const salesData = [
//   {
//     invoice: "INV-1765285940951",
//     date: "Dec 09, 2025",
//     time: "18:12:20",
//     patient: "Walk-in Customer",
//     items: 1,
//     payment: "Card",
//     amount: "$16.80",
//   },
//   {
//     invoice: "INV-1764731615680",
//     date: "Dec 03, 2025",
//     time: "08:13:35",
//     patient: "Absara",
//     items: 1,
//     payment: "Cash",
//     amount: "$50.40",
//   },
//   {
//     invoice: "INV-1763792643444",
//     date: "Nov 22, 2025",
//     time: "11:24:03",
//     patient: "John Williams",
//     items: 1,
//     payment: "Cash",
//     amount: "$4.20",
//   },
//   {
//     invoice: "INV-1763792557612",
//     date: "Nov 22, 2025",
//     time: "11:22:37",
//     patient: "John Williams",
//     items: 3,
//     payment: "UPI",
//     amount: "$147.00",
//   },
//   {
//     invoice: "INV-1763790624292",
//     date: "Nov 22, 2025",
//     time: "10:50:24",
//     patient: "Walk-in Customer",
//     items: 3,
//     payment: "Cash",
//     amount: "$32.34",
//   },
//   {
//     invoice: "INV-1763790578236",
//     date: "Dec 13, 2025",
//     time: "10:49:38",
//     patient: "John Williams",
//     items: 1,
//     payment: "Cash",
//     amount: "$2.24",
//   },
// ];

// const SalesTable = () => {
//   return (
//     <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
//       <table className="w-full text-sm">
//         <thead className="border-b border-gray-300 bg-slate-50">
//           <tr>
//             {[
//               "Invoice",
//               "Date & Time",
//               "Patient",
//               "Items",
//               "Payment",
//               "Amount",
//               "Status",
//             ].map((h) => (
//               <th key={h} className="p-2 text-left font-semibold text-slate-600">
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {salesData.map((sale, i) => (
//             <SalesRow key={i} sale={sale} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SalesTable;


import React from "react";
import SalesRow from "./SalesRow";

const salesData = [
  {
    invoice: "INV-1765285940951",
    date: "Dec 09, 2025",
    time: "18:12:20",
    patient: "Walk-in Customer",
    items: 1,
    payment: "Card",
    amount: "$16.80",
  },
  {
    invoice: "INV-1764731615680",
    date: "Dec 03, 2025",
    time: "08:13:35",
    patient: "Absara",
    items: 1,
    payment: "Cash",
    amount: "$50.40",
  },
  {
    invoice: "INV-1763792643444",
    date: "Nov 22, 2025",
    time: "11:24:03",
    patient: "John Williams",
    items: 1,
    payment: "Cash",
    amount: "$4.20",
  },
  {
    invoice: "INV-1763792557612",
    date: "Nov 22, 2025",
    time: "11:22:37",
    patient: "John Williams",
    items: 3,
    payment: "UPI",
    amount: "$147.00",
  },
  {
    invoice: "INV-1763790624292",
    date: "Nov 22, 2025",
    time: "10:50:24",
    patient: "Walk-in Customer",
    items: 3,
    payment: "Cash",
    amount: "$32.34",
  },
  {
    invoice: "INV-1763790578236",
    date: "Dec 13, 2025",
    time: "10:49:38",
    patient: "John Williams",
    items: 1,
    payment: "Cash",
    amount: "$2.24",
  },
];

const SalesTable = ({ search = "", filter = "all" }) => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const filteredSales = salesData.filter((sale) => {
    const matchSearch =
      sale.invoice.toLowerCase().includes(search.toLowerCase()) ||
      sale.patient.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all" || sale.date === today;

    return matchSearch && matchFilter;
  });

  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="border-b border-gray-300 bg-slate-50">
          <tr>
            {[
              "Invoice",
              "Date & Time",
              "Patient",
              "Items",
              "Payment",
              "Amount",
              "Status",
            ].map((h) => (
              <th key={h} className="p-2 text-left font-semibold text-slate-600">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredSales.map((sale, i) => (
            <SalesRow key={i} sale={sale} />
          ))}

          {filteredSales.length === 0 && (
            <tr>
              <td colSpan="7" className="p-6 text-center text-slate-500">
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
