import { Form, Layout } from "antd";
import { FormProvider, useForm } from "react-hook-form";

const BNForm = ({ children }) => {
  const methods = useForm();

  const onsubmit = (data) => {
    console.log(data);
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
