import { Form, Layout } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const BNFromWatch = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const methods = useForm();

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
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

export default BNFromWatch;
