import { apis } from "./apis";
import { State } from "./definitions";

export async function approveLoan(state: State, loanId: string) {
  return await fetch(apis.loans.approveLoan.replace("<:loanId>", loanId), {
    method: "GET",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const aprovalState: State = {
        message: "Loan approved successfully",
        success: true,
      };
      return aprovalState;
    })
    .catch((e) => {
      throw Error(
        "Could not fetch loans. Please check your connection and try again"
      );
    });
}
