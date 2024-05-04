import { memo } from "react";
import { XProps } from "./X.type";

const XView: React.FC<XProps> = ({ uniqueKey }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2 pointer-events-none select-none duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <defs>
            <linearGradient id={`${uniqueKey}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                <stop offset="50%" style={{ stopColor: '#14b8a6' }} />
                <stop offset="100%" style={{ stopColor: '#ec4899' }} />
            </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20 20 4M4 4 20 20" stroke={`url(#${uniqueKey})`} />
    </svg>
);

export default memo(XView);