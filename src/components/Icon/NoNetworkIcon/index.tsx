import React from 'react';

import { Svg, Path } from 'react-native-svg';

export const NoNetworkIcon = ({ width = 140, height = 140, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 140 140"
      fill="none"
      {...props}>
      <Path
        d="M29.1665 73.2083C40.6965 63.6047 55.2275 58.3457 70.2332 58.3457C85.2388 58.3457 99.7699 63.6047 111.3 73.2083"
        stroke="#E0E0E0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.2832 52.5C25.3307 37.4731 47.2749 29.1821 69.9999 29.1821C92.7248 29.1821 114.669 37.4731 131.717 52.5"
        stroke="#E0E0E0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M49.7583 93.975C55.6803 89.7677 62.7647 87.5073 70.0291 87.5073C77.2935 87.5073 84.378 89.7677 90.3 93.975"
        stroke="#E0E0E0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M72.7929 108.293C73.1834 107.902 73.8166 107.902 74.2071 108.293C74.5976 108.683 74.5976 109.317 74.2071 109.707L70.9142 113L74.2071 116.293C74.5976 116.683 74.5976 117.317 74.2071 117.707C73.8166 118.098 73.1834 118.098 72.7929 117.707L69.5 114.414L66.2071 117.707C65.8166 118.098 65.1834 118.098 64.7929 117.707C64.4024 117.317 64.4024 116.683 64.7929 116.293L68.0858 113L64.7929 109.707C64.4024 109.317 64.4024 108.683 64.7929 108.293C65.1834 107.902 65.8166 107.902 66.2071 108.293L69.5 111.586L72.7929 108.293Z"
        fill="#E0E0E0"
      />
    </Svg>
  );
};
