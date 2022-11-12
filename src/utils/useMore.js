import React from "react";
import { CARD_LIMIT_COMP, CARD_LIMIT_PAD, CARD_LIMIT_PHONE, INC_COMP, INC_PAD, INC_PHONE, WIDTH_COMP, WIDTH_PAD, WIDTH_PHONE } from "./consts";
import useResize from "./useResize";

export default function useMore(isSaved) {
  const [limit, setLimit] = React.useState(CARD_LIMIT_COMP);
  const [inc, setInc] = React.useState(INC_COMP);
  const { width } = useResize();
  React.useEffect(() => {
    if (width >= WIDTH_COMP) {
      setLimit(CARD_LIMIT_COMP);
      setInc(INC_COMP);
    } else if (width >= WIDTH_PAD) {
      setLimit(CARD_LIMIT_PAD);
      setInc(INC_PAD);
    } else if (width >= WIDTH_PHONE) {
      setLimit(CARD_LIMIT_PHONE);
      setInc(INC_PHONE);
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
