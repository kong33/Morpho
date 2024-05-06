function CloseButton({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_762)">
        <path
          d="M18.2997 5.71022C17.9097 5.32022 17.2797 5.32022 16.8897 5.71022L11.9997 10.5902L7.10973 5.70021C6.71973 5.31021 6.08973 5.31021 5.69973 5.70021C5.30973 6.09021 5.30973 6.72022 5.69973 7.11022L10.5897 12.0002L5.69973 16.8902C5.30973 17.2802 5.30973 17.9102 5.69973 18.3002C6.08973 18.6902 6.71973 18.6902 7.10973 18.3002L11.9997 13.4102L16.8897 18.3002C17.2797 18.6902 17.9097 18.6902 18.2997 18.3002C18.6897 17.9102 18.6897 17.2802 18.2997 16.8902L13.4097 12.0002L18.2997 7.11022C18.6797 6.73022 18.6797 6.09022 18.2997 5.71022Z"
          fill="#111322"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_762">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CloseButton;
