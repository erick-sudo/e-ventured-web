"use client";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SelectionAccordionProps<T> {
  required?: boolean;
  placeholder?: string;
  onChange: (option: T) => void;
  options: T[];
  value: T;
  summary: (option: T) => string | number | readonly string[] | undefined;
  optionValue: (
    option: T
  ) => string | number | readonly string[] | JSX.Element | undefined;
  className?: string;
  optionClassName?: string;
  optionsContainerClassName?: string;
  summaryClassName?: string;
}

export function SelectionAccordion<T>(
  props: SelectionAccordionProps<T>
): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (option: T) => {
    props.onChange(option);
    setExpanded(false);
  };

  return (
    <Accordion
      className={`${props.className}`}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={`${props.summaryClassName}`}>
          {props.summary(props.value) || props.placeholder}
        </div>
        <input
          type="hidden"
          placeholder={props.placeholder}
          style={{ width: "100%", outline: "none" }}
          required={props.required}
          defaultValue={props.summary(props.value)}
        />
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0 }}>
        <div
          onMouseLeave={() => setExpanded(false)}
          className={`${props.optionsContainerClassName}`}
          style={{
            zIndex: 10,
            left: 0,
            right: 0,
          }}
        >
          {props.options.map((option, idx) => (
            <div
              onClick={() => {
                handleChange(option);
              }}
              key={idx}
              className={`${props.optionClassName}`}
            >
              {props.optionValue(option)}
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
