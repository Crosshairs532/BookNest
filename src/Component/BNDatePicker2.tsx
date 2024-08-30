import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const BNDatePicker2 = ({ name, label }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} style={{ width: "100%" }} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BNDatePicker2;
