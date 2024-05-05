"use client";

import { EButton } from "@/app/ui/loans/buttons";
import { TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import { LoanDto, LoanOut } from "@/app/lib/definitions";
import { snakeCaseToTitleCase } from "@/app/lib/utils";

const initialFormData: LoanDto = {
  id: "",
  status: "Pending",
  amount: 0,
  repayment_interval: "DAYS",
  repayment_duration: 1,
  first_repayment_date: new Date().toDateString().toString(),
  interest_rate: 0.1,
  type_of_interest: "SIMPLE",
  client_id: "",
  loan_officer_id: "",
  vault_id: "",
};

function Page() {
  const { snackNotifier } = useContext(AppContext);
  const [loan, setLoan] = useState<LoanDto>();

  return (
    <div>
      <Typography variant="h5" component="div" className="px-4">
        Open Loan
      </Typography>

      <form className="grid gap-4 grid-cols-2 p-4">
        {[
          "amount",
          "repayment_interval",
          "repayment_duration",
          "first_repayment_date",
          "interest_rate",
          "type_of_interest",
          "client",
          "loan_officer",
          "vault_id",
        ].map((field, idx) => (
          <input
            className="border-1 border-black outline-1 outline-indigo-700 px-4 py-1 "
            name={field}
            type="text"
            value=""
            onChange={() => {}}
          />
        ))}
        <EButton type="submit">
          <span>Submit</span>
        </EButton>
      </form>
    </div>
  );
}

export default Page;
