import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TinputProp = {
  name: string;
  label: string;
  type: string;
};

const BNInput = ({ type, label, name }: TinputProp) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Controller
        rules={{ required: true }}
        name={name}
        render={({ field, formState: { error } }) => (
          <Form.Item htmlFor={name} label={label} layout="vertical">
            <Input
              {...field}
              type={type}
              placeholder="Email-address"
              style={{
                width: "90%",
                border: "none",
                outline: "none",
                borderRadius: "0px",
                borderBottom: "1px solid",
              }}
            />
            {error && <span>{error.message}</span>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BNInput;
