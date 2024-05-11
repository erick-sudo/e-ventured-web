import { apis } from "./apis";
import {
  ClientDto,
  EndpointCount,
  LoanCollectionOut,
  LoanMiniStatement,
  LoanOut,
} from "./definitions";
import axios from "axios";

export async function fetchPageCount(size: number): Promise<EndpointCount> {
  return await axios
    .get(apis.loans.count)
    .then((response) => response.data)
    .catch((axiosError) => {
      throw Error(
        "Could not fetch loans info. Please check your connection and try again"
      );
    });
}

export async function fetchLoans(
  pageNumber: number,
  pageSize: number
): Promise<Array<LoanOut>> {
  return await axios
    .get(
      apis.loans.loansPagination
        .replace("<:pageNumber>", pageNumber + "")
        .replace("<:pageSize>", pageSize + "")
    )
    .then((response) => response.data)
    .catch((e) => {
      throw Error(
        "Could not fetch loans. Please check your connection and try again"
      );
    });
}

export async function fetchNumberOfRepayments(
  loanId: string
): Promise<EndpointCount> {
  return await axios
    .get(apis.repayments.countLoanRepayments.replace("<:loanId>", loanId))
    .then((response) => response.data)
    .catch((axiosError) => {
      if (axiosError?.response?.status === 404) {
        return null;
      } else {
        throw Error(
          "An error occurred while fetching this loan's number of repayments"
        );
      }
    });
}

export async function fetchLoanRepayments(
  loanId: string,
  page: number,
  size: number
): Promise<Array<LoanCollectionOut>> {
  return await axios
    .get(
      apis.loans.loanRepayments
        .replace("<:loanId>", loanId)
        .replace("<:pageNumber>", page + "")
        .replace("<:pageSize>", size + "")
    )
    .then((response) => {
      console.log(
        apis.loans.loanRepayments
          .replace("<:loanId>", loanId)
          .replace("<:pageNumber>", page + "")
          .replace("<:pageSize>", size + "")
      );
      return response.data;
    })
    .catch((axiosError) => {
      if (axiosError?.response?.status === 404) {
        return null;
      } else {
        throw Error("An error occurred while fetching this loan collections");
      }
    });
}

export async function fetchLoanMiniStatement(
  loanId: string
): Promise<LoanMiniStatement | null> {
  return await axios
    .get(apis.loans.getLoanInfo.replace("<:loanId>", loanId))
    .then((response) => response.data)
    .catch((axiosError) => {
      if (axiosError?.response?.status === 404) {
        return null;
      } else {
        throw Error("An error occurred while fetching loan");
      }
    });
}
