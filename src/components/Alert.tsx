import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Alert({ children: text }: Props) {
  return <div className="alert alert-primary">{text}</div>;
}
