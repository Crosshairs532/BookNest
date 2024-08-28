import { Form, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
type TinputProp = {
  name: string;
  label: string;
  type: string;
  setOnCheck?: () => boolean;
};

const BNInput = ({ type, label, name, setOnCheck }: TinputProp) => {
  const { control } = useFormContext();
  const watch = useWatch({ control });

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
                width: "90%",
                borderRadius: 0,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                outline: "none",
                borderBottom: "1px solid #E7E7E7",
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
