export function Select({ value, onValueChange, children }) {
  return <div>{children}</div>;
}
export function SelectTrigger({ className, children }) {
  return <button className={className}>{children}</button>;
}
export function SelectContent({ children }) {
  return <div>{children}</div>;
}
export function SelectItem({ value, children }) {
  return <div>{children}</div>;
}
