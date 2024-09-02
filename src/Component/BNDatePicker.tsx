import type { DatePickerProps } from "antd";
import { DatePicker, Form } from "antd";
import { useEffect } from "react";
import { Controller, useForm, useFormContext, useWatch } from "react-hook-form";

type TDatePicker = {
  name: string;
  label: string;
  layout?: string;
  setDisable?: () => void;
};

const BNDatePicker = ({ layout, name, label, setDisable }: TDatePicker) => {
  const { control } = useFormContext();
  const inputval = useWatch({
    control,
    name,
  });

  useEffect(() => {
    setDisable(inputval);
  }, [inputval]);

  return (
    <Controller
      rules={{ required: "This field is Required" }}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Item layout={layout} htmlFor={name} label={label}>
          <DatePicker
            style={{ width: "100%" }}
            {...field}
            onChange={field.onChange}
          />
          {error && <span className=" text-red-500">{error?.message}</span>}
        </Form.Item>
      )}
    />
  );
};
export default BNDatePicker;
