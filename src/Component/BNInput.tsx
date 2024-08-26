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
        rules={{ required: "This field is required" }}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={<span className=" label font-medium">{label}</span>}
            layout="vertical"
          >
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
            {error && <span className="text-red-500">{error?.message}</span>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BNInput;
