/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { roomSelector } from "../redux/features/room/room.slice";
type TinputProp = {
  name: string;
  label: string | undefined;
  type: string;
  setOnCheck?: () => boolean;
  onChangeValue?: () => unknown;
  bg?: string;
};

const BNInput = ({ type, label, name, setOnCheck, bg }: TinputProp) => {
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
        rules={{
          required: "This field is required",
        }}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={<span className=" label font-medium">{label}</span>}
            layout="vertical"
          >
            <Input
              {...field}
              type={type}
              placeholder={name}
              style={{
                backgroundColor: `${bg}`,
                width: "90%",
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
