"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";

export default function SpringModal({
  anchorClassName,
  anchorContent,
  className,
  children,
}: {
  anchorClassName?: string;
  className?: string;
  anchorContent?: string | React.ReactElement;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button type="button" className={anchorClassName} onClick={handleOpen}>
        {anchorContent}
      </button>
      <Modal
        sx={{
          backdropFilter: "blur(4px)",
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <div className={`${className}`}>{children}</div>
      </Modal>
    </>
  );
}
