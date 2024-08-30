import { DatePicker, Form } from "antd";
import moment from "moment";
import { Controller } from "react-hook-form";

const BNDatePicker2 = ({ name, label, defaultValue }) => {
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
