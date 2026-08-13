import React from 'react';

const DefaultEmptyImg: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="8.58383"
      y="2.3999"
      width="30.9708"
      height="26.2146"
      rx="3.62094"
      fill="white"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      d="M13.9765 7.61017H34.6419"
      stroke="currentColor"
      strokeWidth="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9765 12.9987H27.454"
      stroke="currentColor"
      strokeWidth="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.6631 45.5996H6.35306C5.05653 45.5996 3.99945 44.4675 3.99945 43.065V21.2908C3.99945 19.8945 5.05069 18.7561 6.35306 18.7561H20.0718C20.866 18.7561 21.6019 19.1838 22.0399 19.9008L23.3131 21.9826C23.7453 22.6933 24.487 23.1273 25.2813 23.1273H41.669C42.9655 23.1273 44.0226 24.2594 44.0226 25.662V43.065C44.0226 44.4612 42.9713 45.5996 41.669 45.5996H41.6631Z"
      fill="white"
      stroke="currentColor"
      strokeWidth="0.3"
    />
  </svg>
);

if (process.env.NODE_ENV !== 'production') {
  DefaultEmptyImg.displayName = 'DefaultEmptyImg';
}

export default DefaultEmptyImg;
