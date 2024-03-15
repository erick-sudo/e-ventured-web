"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { ModalLink } from "../modal-link";

export function CreateLoan() {
  return (
    <ModalLink
      icon={<PlusIcon className="h-5" />}
      anchorText="Open Loan"
    ></ModalLink>
  );
}
