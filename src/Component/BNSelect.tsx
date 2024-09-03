import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const BNSelect = ({ name, label, options, mode }: any) => {
  return (
    <Controller
      name={name}
      rules={{ required: "This field is required" }}
      render={({ field, fieldState: { error } }) => (
        <Form.Item htmlFor={name} label={label}>
          <Select
            mode={mode}
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={field.onChange}
            options={options}
          />
          {error && <span style={{ color: "red" }}>{error.message}</span>}
        </Form.Item>
      )}
    />
  );
};

export default BNSelect;
