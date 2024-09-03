/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, InputNumber } from "antd";
import { FormItemLayout } from "antd/es/form/Form";
import { Controller, useFormContext } from "react-hook-form";

type TinputProp = {
  layout?: FormItemLayout | undefined;
  name: string;
  label: string;
  type: string;
  setOnCheck?: () => boolean;
  onChangeValue?: () => unknown;
  bg?: string;
};

const BNNumber = ({ layout, type, label, name }: TinputProp) => {
  const { control } = useFormContext();
  console.log(type);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Controller
        rules={{ required: "This field is required" }}
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            layout={layout}
            label={<span className="label font-medium">{label}</span>}
            validateStatus={error ? "error" : ""}
            help={error?.message}
          >
            <InputNumber
              {...field}
              placeholder={name}
              size="middle"
              style={{
                width: "100%",
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
