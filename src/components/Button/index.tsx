import styles from "./styles.module.css";

type Props = {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
};

export default function Button({
  color = "primary",
  children,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={[styles["btn"], styles[`btn-${color}`]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
