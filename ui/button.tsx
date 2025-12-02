interface ButtonProps {
  icon?: React.ReactNode;
  label?: string;
  title?: string;
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
  title,
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
      title={title}
      autoFocus={autoFocus}
      className={`cursor-pointer ${className} flex flex-col items-center justify-center px-2 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50`}
      disabled={disabled}
      form={form}
      name={name}
      onClick={onClick}
      type={type}
      value={value}
      aria-label={ariaLabel}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </button>
  );
}