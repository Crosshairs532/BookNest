import { useEffect, useState } from "react";

const useDebounce = (value: any, delay = 900) => {
  const [dVal, setDval] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDval(value);
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [value]);
  return dVal;
};

export default useDebounce;
