"use client";

import dynamic from "next/dynamic";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// export const AnimatedApexChart = animated(ApexChart);

// interface SpringedApexChartProps {
//   className?: string;
//   chartProps: { [key: string]: any };
// }

// export const SpringedApexChart = function ({
//   className,
//   chartProps,
// }: SpringedApexChartProps) {
//   const [chartWidth, setChartWidth] = useState("100%");
//   const chartWrapperRef = useRef({});

//   const springProps = useSpring({
//     to: { width: chartWidth },
//     config: { mass: 1, tension: 120, friction: 14 },
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setChartWidth("100%");
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <animat
//       ref={chartWrapperRef}
//       style={{ position: "relative", width: "100%" }}
//       className=""
//     >
//       <AnimatedApexChart
//         style={springProps}
//         {...chartProps}
//         width={springProps.width}
//       />
//     </animat>
//   );
// };
