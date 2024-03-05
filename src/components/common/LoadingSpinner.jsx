export default function LoadingSpinner() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-info"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
