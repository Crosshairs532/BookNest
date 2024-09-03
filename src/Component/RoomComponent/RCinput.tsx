/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { roomSelector, setFilter } from "../../redux/features/room/room.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { FormItemLayout } from "antd/es/form/Form";
import useDebounce from "../../utils/Debounce/useDebounce";

type TinputProp = {
  name: string;
  label: string | undefined;
  type: string;
  bg?: string;
  layout?: FormItemLayout | undefined;
};

const RCinput = ({ layout, type, label, name, bg }: TinputProp) => {
  const [inputVal, setInputval] = useState<string | number>();

  const methods = useFormContext();
  const selector = useAppSelector(roomSelector);
  const dispatch = useAppDispatch();
  const deBouncedVal = useDebounce(inputVal);

  useEffect(() => {
    console.log(selector);

    console.log(deBouncedVal, inputVal);
    switch (type) {
      case "number":
        setInputval(Number(deBouncedVal));
        break;

      case "text":
        setInputval(deBouncedVal);
        break;
    }
    console.log({ [name]: inputVal });
    dispatch(setFilter({ [name]: deBouncedVal }));
  }, [deBouncedVal]);

  return (
    <div style={{ marginBottom: "50px" }}>
      <Controller
        control={methods.control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={<span className=" label font-medium">{label}</span>}
            layout={layout ? layout : "vertical"}
          >
            <Input
              type={type}
              min={0}
              max={10000}
              {...field}
              placeholder={name}
              style={{
                backgroundColor: `${bg}`,
                // width: "90%",
                borderRadius: 0,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                outline: "none",
                borderBottom: "1px solid #E7E7E7",
              }}
              onChange={(e) => {
                setInputval(e.target.value);
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
