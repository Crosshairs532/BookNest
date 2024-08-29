/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { roomSelector } from "../../redux/features/room/room.slice";
import { useAppSelector } from "../../redux/hook";

type TinputProp = {
  name: string;
  label: string | undefined;
  type: string;
  bg?: string;
};

const RCinput = ({ type, label, name, bg }: TinputProp) => {
  const methods = useFormContext();

  const selector = useAppSelector(roomSelector);
  console.log(methods);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Controller
        control={methods.control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={<span className=" label font-medium">{label}</span>}
            layout="vertical"
          >
            <Input
              min={0}
              max={10000}
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

export default RCinput;
