import React from "react";
import useResize from "./useResize";

export default function useMore() {
  const [limit, setLimit] = React.useState(12);
  const [inc, setInc] = React.useState(3);
  const { width } = useResize();
  React.useEffect(() => {
    if (width >= 1280) {
      setLimit(12);
      setInc(3);
    } else if (width >= 768) {
      setLimit(8);
      setInc(2);
    } else if (width >= 320) {
      setLimit(5);
      setInc(2);
    }
  }, [width]);

  const incriment = () => {
    setLimit(limit => limit + inc);
  };

  return {
    limit,
    incriment,
  };
}
