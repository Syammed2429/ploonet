import { mockData } from "@/lib/mockdata";
import React from "react";

export default function FeatureCircles() {
  const { circles } = mockData;
  const circleRadius = 148;
  const strokeWidth = 3;
  const gapAngle = 3;

  const gapRadians = (gapAngle * Math.PI) / 180;

  const createCirclePath = (
    cx: number,
    cy: number,
    leftGap: boolean,
    rightGap: boolean
  ) => {
    let path = "";

    if (leftGap && rightGap) {
      const startAngle1 = gapRadians / 2;
      const endAngle1 = Math.PI - gapRadians / 2;
      const startAngle2 = Math.PI + gapRadians / 2;
      const endAngle2 = 2 * Math.PI - gapRadians / 2;

      const start1 = {
        x: cx + circleRadius * Math.cos(startAngle1),
        y: cy + circleRadius * Math.sin(startAngle1),
      };
      const end1 = {
        x: cx + circleRadius * Math.cos(endAngle1),
        y: cy + circleRadius * Math.sin(endAngle1),
      };
      const start2 = {
        x: cx + circleRadius * Math.cos(startAngle2),
        y: cy + circleRadius * Math.sin(startAngle2),
      };
      const end2 = {
        x: cx + circleRadius * Math.cos(endAngle2),
        y: cy + circleRadius * Math.sin(endAngle2),
      };

      path = `M ${start1.x} ${start1.y} A ${circleRadius} ${circleRadius} 0 0 1 ${end1.x} ${end1.y} M ${start2.x} ${start2.y} A ${circleRadius} ${circleRadius} 0 0 1 ${end2.x} ${end2.y}`;
    } else if (leftGap) {
      const startAngle = gapRadians / 2; // Start angle for left gap
      const endAngle = Math.PI - gapRadians / 2; // End angle for left gap

      const start = {
        x: cx + circleRadius * Math.cos(startAngle),
        y: cy + circleRadius * Math.sin(startAngle),
      };
      const end = {
        x: cx + circleRadius * Math.cos(endAngle),
        y: cy + circleRadius * Math.sin(endAngle),
      };

      path = `M  ${start.x} ${
        start.y
      } A ${circleRadius} ${circleRadius} 0 0 1 ${end.x} ${
        end.y
      } A ${circleRadius}   ${circleRadius}   0 1 1 ${cx + circleRadius} ${cy}`;
    } else if (rightGap) {
      const startAngle = gapRadians / 2; // Start angle for right gap
      const endAngle = 2 * Math.PI - gapRadians / 1; // End angle remains the same

      const start = {
        x: cx + circleRadius * Math.cos(startAngle),
        y: cy + circleRadius * Math.sin(startAngle),
      };
      const end = {
        x: cx + circleRadius * Math.cos(endAngle),
        y: cy + circleRadius * Math.sin(endAngle),
      };

      path = `M ${start.x} ${start.y} A ${circleRadius} ${circleRadius} 0 1 1 ${end.x} ${end.y}`;
    } else {
      path = `M ${
        cx + circleRadius
      } ${cy} A ${circleRadius} ${circleRadius} 0 1 1 ${
        cx + circleRadius - 0.1
      } ${cy}`;
    }

    return path;
  };

  return (
    <div className=" bg-black h-full sm:w-[28rem] md:w-full -mt-10 md:mt-0">
      <svg
        width="100%"
        height="300"
        viewBox="0 0 1200 300"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFBB54" />
            <stop offset="100%" stopColor="#FF4E83" />
          </linearGradient>
        </defs>

        {circles.map((circle, index) => (
          <g key={index} transform={`translate(${index * 300}, 0)`}>
            <path
              d={createCirclePath(150, 150, circle.leftGap, circle.rightGap)}
              fill="none"
              stroke="url(#borderGradient)"
              strokeWidth={strokeWidth}
              transform={circle.leftGap ? "rotate(180, 150, 150)" : ""}
            />
            <text
              x="150"
              y="140"
              fontFamily="Arial, sans-serif"
              fontSize="42"
              fontWeight="bold"
              fill="url(#borderGradient)"
              textAnchor="middle"
            >
              {circle.name}
            </text>
            <text
              x="150"
              y="180"
              fontFamily="Arial, sans-serif"
              fontSize="27"
              fill="url(#borderGradient)"
              textAnchor="middle"
            >
              {circle.subtext}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
