import { useState } from "react";

interface Props {
  maxLength: number;
  children: string;
}

const ExpandableText = ({ maxLength, children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const textList = children.split("");
  const shortenedText = textList.map((item, index) => {
    if (index <= maxLength) {
      index <= maxLength;
      return item;
    } else return "";
  });
  console.log(shortenedText.join(""));
  return (
    <>
      <div>
        {collapsed ? shortenedText.join("") + "..." : children + " "}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "More" : "Less"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
