import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function SimpleBackdrop({ openLoader }) {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
export { SimpleBackdrop };
