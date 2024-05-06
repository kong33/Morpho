function SearchBarIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_43_2)" />
      <defs>
        <pattern id="pattern0_43_2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_43_2" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_43_2"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
export default SearchBarIcon;
