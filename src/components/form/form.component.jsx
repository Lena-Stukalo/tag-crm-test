import { useFormik } from "formik";
import {
  FormStyled,
  FormInput,
  Label,
  Title,
  FormWrapper,
  Text,
} from "./form.styled";
import { SecondaryButton } from "../../utils/utils-components.styled";
import { MultiSelect } from "./multi-select.component";
import { adresses } from "./adresses";
import { useMemo } from "react";
import { CssButton } from "../../utils/css-button.component";
export const FormComponent = ({ onSubmit, number }) => {
  const isPrimary = useMemo(() => Math.random() < 0.1 * number, [number]);
  const handeleSubmit = (values) => {
    console.log(values);
    onSubmit(values);
  };
  let formValues = {
    name: "",
    email: "",
    phone: "",
    adresses: [],
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Title>My form </Title>
      <Label htmlFor="name">
        <Text>Name</Text>
        <FormInput
          type="text"
          name="name"
          id="name"
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Label>
      <Label htmlFor="email">
        <Text>Email</Text>
        <FormInput
          type="text"
          name="email"
          id="email"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Label>
      <Label htmlFor="phone">
        <Text>Phone</Text>
        <FormInput
          type="text"
          name="phone"
          id="phone"
          required
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </Label>
      <Label htmlFor="adresses">
        <Text>Adress</Text>
        <MultiSelect
          options={adresses}
          name={"adresses"}
          value={formik.values.adresses}
          onChange={formik.setFieldValue}
        ></MultiSelect>
      </Label>

      <FormWrapper>
        <CssButton type="submit" text="Send" isPrimary={isPrimary}></CssButton>
        <SecondaryButton
          type="reset"
          onClick={() => {
            formik.resetForm();
          }}
          isSecondary
        >
          Reset
        </SecondaryButton>
      </FormWrapper>
    </FormStyled>
  );
};
