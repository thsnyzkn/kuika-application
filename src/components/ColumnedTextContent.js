import React from "react";
import LeftText from "./LeftText";
import RightText from "./RightText";

const ColumnedTextContent = () => {
  const sstyles = {
    marginBottom: "0px",
  };
  return (
    <>
      {" "}
      <LeftText top="2" content="Lorem ipsum dolor sit amet" />
      <RightText
        top="2"
        row="3"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          imperdiet ante, vel ullamcorper justo. Etiam ullamcorper eros est. Sed
          ligula nisi, dignissim sed lorem vehicula, maximus est."
      />
      <LeftText top="2" content="Lorem ipsum dolor" />
      <RightText
        top="2"
        row="3"
        content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul imperdiet
          ante, vel ullamcorper justo."
      />
      <LeftText top="3" content="Lorem ipsum" />
      <RightText
        {...sstyles}
        top="3"
        row="2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          imperdiet ante, vel ullamcorper justo. Etiam ullamcorper eros est. Sed"
      />
    </>
  );
};

export default ColumnedTextContent;
