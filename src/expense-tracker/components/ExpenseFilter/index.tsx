import { categories } from "@expense-tracker/utils/constants";

type Props = {
  onSelectCatergory: (category: string) => void;
};

export default function ExpenseFilter({ onSelectCatergory }: Props) {
  return (
    <select
      className="form-select"
      onChange={event => onSelectCatergory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
