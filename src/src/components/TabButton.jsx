export default function TabButton({ children, isSelected, ...otherProps }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...otherProps}>
        {children}
      </button>
    </li>
  );
}
