import React from 'react';

const Empty: React.FC = props => (
  <svg
    width="46.25775px"
    height="46.36575px"
    viewBox="0 0 46.25775 46.36575"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-801.05, -274.05)">
        <g transform="translate(796, 270)">
          <g transform="translate(1, 0)">
            <rect x="0" y="0" width="54" height="54"></rect>
            <g transform="translate(4.05, 4.05)" fillRule="nonzero">
              <rect
                fill="#E6E6E6"
                x="5.3055"
                y="0"
                width="35.79525"
                height="28.134"
                rx="2.72025"
              ></rect>
              <rect
                fill="#F8F8F8"
                x="11.04975"
                y="5.0625"
                width="24.1515"
                height="1.593"
                rx="0.7965"
              ></rect>
              <rect
                fill="#F8F8F8"
                x="11.04975"
                y="10.60425"
                width="16.08525"
                height="1.593"
                rx="0.7965"
              ></rect>
              <path
                d="M43.53075,46.36575 L2.72025,46.36575 C1.22175,46.36575 0,45.15075 0,43.6455 L0,20.277 C0,18.7785 1.215,17.55675 2.72025,17.55675 L18.576,17.55675 C19.494,17.55675 20.3445,18.01575 20.85075,18.78525 L22.32225,21.0195 C22.82175,21.78225 23.679,22.248 24.597,22.248 L43.5375,22.248 C45.036,22.248 46.25775,23.463 46.25775,24.96825 L46.25775,43.6455 C46.25775,45.144 45.04275,46.36575 43.5375,46.36575 L43.53075,46.36575 Z"
                fill="#F8F8F8"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = 'SimpleImage';
}

export default Empty;
