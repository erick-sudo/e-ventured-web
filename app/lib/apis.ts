const baseUrl: string = "http://localhost:8080";

export const apis = {
  loans: {
    count: `${baseUrl}/loans/stats/count`,
    tallyByStatus: `${baseUrl}/loans/stats/status/tally`,
    countByStatus: `${baseUrl}/loans/by/<:loanStatus>/count`,
    loansByStatus: `${baseUrl}/loans/by/<:loanStatus>/<:pageNumber>/<:pageSize>`,
    loansPagination: `${baseUrl}/loans/pagination/<:pageNumber>/<:pageSize>`,
    getLoanById: `${baseUrl}/loans/<:loanId>`,
    getLoanInfo: `${baseUrl}/loans/loan-info/<:loanId>`,
    createSingleLoan: `${baseUrl}/loans/C/M`,
    createMultipleLoans: `${baseUrl}/loans/C/S`,
    loanRepayments: `${baseUrl}/loans/<:loanId>/collections/<:pageNumber>/<:pageSize>`,
    updateLoan: `${baseUrl}/loans/<:loanId>`,
    deleteLoan: `${baseUrl}/loans/<:loanId>`,
    approveLoan: `${baseUrl}/loans/<:loanId>`,
  },
  repayments: {
    countLoanRepayments: `${baseUrl}/loans/collections/<:loanId>/count`,
  },
  clients: {
    elasticSearch: `${baseUrl}/clients/elastic/search`,
  },
  loanOfficers: {
    elasticSearch: `${baseUrl}/loan-officers/elastic/search`,
  },
  vaults: {
    elasticSearch: `${baseUrl}/vaults/elastic/search`,
  },
};

export async function getRequest({
  endpoint,
  errorCallback,
  successCallback,
}: {
  endpoint: string;
  successCallback: (message: any) => void;
  errorCallback: (level: number, error: any) => void;
}) {
  await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        successCallback(response.body);
      } else {
        errorCallback(-1, response.body);
      }
    })
    .catch((error) => {
      errorCallback(0, error);
    });
}

export async function postRequest({
  endpoint,
  method,
  payload,
  errorCallback,
  successCallback,
}: {
  endpoint: string;
  method: "POST" | "PUT" | "PATCH" | "DELETE";
  payload: any;
  successCallback: (message: any) => void;
  errorCallback: (level: number, error: any) => void;
}) {
  await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        successCallback(response.body);
      } else {
        errorCallback(-1, response.body);
      }
    })
    .catch((error) => {
      errorCallback(0, error);
    });
}
