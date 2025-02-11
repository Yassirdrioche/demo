import CircularProgress from "@mui/material/CircularProgress";

export default function CircularUnderLoad() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <CircularProgress disableShrink />
      </div>
    </>
  );
}
