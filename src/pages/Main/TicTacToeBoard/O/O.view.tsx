import { memo } from "react";
import { OProps } from "./O.type";

const OView: React.FC<OProps> = ({ uniqueKey }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2 pointer-events-none select-none duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <defs>
            <linearGradient id={`${uniqueKey}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                <stop offset="50%" style={{ stopColor: '#14b8a6' }} />
                <stop offset="100%" style={{ stopColor: '#ec4899' }} />
            </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728" stroke={`url(#${uniqueKey})`} />
    </svg>
);

export default memo(OView);