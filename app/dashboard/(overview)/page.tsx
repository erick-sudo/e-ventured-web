"use client";

import React, { useState } from "react";
import TrendingUp from "@mui/icons-material/TrendingUp";
import clsx from "clsx";
import { ApexChart } from "@/app/ui/charts";
import { EButton } from "@/app/ui/loans/buttons";
import { formatCurrency } from "@/app/lib/utils";
import {
  BanknotesIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import SellIcon from "@mui/icons-material/Sell";
const schedules = [
  {
    id: "1",
    client: "Alice",
    amount: 1000,
    processed: true,
    created_at: "2024-05-12T10:00:00Z",
    processed_at: "2024-05-12T11:30:00Z",
  },
  {
    id: "2",
    client: "Bob",
    amount: 1500,
    processed: false,
    created_at: "2024-05-11T09:30:00Z",
  },
  {
    id: "3",
    client: "Charlie",
    amount: 2000,
    processed: true,
    created_at: "2024-05-10T15:45:00Z",
    processed_at: "2024-05-11T08:00:00Z",
  },
  {
    id: "4",
    client: "David",
    amount: 1200,
    processed: true,
    created_at: "2024-05-09T12:15:00Z",
    processed_at: "2024-05-10T14:20:00Z",
  },
  {
    id: "5",
    client: "Eve",
    amount: 1800,
    processed: false,
    created_at: "2024-05-08T16:20:00Z",
  },
];

const cardData = [
  {
    title: "Total Applications",
    value: "4,442,342",
    percentage: "59.3%",
    footer: "Last 30 days",
  },
  {
    title: "Loans Released",
    value: "KSH 5,846,698.00",
    percentage: "100%",
    footer: "Loan portfolio",
  },
  {
    title: "Average Loan Term",
    value: "1 month",
    percentage: "65.45% ",
    footer: "Across all loans",
  },
  {
    title: "Pending Applications",
    value: "150",
    percentage: "20%",
    footer: "In review",
  },
];

export default function Dashboard() {
  const [clientRegistrations, setClientRegistrations] = useState("monthly");

  const loanStatusTally = {
    series: [434, 159, 234, 341, 35, 17, 342],
    chartOptions: {
      labels: [
        "Pending",
        "Approved",
        "Disbursed",
        "Rescheduled",
        "Written Off",
        "Declined",
        "Closed",
      ],
    },
  };

  const series = [
    {
      name: "Page Views",
      data:
        clientRegistrations === "monthly"
          ? [36, 30, 22, 49, 35, 46, 22, 30, 21, 43, 22, 39]
          : [7, 6, 1, 6, 4, 4, 6],
    },
    {
      name: "Sessions",
      data:
        clientRegistrations === "monthly"
          ? [46, 23, 39, 43, 28, 25, 24, 26, 43, 26, 37, 35]
          : [4, 7, 6, 1, 2, 9, 7],
    },
  ];

  const options = {
    chart: {
      id: "line-chart",
      height: 500,
      toolbar: {
        show: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["rgb(217, 119, 6)", "indigo"],
    xaxis: {
      categories:
        clientRegistrations === "monthly"
          ? [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]
          : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      title: {
        text: "Sales",
      },
    },
  };

  return (
    <div className="px-4 grid gap-4 pb-6">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cardData.map((dt, index) => (
          <div
            key={index}
            className="border bg-white shadow py-2 px-6 grid gap-3"
          >
            <h4 className="text-gray-500">{dt.title}</h4>
            <div className="flex items-center gap-2">
              <span className="font-bold">{dt.value}</span>
              <span
                className={clsx(`flex gap-1 font-semibold px-2 border`, {
                  "bg-amber-600/10 text-amber-600 border-amber-600": index >= 2,
                  "bg-indigo-700/10 text-indigo-700 border-indigo-700":
                    index < 2,
                })}
              >
                <TrendingUp />
                <span>{dt.percentage}</span>
              </span>
            </div>
            <div className="text-sm text-gray-500">{dt.footer}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="px-6 py-2 flex items-center bg-white shadow border">
          <div className="flex-grow flex items-center">
            <h4 className="text-lg font-semibold">Available Credits</h4>
            <h4 className="px-4 font-extrabold py-2">234</h4>
            <button className="px-4 text-sm flex items-center gap-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white duration-300">
              <span>Purchase SMS</span>
            </button>
          </div>
        </div>
        <div className="px-6 py-2 flex items-center bg-white shadow border">
          <div className="flex-grow flex items-center">
            <h4 className="text-lg font-semibold">Arrears</h4>
            <h4 className="px-4 font-extrabold py-2">KSH145,638.00</h4>
            <div>Due Amount</div>
          </div>
          <span className="text-sm">
            <SellIcon fontSize="inherit" />
          </span>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-4">
        <div className="bg-white shadow xl:col-span-2">
          <div className="flex items-center gap-4 px-4">
            <h4 className="p-4 text-indigo-800 font-bold text-lg">
              Client Registrations
            </h4>
            <div className="flex-grow"></div>
            <EButton
              onClick={() => setClientRegistrations("monthly")}
              className={clsx("px-4 py-1", {
                "bg-transparent text-indigo-800 ring-1 ring-indigo-800":
                  clientRegistrations === "monthly",
              })}
            >
              Monthly
            </EButton>
            <EButton
              onClick={() => setClientRegistrations("weekly")}
              className={clsx("px-4 py-1", {
                "bg-transparent text-indigo-800 ring-1 ring-indigo-800":
                  clientRegistrations === "weekly",
              })}
            >
              Weekly
            </EButton>
          </div>
          <ApexChart
            options={options}
            series={series}
            type="area"
            height={400}
            width={"100%"}
          />
        </div>
        <div className="grid gap-4">
          <div className="bg-white p-4 shadow">
            <h4 className="text-indigo-700 font-bold text-lg flex items-center gap-4 px-2">
              <BanknotesIcon height={50} />
              <span>Disbursement Statistics</span>
            </h4>
            <div className="grid sm:grid-cols-3 gap-2 items-center pt-4 pb-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">{formatCurrency(54892)}</span>
                <span className="text-gray-500">Today</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">{formatCurrency(124456)}</span>
                <span className="text-gray-500">This Week</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">{formatCurrency(345897)}</span>
                <span className="text-gray-500">This Month</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow">
            <h4 className="text-amber-700 font-bold text-lg flex items-center gap-4 px-2">
              <CircleStackIcon height={50} />
              <span>Collection Statistics</span>
            </h4>
            <div className="grid sm:grid-cols-3 gap-2 items-center pt-4 pb-6">
              <div className="flex flex-col items-center">
                <span className="font-bold">
                  {formatCurrency(54892 * 1.34)}
                </span>
                <span className="text-gray-500">Today</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">
                  {formatCurrency(124456 * 1.34)}
                </span>
                <span className="text-gray-500">This Week</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold">
                  {formatCurrency(345897 * 1.34)}
                </span>
                <span className="text-gray-500">This Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 gap-4">
        <div className="bg-white shadow p-4">
          <h4 className="text-indigo-800 font-bold text-lg">Status Tally</h4>
          <ApexChart
            options={{
              ...loanStatusTally.chartOptions,
              colors: [
                "#4f46e5",
                "#4b0082",
                "#663803",
                "#4d084d",
                "#d97706",
                "rgb(55, 48, 163)",
                "#800080",
              ],
              plotOptions: {
                pie: {
                  donut: {
                    size: "45%",
                  },
                },
              },
              legend: {
                position: "left",
                horizontalAlign: "left",
              },
            }}
            series={loanStatusTally.series}
            type="donut"
            height={350}
            width={"100%"}
          />
        </div>
        <div className="bg-white shadow p-4 xl:col-span-2">
          <h4 className="text-indigo-800 font-bold text-lg">
            Recently Updated Disbursements
          </h4>
          <div className="pb-2">
            {[...schedules, ...schedules].map((schedule, idx) => (
              <div key={idx} className="flex items-center">
                <div
                  className={clsx("h-2 w-2 rounded-full", {
                    "bg-amber-700": idx % 2 === 0,
                    "bg-indigo-700": idx % 2 !== 0,
                  })}
                ></div>
                <div className="flex-grow grid grid-cols-4 border-b">
                  <div className="px-4 py-2">{schedule.client}</div>
                  <div className="px-4 py-2">
                    {formatCurrency(schedule.amount)}
                  </div>
                  <div className="px-4 py-2">{schedule.created_at}</div>
                  <div className="px-4 py-2">{schedule.processed_at}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <EButton className="px-4 py-2">View More</EButton>
          </div>
        </div>
      </div>
    </div>
  );
}
