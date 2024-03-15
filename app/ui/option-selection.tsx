import {} from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FormSelectionField } from "../lib/definitions";

export function OptionSelection({
  value,
  onChange,
  select,
}: {
  select: FormSelectionField;
  value?: string | number | readonly string[]
  onChange: (k: string, v: string) => void
}) {
  return (
    <InputGroup>
      <InputGroup.Text style={{ border: "none" }}>
        <span className="text-gray-700/75 font-bold">{select.placeHolder}</span>
      </InputGroup.Text>
      <Form.Select
        //style={{ border: "none", borderRadius: 0 }}
        value={value}
        onChange={(e) => {onChange(select.name, e.target.value)}}
        name={select.name}
      >
        <option value="">Select</option>
        {select.options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
}
