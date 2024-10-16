interface Props {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function Tab({ name, isSelected, onClick }: Props) {
  return (
    <button
      className={`tab ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      {name}
    </button>
  );
}

export default Tab;
