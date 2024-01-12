const FilledStar = ({ classValues }: { classValues?: string }) => {
  return (
    <div className={classValues}>
      <svg
        fill="#000000"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.5,9.757l-5.278,4.354L17.871,21.5,12,17.278,6.129,21.5l1.649-7.389L2.5,9.757l6.333-.924L12,2.5l3.167,6.333Z" />
      </svg>
    </div>
  );
};

export default FilledStar;
