import React from 'react';
import Icon from '@oceanbase/icons';
import type { CustomIconComponentProps } from '@oceanbase/icons/es/components/Icon';

const ErrorSvg = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_63440_9771)">
      <ellipse cx="81.0314" cy="89.9656" rx="5.51968" ry="2.20787" fill="#132039" />
      <ellipse cx="39.0815" cy="86.0993" rx="24.2866" ry="7.17558" fill="#132039" />
      <path
        d="M23.1878 26.7304C25.2695 24.4655 27.7954 22.5751 30.7921 21.652C33.2162 20.9045 37.7165 19.7834 40.1499 19.1679L40.2977 19.13L40.3326 19.2782L56.892 88.8261L56.9282 88.9791L56.7738 89.0084L47.0958 90.8245L47.0954 90.8236C43.0374 91.7002 38.702 90.8601 35.1866 89.0572C33.2899 88.0863 31.5713 87.011 29.9485 85.6338C26.5713 82.7689 23.8468 79.3782 21.6904 75.5302C17.7314 68.468 15.5446 60.5192 15.2014 52.3471C14.841 43.7643 16.9979 33.4653 23.1878 26.7304Z"
        fill="white"
        stroke="#132039"
        strokeWidth="0.3"
      />
      <ellipse
        cx="50.9449"
        cy="53.3756"
        rx="25.1296"
        ry="35.8995"
        transform="rotate(-12.1202 50.9449 53.3756)"
        fill="white"
        stroke="#132039"
        strokeWidth="0.3"
      />
      <ellipse
        cx="52.0534"
        cy="53.2802"
        rx="19.271"
        ry="27.53"
        transform="rotate(-12.1202 52.0534 53.2802)"
        fill="#619EF3"
        stroke="#132039"
        strokeWidth="0.3"
      />
      <ellipse
        cx="53.1653"
        cy="53.218"
        rx="13.6872"
        ry="19.5532"
        transform="rotate(-12.1202 53.1653 53.218)"
        fill="white"
        stroke="#132039"
        strokeWidth="0.3"
      />
      <ellipse
        cx="54.2482"
        cy="53.029"
        rx="7.50284"
        ry="10.7183"
        transform="rotate(-12.1202 54.2482 53.029)"
        fill="#619EF3"
        stroke="#132039"
        strokeWidth="0.3"
      />
      <path
        d="M83.803 88.6388L82.2193 88.1105L91.4805 58.9727L93.0627 59.5016L83.803 88.6388Z"
        fill="white"
        stroke="#132039"
        strokeWidth="0.3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M82.131 90.0032L81.0249 90.0032L80.3457 86.6914L85.8467 88.4549L83.7847 90.0032L82.131 90.0032Z"
        fill="white"
        stroke="#132039"
        strokeWidth="0.3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M91.2871 50.2207L94.188 53.5268L91.3358 62.3097L89.2324 57.368L91.2871 50.2207Z"
        fill="#619EF3"
        stroke="#132039"
        strokeWidth="0.3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M98.474 52.5358L94.1884 53.5176L91.3614 62.3086L95.9593 59.5328L98.474 52.5358Z"
        fill="#619EF3"
        stroke="#132039"
        strokeWidth="0.3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_63440_9771">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Error: React.FC = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ErrorSvg} {...props} />
);

if (process.env.NODE_ENV !== 'production') {
  Error.displayName = 'Error';
}

export default Error;
