/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { roomSelector } from "../redux/features/room/room.slice";
import { FormItemLayout, FormLayout } from "antd/es/form/Form";
type TinputProp = {
  layout?: FormItemLayout | undefined;
  name: string;
  label: string | undefined;
  type: string;
  setOnCheck?: () => boolean;
  onChangeValue?: () => unknown;
  bg?: string;
};

const BNInput = ({ layout, type, label, name, setOnCheck, bg }: TinputProp) => {
  const { control } = useFormContext();
  const watch = useWatch({ control });
  const selector = useAppSelector(roomSelector);
  useEffect(() => {
    if (
      watch.name &&
      watch.password &&
      watch.address &&
      watch.phone &&
      watch.email
    ) {
      setOnCheck(true);
      console.log("all fields are filled");
    }

    return () => {};
  }, [watch]);

  return (
    <div style={{ marginBottom: "50px" }}>
      <Controller
        // rules={{ required: true }}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            layout={layout}
            label={<span className=" label font-medium">{label}</span>}
          >
            <Input
              {...field}
              type={type}
              placeholder={name}
              style={{
                width: "100%",
                backgroundColor: `${bg}`,
                borderRadius: 0,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                outline: "none",
                borderBottom: "1px solid #E7E7E7",
              }}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              onFocus={(e) => {
                e.target.style.borderBottom = "1px solid #151515";
              }}
              onBlur={(e) => {
                e.target.style.borderBottom = "1px solid #E7E7E7";
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
