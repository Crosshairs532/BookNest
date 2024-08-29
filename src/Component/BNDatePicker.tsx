import type { DatePickerProps } from "antd";
import { DatePicker, Form } from "antd";
import { useEffect } from "react";
import { Controller, useForm, useFormContext, useWatch } from "react-hook-form";
const BNDatePicker = ({ name, label, setDisable }) => {
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
      name={name}
      control={control}
      render={({ field }) => (
        <Form.Item layout="vertical" htmlFor={name} label={label}>
          <DatePicker {...field} onChange={field.onChange} />
        </Form.Item>
      )}
    />
  );
};
export default BNDatePicker;
