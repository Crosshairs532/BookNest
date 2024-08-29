/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, InputNumber } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TinputProp = {
  name: string;
  label: string;
  type: string;
  setOnCheck?: () => boolean;
  onChangeValue?: () => unknown;
  bg?: string;
};

const BNNumber = ({ type, label, name }: TinputProp) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "50px" }}>
      <Controller
        rules={{ required: true }}
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={<span className="label font-medium">{label}</span>}
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <InputNumber
              {...field}
              placeholder={name}
              style={{
                width: "90%",
                borderRadius: 0,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                outline: "none",
                borderBottom: "1px solid #E7E7E7",
              }}
              onChange={(value) => {
                field.onChange(value);
              }}
              onFocus={(e) => {
                e.target.style.borderBottom = "1px solid #151515";
              }}
              onBlur={(e) => {
                e.target.style.borderBottom = "1px solid #E7E7E7";
              }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BNNumber;
