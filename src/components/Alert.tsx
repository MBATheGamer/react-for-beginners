import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClose: () => void;
};

export default function Alert({ children, color = "primary", onClose }: Props) {
  return (
    <div className={`alert alert-${color} alert-dismissible`}>
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
}
