import { useState } from "react";

type Props = {
  maxChars?: number;
  children: string;
};

export default function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <p>
      {text}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
}
