import React from 'react';

interface PictogramProps {
  className?: string;
  size?: number;
  color?: string;
}

// 1. ISO 7010 Fire Extinguisher (F001 inspired geometry)
export function IsoExtinguisherIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="11" y="10" width="10" height="18" rx="1" fill="none" />
      <path d="M13 10V6H19V10" />
      <path d="M16 6V3H21" />
      <path d="M11 15H21" />
      <circle cx="16" cy="21" r="2" fill={color} />
      <path d="M7 8L11 10" />
    </svg>
  );
}

// 2. ISO 7010 Emergency Exit (E001 inspired geometry)
export function IsoEmergencyExitIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="3" y="3" width="26" height="26" fill="none" />
      {/* Door frame */}
      <path d="M20 7V25H25V7H20Z" fill={color} opacity="0.15" />
      <path d="M20 7V25" />
      {/* Running figure */}
      <circle cx="12" cy="9" r="2.5" fill={color} />
      <path d="M10 14L14 13L17 17L14 24" />
      <path d="M14 17L9 22" />
      <path d="M12 13L8 16" />
    </svg>
  );
}

// 3. ISO 7010 Fire Hose Cabinet (F002 inspired geometry)
export function IsoHoseCabinetIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="4" y="4" width="24" height="24" />
      <circle cx="16" cy="16" r="7" strokeDasharray="3 2" />
      <path d="M16 9V23" />
      <path d="M9 16H23" />
    </svg>
  );
}

// 4. ISO 7010 Smoke Detector (M001 inspired geometry)
export function IsoSmokeDetectorIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M6 12C6 12 11 6 16 6C21 6 26 12 26 12" />
      <rect x="8" y="12" width="16" height="6" />
      <path d="M12 18V24H20V18" />
      <path d="M16 21V23" strokeWidth="3" />
    </svg>
  );
}

// 5. ISO 7010 Assembly Point (E007 inspired geometry)
export function IsoAssemblyPointIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="3" y="3" width="26" height="26" />
      <path d="M8 8L13 13M8 8H12M8 8V12" />
      <path d="M24 8L19 13M24 8H20M24 8V12" />
      <path d="M8 24L13 19M8 24H12M8 24V20" />
      <path d="M24 24L19 19M24 24H20M24 24V20" />
      <circle cx="16" cy="16" r="2.5" fill={color} />
    </svg>
  );
}

// 6. Architectural CAD Floor Plan Stamp Icon
export function IsoFloorPlanIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="4" y="4" width="24" height="24" />
      <path d="M14 4V18H28" />
      <path d="M4 14H14" />
      <path d="M20 18V28" />
      <circle cx="9" cy="9" r="1.5" fill={color} />
    </svg>
  );
}

// 7. Official Regulation Document Icon
export function IsoRegulationIcon({ className = "w-6 h-6", color = "currentColor" }: PictogramProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="5" y="4" width="22" height="24" />
      <path d="M9 10H23" />
      <path d="M9 15H23" />
      <path d="M9 20H17" />
      <path d="M20 20L23 23" />
    </svg>
  );
}
