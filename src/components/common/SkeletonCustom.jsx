import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SkeletonCustom({ width, height }) {
  return (
    <>
      <div style={{ width: width }}>
        <Skeleton height={height} />
      </div>
    </>
  );
}
