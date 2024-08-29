import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const BNSelect = ({ name, label, options, mode }) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item htmlFor={name} label={label}>
          <Select
            mode={mode}
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={field.onChange}
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default BNSelect;
