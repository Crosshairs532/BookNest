import { Controller, useFormContext } from "react-hook-form";
import { Form, TimePicker } from "antd";
import { FormItemLayout } from "antd/es/form/Form";
import moment from "moment";

type TPHDatePicker = {
  name: string;
  label: string;
  layout?: FormItemLayout | undefined;
  hourStep?: 1 | undefined;
  minuteStep?: 60 | undefined;
};

// const allowedIntervals = [
//   { start: "09:00", end: "10:00" },
//   { start: "10:00", end: "11:00" },
//   { start: "11:00", end: "12:00" },
//   { start: "12:00", end: "13:00" },
//   { start: "13:00", end: "14:00" },
// ];

const BNTimePicker = ({ layout, name, label }: TPHDatePicker) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item layout={layout} label={label}>
              <TimePicker
                format="HH:mm"
                {...field}
                size="middle"
                style={{ width: "100%" }}
                hideDisabledOptions={true}
                disabledTime={() => {
                  return {
                    disabledHours: () => [
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 18, 19, 20, 21, 22,
                      23, 24,
                    ],
                  };
                }}
                minuteStep={60}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      ></Controller>
    </div>
  );
};

export default BNTimePicker;
