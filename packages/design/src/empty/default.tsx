import React from 'react';

const DefaultEmptyImg: React.FC = props => (
  <svg
    width="56px"
    height="56px"
    viewBox="0 0 56 56"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(4.2, 4.2)" fillRule="nonzero">
        <rect fill="#CDD5E4" x="5.495" y="0" width="37.121" height="29.176" rx="4.03"></rect>
        <rect fill="#F8F8F8" x="11.452" y="5.257" width="25.046" height="1.652" rx="0.826"></rect>
        <rect fill="#F8F8F8" x="11.452" y="10.997" width="16.681" height="1.652" rx="0.826"></rect>
        <path
          d="M45.143,48.083 L2.821,48.083 C1.267,48.083 0,46.823 0,45.262 L0,21.028 C0,19.474 1.26,18.207 2.821,18.207 L19.264,18.207 C20.216,18.207 21.098,18.683 21.623,19.481 L23.149,21.798 C23.667,22.589 24.556,23.072 25.508,23.072 L45.15,23.072 C46.704,23.072 47.971,24.332 47.971,25.893 L47.971,45.262 C47.971,46.816 46.711,48.083 45.15,48.083 L45.143,48.083 Z"
          fill="#F3F6FC"
        ></path>
      </g>
    </g>
  </svg>
);

if (process.env.NODE_ENV !== 'production') {
  DefaultEmptyImg.displayName = 'DefaultEmptyImg';
}

export default DefaultEmptyImg;
