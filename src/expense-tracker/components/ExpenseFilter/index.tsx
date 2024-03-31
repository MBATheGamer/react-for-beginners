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
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
}
