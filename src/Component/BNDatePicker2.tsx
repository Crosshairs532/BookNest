/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const BNDatePicker2 = ({
  name,
  label,
  defaultValue,
  layout,
}: {
  name: any;
  label: any;
  defaultValue: any;
  layout?: any;
}) => {
  console.log(layout, defaultValue);
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        rules={{ required: "This field is required" }}
        name={name}
        // defaultValue={defaultValue ? moment(defaultValue) : undefined}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} style={{ width: "100%" }} size="large" />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BNDatePicker2;
