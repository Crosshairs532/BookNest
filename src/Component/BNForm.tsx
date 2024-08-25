import { Form, Layout } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loginState, setUser } from "../redux/features/auth/authSlice";

const BNForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm();
  const [login] = useLoginMutation();
  const selector = useAppSelector(loginState);
  const dispatch = useAppDispatch();
  console.log(selector, "selector");
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const loginInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const id = toast.loading("Loggin..");
      const res = await login(loginInfo).unwrap();
      const userInfo = {
        current_user: res.data,
        token: res.token,
      };

      toast.success("Login Success", {
        id,
        duration: 2000,
        cancel: {
          label: "Cancel",
        },
      });

      dispatch(setUser(userInfo));
    } catch (err) {
      toast.error(`${err?.message}`);
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
