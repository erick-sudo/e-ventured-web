"use client";

import { EButton } from "@/app/ui/loans/buttons";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import {
  ClientDto,
  LoanDto,
  LoanOfficerDto,
  LoanOut,
  VaultDto,
} from "@/app/lib/definitions";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { snakeCaseToTitleCase, todaysDate } from "@/app/lib/utils";
import { SelectionAccordion } from "@/app/ui/selection-accordion";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { LazySearch } from "@/app/ui/lazy-search";
import { apis } from "@/app/lib/apis";
import dayjs from "dayjs";
import {
  EnvelopeOpenIcon,
  PhoneArrowDownLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

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

interface FlatLoanProps {
  amount: number;
  repayment_duration: number;
  interest_rate: number;
  first_repayment_date: string;
  [key: string]: number | string;
}

function Page() {
  const { snackNotifier } = useContext(AppContext);
  const [flatLoanProps, setFlatLoanProps] = useState<FlatLoanProps>({
    amount: 0,
    repayment_duration: 1,
    interest_rate: 0.1,
    first_repayment_date: todaysDate(),
  });
  const [client, setClient] = useState<ClientDto>();
  const [loanOfficer, setLoanOfficer] = useState<LoanOfficerDto>();
  const [vault, setVault] = useState<VaultDto>();

  return (
    <div className="p-4">
      <Typography variant="h5" component="div" className="px-4">
        Open Loan
      </Typography>

      <form className="grid gap-4 p-4 max-w-3xl lg:max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <div className="group grid">
              <label>Amount</label>
              <input
                className="border-[1px] border-gray-400 outline-1 outline-indigo-700 px-4 py-2 "
                name="amount"
                type="number"
                value={flatLoanProps.amount}
                onChange={(e) => {
                  setFlatLoanProps({
                    ...flatLoanProps,
                    amount: parseFloat(e.target.value),
                  });
                }}
              />
            </div>

            <div className="group grid">
              <label>Repayment Interval</label>
              <SelectionAccordion<string>
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

            <div className="group grid">
              <label>Repayment Duration</label>
              <input
                className="border-[1px] border-gray-400 outline-1 outline-indigo-700 px-4 py-2 "
                name="repayment_duration"
                type="number"
                value={flatLoanProps.repayment_duration}
                onChange={(e) => {
                  setFlatLoanProps({
                    ...flatLoanProps,
                    repayment_duration: parseFloat(e.target.value),
                  });
                }}
              />
            </div>

            <div className="group grid">
              <label>Interest Rate</label>
              <input
                className="border-[1px] border-gray-400 outline-1 outline-indigo-700 px-4 py-2 "
                name="interest_rate"
                type="number"
                value={flatLoanProps.interest_rate}
                onChange={(e) => {
                  setFlatLoanProps({
                    ...flatLoanProps,
                    interest_rate: parseFloat(e.target.value),
                  });
                }}
              />
            </div>

            <div className="group grid">
              <label>First Repayment Date</label>
              <DatePicker
                onChange={(newDate) =>
                  setFlatLoanProps({
                    ...flatLoanProps,
                    first_repayment_date:
                      newDate?.format("YYYY-MM-DD") || todaysDate(),
                  })
                }
                value={dayjs(flatLoanProps.first_repayment_date)}
              />
            </div>

            <div className="group grid">
              <label>Type Of Interest</label>
              <SelectionAccordion<string>
                placeholder=""
                value={"SIMPLE"}
                onChange={(n) => {}}
                options={["SIMPLE", "COMPOUND"]}
                summary={(n) => n}
                optionValue={(n) => n}
                className=""
                summaryClassName="w-full"
                optionsContainerClassName="bg-white  pb-4 px-2 grid shadow-md shadow-indigo-600"
                optionClassName="hover:bg-indigo-600 cursor-pointer px-4 py-2 hover:text-white border-b-2"
              />
            </div>
          </div>
          <div className="">
            <Accordion expanded={true}>
              <AccordionSummary>
                <div className="grid w-full">
                  <label>Client</label>
                  <LazySearch<ClientDto>
                    zIndex={6}
                    placeholder="Search Clients..."
                    fieldNames={["name", "email", "phone"]}
                    endpoint={apis.clients.elasticSearch}
                    receiveSelection={(selectedItem: ClientDto) => {
                      setClient(selectedItem);
                    }}
                    className="shadow shadow-indigo-700 bg-gray-100"
                    childHoverClassName="group bg-white hover:bg-indigo-700/20 hover:text-indigo-700 duration-300 border-indigo-600"
                    matchClassName="text-indigo-70 group-hover:text-black font-bolder underline duration-300"
                  />
                </div>
              </AccordionSummary>
              {client && (
                <AccordionDetails>
                  <div className="py-2 border-l-8 shadow bg-white border-indigo-600">
                    <div className="flex items-center gap-2 px-4">
                      <UserIcon height={20} className="text-gray-500" />
                      <span className="text-gray-70 font-bold">
                        {client.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <EnvelopeOpenIcon height={20} className="text-gray-500" />
                      <span className="text-gray-70 font-bold">
                        {client.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <PhoneArrowDownLeftIcon
                        height={20}
                        className="text-gray-500"
                      />
                      <span className="text-gray-70 font-bold">
                        {client.phone}
                      </span>
                    </div>
                  </div>
                </AccordionDetails>
              )}
            </Accordion>
            <Accordion expanded={true}>
              <AccordionSummary>
                <div className="grid w-full">
                  <label>Loan Officer</label>
                  <LazySearch<LoanOfficerDto>
                    zIndex={5}
                    placeholder="Search Loan Officers..."
                    fieldNames={["name", "email", "phone"]}
                    endpoint={apis.loanOfficers.elasticSearch}
                    receiveSelection={(selectedItem: LoanOfficerDto) => {
                      setLoanOfficer(selectedItem);
                    }}
                    className="shadow shadow-indigo-700 bg-gray-100"
                    childHoverClassName="group bg-white hover:bg-indigo-700/20 hover:text-indigo-700 duration-300 border-indigo-600"
                    matchClassName="text-indigo-700 group-hover:text-black font-bolder underline duration-300"
                  />
                </div>
              </AccordionSummary>
              {loanOfficer && (
                <AccordionDetails>
                  <div className="py-2 border-l-8 shadow bg-white border-indigo-600">
                    <div className="flex items-center gap-2 px-4">
                      <UserIcon height={20} className="text-gray-500" />
                      <span className="text-gray-70 font-bold">
                        {loanOfficer.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <EnvelopeOpenIcon height={20} className="text-gray-500" />
                      <span className="text-gray-70 font-bold">
                        {loanOfficer.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                      <PhoneArrowDownLeftIcon
                        height={20}
                        className="text-gray-500"
                      />
                      <span className="text-gray-70 font-bold">
                        {loanOfficer.phone}
                      </span>
                    </div>
                  </div>
                </AccordionDetails>
              )}
            </Accordion>
            <Accordion expanded={true}>
              <AccordionSummary>
                <div className="grid w-full">
                  <label>Search Vaults</label>
                  <LazySearch<LoanOfficerDto>
                    zIndex={4}
                    placeholder="Search Vaults..."
                    fieldNames={["name"]}
                    endpoint={apis.vaults.elasticSearch}
                    receiveSelection={(selectedItem: VaultDto) => {
                      setVault(selectedItem);
                    }}
                    className="shadow shadow-indigo-700 bg-gray-100"
                    childHoverClassName="group bg-white hover:bg-indigo-700/20 hover:text-indigo-700 duration-300 border-indigo-600"
                    matchClassName="text-indigo-700 group-hover:text-black font-bolder underline duration-300"
                  />
                </div>
              </AccordionSummary>
              {vault && (
                <AccordionDetails>
                  <div className="py-2 border-l-8 shadow bg-white border-indigo-600">
                    <div className="flex items-center gap-2 px-4">
                      <AccountBalanceIcon className="text-gray-500" />
                      <span className="text-gray-70 font-bold">
                        {vault.name}
                      </span>
                    </div>
                  </div>
                </AccordionDetails>
              )}
            </Accordion>
          </div>
        </div>

        <EButton className="py-2 lg:w-1/2 hover font-extrabold" type="submit">
          <span>Submit</span>
        </EButton>
      </form>
    </div>
  );
}

export default Page;
