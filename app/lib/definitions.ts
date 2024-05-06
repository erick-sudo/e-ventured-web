export type EndpointCount = {
  count: number;
};

export type LoanDto = {
  id: string;
  status: string;
  amount: number;
  repayment_interval: string;
  repayment_duration: number;
  first_repayment_date: string;
  interest_rate: number;
  type_of_interest: string;
  client_id: string;
  loan_officer_id: string;
  vault_id: string;
};

export type LoanOut = {
  id: string;
  status: string;
  amount: number;
  repayment_interval: string;
  repayment_duration: number;
  first_repayment_date: string;
  interest_rate: number;
  type_of_interest: string;
  client: ClientDto;
  loan_officer: LoanOfficerDto;
  vault: VaultDto;
};

export type LoanInfo = {

}

export type FullLoanOut = {
  loan: LoanOut,
  info: LoanInfo
}

export type ClientDto = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type LoanOfficerDto = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type VaultDto = {
  id: string;
  name: string;
};

export interface ValidationErrorsContainer<T> {
  violations: T;
}

export type State = {
  message?: string | null;
  success: boolean;
};

export interface FormField {
  name: string;
  placeHolder: string;
  required: boolean;
}

export interface FormInputField extends FormField {
  as:
    | "text"
    | "number"
    | "email"
    | "file"
    | "search"
    | "tel"
    | "url"
    | "range"
    | "datetime-local"
    | "month"
    | "time"
    | "week"
    | "date"
    | "color"
    | "button"
    | "submit"
    | "checkbox"
    | "radio"
    | "hidden"
    | "image"
    | "password"
    | "reset";
}

export interface RangeableInputField extends FormInputField {
  as: "number" | "range" | "date" | "month" | "time" | "week";
  min: string;
  max: string;
  step: number;
}

export interface FormSelectionField extends FormField {
  options: {label?: string, value: string | number | readonly string[]}[];
}

export interface TextAreaField extends FormField {
  rows?: number;
}
