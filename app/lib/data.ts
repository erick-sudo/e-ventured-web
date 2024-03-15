import { apis } from "./apis";
import { EndpointCount, LoanOut } from "./definitions";

export async function fetchPageCount(size: number) {
  return await fetch(apis.loans.count, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const count: EndpointCount = {
        count: Math.ceil(data.count / size),
      };
      return count;
    })
    .catch((e) => {
      throw Error(
        "Could not fetch loans info. Please check your connection and try again"
      );
    });
}

export async function fetchLoans(pageNumber: number, pageSize: number) {
  return await fetch(
    apis.loans.loansPagination
      .replace("<:pageNumber>", pageNumber + "")
      .replace("<:pageSize>", pageSize + ""),
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        return data.map((loan) => loan as LoanOut);
      }
      return [];
    })
    .catch((e) => {
      throw Error(
        "Could not fetch loans. Please check your connection and try again"
      );
    });
}
