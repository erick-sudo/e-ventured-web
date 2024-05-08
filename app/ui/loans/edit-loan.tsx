"use client";

import { LoanMiniStatement } from "@/app/lib/definitions";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { ClientView } from "../users/client-view";
import { LoanOfficerView } from "../users/loan-officer-view";
import { VaultView } from "../vault/vault-view";
import EVInput from "../ev-Input";
import { SelectionAccordion } from "../selection-accordion";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { EButton } from "./buttons";
import { PencilIcon, PrinterIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/app/lib/utils";

const EditLoanForm: React.FC<LoanMiniStatement> = ({ loan, info }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="p-4">
      <Typography variant="h5">Loan Details</Typography>
      <div className="grid gap-3 py-4">
        <div className=" px-4 py-2 bg-white shadow duration-300 cursor-pointer">
          <div className="">Loanee</div>
          <ClientView className="grid grid-cols-3" client={loan.client} />
        </div>
        <div className=" px-4 py-2 bg-white shadow duration-300 cursor-pointer">
          <div className="">Loan Officer</div>
          <LoanOfficerView
            className="grid grid-cols-3"
            loanOfficer={loan.loan_officer}
          />
        </div>
        <div className=" px-4 py-2 bg-white shadow duration-300 cursor-pointer">
          <div className="">Vault</div>
          <VaultView vault={loan.vault} />
        </div>
      </div>
      <div className="px-2 py-4 border-2">
        <div className="flex justify-between py-4">
          <div className="text-lg font-semibold mb-4">Modify Loan Fields</div>
          <EButton
            onClick={() => setEditing(!editing)}
            disabled={editing}
            className="px-4 py-2 flex items-center gap-2 disabled:bg-gray-500 disabled:opacity-50 disabled:hover:text-white disabled:cursor-not-allowed"
          >
            <PencilIcon height={20} />
            <span>Edit</span>
          </EButton>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <EVInput
            disabled={!editing}
            label="Amount"
            className="flex flex-col"
            name="amount"
            type="number"
            value={loan.amount}
            onChange={(v: string) => {}}
          />

          <div className="grid">
            <label>Repayment Interval</label>
            <SelectionAccordion<string>
              disabled={!editing}
              placeholder=""
              value={"Daily"}
              onChange={(n) => {}}
              options={["Daily", "Weekly", "Monthly"]}
              summary={(n) => n}
              optionValue={(n) => n}
              className=""
              summaryClassName="w-full"
              optionsContainerClassName="bg-white  pb-4 px-2 grid shadow-md shadow-indigo-600"
              optionClassName="hover:bg-indigo-600 cursor-pointer px-4 py-2 hover:text-white border-b-2"
            />
          </div>

          <EVInput
            disabled={!editing}
            label="Repayment Duration"
            className="grid"
            name="repayment_duration"
            type="number"
            value={loan.repayment_duration}
            onChange={(v: string) => {}}
          />

          <EVInput
            disabled={!editing}
            label="Interest Rate"
            className="grid"
            name="interest_rate"
            type="number"
            value={loan.amount}
            onChange={(v: string) => {}}
          />

          <div className="grid">
            <label>First Repayment Date</label>
            <DatePicker
              disabled={!editing}
              sx={{
                width: "100%",
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  "&:hover > fieldset": { borderColor: "#4f46e5" },
                  "&.Mui-focused fieldset": { borderColor: "#4f46e5" },
                  height: "48px",
                  borderRadius: "0px",
                },
              }}
              onChange={(newDate) => {}}
              value={dayjs(loan.first_repayment_date)}
            />
          </div>

          <div className="flex xl:grid xl:grid-cols-3 items-end gap-2 xl:col-span-3">
            <div className="hidden xl:block"></div>
            <EButton
              disabled={!editing}
              onClick={() => setEditing(false)}
              className=" disabled:bg-gray-500 disabled:opacity-50 disabled:hover:text-white disabled:cursor-not-allowed flex-grow px-4 py-2 bg-indigo-400"
            >
              Cancel
            </EButton>
            <EButton
              disabled={!editing}
              className=" disabled:bg-gray-500 disabled:opacity-50 disabled:hover:text-white disabled:cursor-not-allowed flex-grow px-4 py-2"
            >
              Save Changes
            </EButton>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="bg-white shadow p-6">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-4">Loan Information</h2>
            <EButton className="px-4 py-2 flex items-center gap-2">
              <PrinterIcon height={20} />
              <span>Print</span>
            </EButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="">
              <p className="font-medium">Loan Period:</p>
              <p>{info.loan_period}</p>
            </div>
            <div className="">
              <p className="font-medium">Installment Pattern:</p>
              <p>{info.installment_pattern}</p>
            </div>
            <div className="">
              <p className="font-medium">Expected Amount to Date:</p>
              <p>{formatCurrency(info.expected_amount_to_date)}</p>
            </div>
            <div className="">
              <p className="font-medium">Calculated Amount to Date:</p>
              <p>{formatCurrency(info.calculated_amount_to_date)}</p>
            </div>
            <div className="">
              <p className="font-medium">Elapsed Periods:</p>
              <p>{info.elapsed_periods}</p>
            </div>
            <div className="">
              <p className="font-medium">Current Period:</p>
              <p>{info.current_period}</p>
            </div>
            <div className="">
              <p className="font-medium">Elapsed Days:</p>
              <p>{info.elapsed_days}</p>
            </div>
            <div className="">
              <p className="font-medium">Collected Amount:</p>
              <p>{formatCurrency(info.collected_amount)}</p>
            </div>
            <div className="">
              <p className="font-medium">Defaulted:</p>
              <p>{info.defaulted ? "Yes" : "No"}</p>
            </div>
            <div className="">
              <p className="font-medium">Fine:</p>
              <p>{formatCurrency(info.fine)}</p>
            </div>
            <div className="">
              <p className="font-medium">Balance:</p>
              <p>{formatCurrency(info.balance)}</p>
            </div>
            <div className="">
              <p className="font-medium">Total:</p>
              <p>{formatCurrency(info.total)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLoanForm;
