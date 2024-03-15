"use client";

import { useFormState } from "react-dom";
import { ModalLink } from "../modal-link";
import { approveLoan } from "@/app/lib/actions";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function LoanApprovalModal() {
  const [state, dispatch] = useFormState(approveLoan, {
    message: null,
    success: false,
  });

  return (
    <div>
      {/* <ModalLink anchorClassName="flex items-center gap-2 hover:text-lime-600 duration-300 px-4 py-2" anchorText="Approve" icon={<CheckCircleIcon height={12} />}></ModalLink> */}
      
    </div>
  );
}
