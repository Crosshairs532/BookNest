import { Form, Layout } from "antd";
import { ReactNode } from "react";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useLocation } from "react-router-dom";

const BNForm = ({
  children,
  onSubmit,
  defaultValue,
}: {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  defaultValue?: FieldValues;
}) => {
  let defaultValues = {};
  if (defaultValue) {
    defaultValues = { ...defaultValues, ...defaultValue };
  }

  const methods = useForm(defaultValues);
  const location = useLocation();
  console.log(defaultValue);
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    onSubmit(data);
    if (!(location.pathname === "/meeting-rooms")) {
      methods.reset();
    }
  };
  return (
    <FormProvider {...methods}>
      <Form
        onFinish={methods.handleSubmit(onsubmit)}
        labelCol={{ span: 8 }}
        {...Layout}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default BNForm;
