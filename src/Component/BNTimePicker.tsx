/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { Form, TimePicker } from "antd";
// import moment from "moment";
import { FormItemLayout } from "antd/es/form/Form";
import dayjs from "dayjs";

const BNTimePicker = ({
  disable,
  name,
  label,
  endArr,
  layout,
}: {
  disable: any;
  name: any;
  label: any;
  endArr: any;
  layout?: FormItemLayout | undefined | string;
}) => {
  const { control } = useFormContext();
  console.log(disable);

  console.log(layout);
  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        rules={{ required: "This field is required" }}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item label={label}>
              <TimePicker
                {...field}
                format="HH:mm"
                disabled={disable}
                style={{ width: "100%" }}
                minuteStep={60 as unknown as 1}
                hideDisabledOptions={true}
                value={field.value ? dayjs(field.value, "HH:mm") : null}
                onChange={(time) => {
                  field.onChange(time ? time.format("HH:mm") : null);
                }}
                disabledHours={() => {
                  return (
                    endArr || [
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18,
                      19, 20, 21, 22, 23,
                    ]
                  );
                }}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      />
    </div>
  );
};

export default BNTimePicker;
