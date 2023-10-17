interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  action?: () => void;
  variant?: 'danger' | 'success';
}

const Button = ({
  label,
  action,
  variant = 'success',
  ...props
}: ButtonType) => {
  return (
    <button
      className={`border border-transparent  px-2 py-1 rounded
       ${variant === 'danger' && 'hover:border-danger hover:text-danger'}
       ${variant === 'success' && 'hover:border-tertiary hover:text-tertiary'}
       `}
      onClick={action && action}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
