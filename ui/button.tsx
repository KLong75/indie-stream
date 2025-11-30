interface ButtonProps {
  icon?: React.ReactNode;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  value?: string;
  ariaLabel?: string;
  // Add other props you might want to support
}

export default function Button({
  icon,
  label,
  onClick,
  className = "",
  autoFocus = false,
  disabled = false,
  form,
  name,
  value,
  type = "button",
  ariaLabel
}: ButtonProps) {
  return (
    <button
      autoFocus={autoFocus}
      className={`cursor-pointer ${className}`}
      disabled={disabled}
      form={form}
      name={name}
      onClick={onClick}
      type={type}
      value={value}
      aria-label={ariaLabel}
    >
      {icon}
      {label}
    </button>
  );
}