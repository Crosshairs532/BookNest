import { Select } from "antd";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { MdPriceChange } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { roomSelector, setFilter } from "../../redux/features/room/room.slice";

const items = [
  {
    value: "High To Low",
    label: "High To Low",
  },
  {
    value: "Low To High",
    label: "Low To High",
  },
];

const Sort = () => {
  const { control } = useForm();
  const selector = useAppSelector(roomSelector);
  const dispatch = useAppDispatch();
  const handleChange = (value: string) => {
    console.log(value);
    if (value === "Low To High") {
      dispatch(setFilter({ sort: 1 }));
    } else {
      dispatch(setFilter({ sort: -1 }));
    }
  };

  console.log(selector);
  return (
    <Controller
      control={control}
      name="sort"
      render={({ field }) => (
        <Select
          defaultValue="Low To High"
          style={{ width: 120 }}
          onChange={handleChange}
          options={items}
        />
      )}
    />
  );
};
export default Sort;
