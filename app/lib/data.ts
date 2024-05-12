import { apis } from "./apis";
import {
  ClientDto,
  EndpointCount,
  LoanCollectionOut,
  LoanMiniStatement,
  LoanOut,
} from "./definitions";
import axios from "axios";

export async function countEntities(endpoint: string): Promise<EndpointCount> {
  return await axios
    .get(endpoint)
    .then((response) => response.data)
    .catch((axiosError) => {
      throw Error(axiosError.message);
    });
}

export async function fetchPage<T>(
  endpoint: string,
  description: string
): Promise<Array<T>> {
  return await axios
    .get(endpoint)
    .then((response) => response.data)
    .catch((e) => {
      throw Error(
        `An error occured while ${description}. Please check your connection and try again`
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
