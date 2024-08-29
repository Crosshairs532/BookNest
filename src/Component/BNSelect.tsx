import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const BNSelect = ({ name, label, options }) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item layout="vertical" htmlFor={name} label={label}>
          <Select
            mode="multiple"
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
