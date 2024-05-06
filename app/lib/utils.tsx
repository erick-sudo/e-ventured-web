import dayjs from "dayjs";

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "KSH",
  });
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

export function snakeCaseToTitleCase(inputString: string) {
  return inputString
    .split("_")
    .map((c, i) => capitalize(c))
    .join(" ");
}

export function todaysDate() {
  return dayjs(new Date()).format("YYYY-MM-DD")
}

export function joinArrays(inputString: string, delimiter: string, highLightClassName?: string) {
  const result = [];

  const spanner = (str: string, idx: number) => <span key={idx}>{str}</span>;

  const highlight = (str: string, idx: number) => (
    <b key={idx} className={`${highLightClassName}`}>
      {str}
    </b>
  );

  if (!delimiter || !inputString) {
    return [inputString];
  }

  let match = inputString.match(new RegExp(delimiter, "i"));

  if (match) {
    if (!inputString.match(new RegExp(delimiter, "i"))![0]) {
      return [inputString];
    }
  } else {
    return [inputString];
  }

  let prev = 0;
  let index = 0;

  if (inputString.slice(prev, match.index)) {
    index += 1;
    result.push(spanner(inputString.slice(prev, match.index), index));
  }

  do {
    if (match) {
      index += 1;
      result.push(highlight(match[0], index));
    }

    prev += match.index! + match[0].length;

    match = inputString.slice(prev).match(new RegExp(delimiter, "i"));

    if (match) {
      index += 1;
      result.push(spanner(inputString.slice(prev, prev + match.index!), index));
    }
  } while (match);

  if (inputString.slice(prev)) {
    index += 1;
    result.push(spanner(inputString.slice(prev), index));
  }

  return result;
}
