import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Form, TimePicker } from "antd";
import moment from "moment";
import { useEffect } from "react";

const BNTimePickerWatch = ({ name, label, setStartTime }) => {
  const { control } = useFormContext();
  const startTimeWatch = useWatch({ control, name: "startTime" });
  console.log(startTimeWatch);

  useEffect(() => {
    setStartTime(startTimeWatch);
  }, [startTimeWatch]);

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
                style={{ width: "100%" }}
                minuteStep={60}
                hideDisabledOptions={true}
                value={field.value ? moment(field.value, "HH:mm") : null}
                onChange={(time) => {
                  field.onChange(time ? time.format("HH:mm") : null);
                }}
                disabledHours={() => {
                  return [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 16, 17, 18, 19, 20, 21,
                    22, 23,
                  ];
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

export default BNTimePickerWatch;
