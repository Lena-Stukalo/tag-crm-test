import { FormSelect } from "./form.styled";

export const MultiSelect = ({ name, options, onChange, value }) => (
  <FormSelect
    value={value}
    isMulti
    name={name}
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={(selected) => {
      onChange(name, selected.value);
    }}
  />
);
