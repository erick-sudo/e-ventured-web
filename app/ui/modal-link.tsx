"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { LinkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  children?: ReactNode;
  icon?: JSX.Element;
  onInit?: () => void;
  hostResourceCleaner?: () => void;
  fullscreen?: string;
  submitButtonClassName?: string;
  cancelButtonClassName?: string;
  cancelText?: string;
  anchorClassName?: string;
  submitText?: string;
  description?: string;
  anchorText?: string;
  disabled?: boolean;
  submitData?: () => void;
}

export function ModalLink({
  children,
  icon = <LinkIcon />,
  onInit = () => {},
  hostResourceCleaner = () => {},
  fullscreen = "",
  submitButtonClassName = "bg-lime-700 text-white rounded hover:bg-lime-500 line-shadow",
  cancelButtonClassName = "border-2 border-red-700 rounded text-red-700 hover:bg-red-700 hover:text-white",
  cancelText = "Close",
  anchorClassName = "flex gap-2 items-center line-shadow rounded px-4 py-2 text-[#fff] bg-lime-700 hover:bg-white hover:text-lime-700 duration-200",
  submitText = "Submit",
  description = "Description",
  anchorText = "",
  disabled = true,
  submitData = () => {},
}: ModalProps) {
  const [show, setShow] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const handleClose = () => {
    hostResourceCleaner();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <button
        type="button"
        onClick={() => {
          handleShow();
          onInit();
        }}
        className={`${anchorClassName}`}
      >
        {icon}
        <span>{anchorText}</span>
      </button>
      {isClient && (
        <Modal
          style={{ backgroundColor: "rgba(255, 255, 255, .8)", border: "none" }}
          fullscreen={fullscreen}
          centered
          contentClassName="border-0 rounded-0"
          className=""
          size="lg"
          backdrop="static"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="border-0 py-1 px-4 flex justify-between">
            <span className="">{description}</span>
            <button
              className="hover:text-lime-800 duration-300"
              style={{}} // Set the color to black
              onClick={handleClose}
            >
              <span>
                <FontAwesomeIcon icon={faClose} />
              </span>
            </button>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div>
              <div className="relative text-sm">{children}</div>
              <div className="flex justify-end gap-2 p-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className={`px-4 duration-300 ${cancelButtonClassName}`}
                >
                  {cancelText}
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    submitData();
                    handleClose();
                  }}
                  disabled={disabled}
                  className={`px-4 duration-300 ${submitButtonClassName} disabled:cursor-not-allowed`}
                >
                  {submitText}
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
