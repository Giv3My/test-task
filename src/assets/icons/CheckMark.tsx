import React from 'react';

export const CheckMark: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill ?? 'none'}
    >
      <path
        d="M7.17224 12.1173C6.7984 11.7691 6.1923 11.7691 5.81846 12.1173C5.44463 12.4654 5.44463 13.0299 5.81846 13.3781L9.20291 16.5301C9.57792 16.8794 10.1863 16.8781 10.5597 16.5273L18.1838 9.36338C18.556 9.01367 18.5533 8.44918 18.1778 8.10257C17.8023 7.75595 17.1962 7.75846 16.824 8.10817L9.87678 14.6361L7.17224 12.1173Z"
        fill={fill ?? 'none'}
      />
    </svg>
  );
};
