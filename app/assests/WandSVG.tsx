const WandSVG = ({ classValues }: { classValues?: string }) => {
  return (
    <div className={classValues}>
      <svg
        fill="#000000"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M27.11,6.32,25.7,4.91a3.06,3.06,0,0,0-4.24,0L5.9,20.46a3,3,0,0,0,0,4.24l1.42,1.42a3,3,0,0,0,4.24,0L27.11,10.56A3,3,0,0,0,27.11,6.32ZM25.7,9.15l-3.53,3.53h0L19.34,9.86h0l3.53-3.53a1,1,0,0,1,1.42,0L25.7,7.73A1,1,0,0,1,25.7,9.15Z" />
        </g>
      </svg>
    </div>
  );
};

export default WandSVG;
