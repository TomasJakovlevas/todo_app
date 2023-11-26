import OkIcon from '@/icons/ok/okIcon';
import { SvgType } from '@/icons/SvgInterface';

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  action?: () => void;
  variant?: 'danger' | 'success';
  Icon?: React.FunctionComponent<SvgType>;
}

const Button = ({
  label,
  action,
  variant = 'success',
  Icon,
  ...props
}: ButtonType) => {
  return (
    <button
      className={`border border-transparent  px-2 py-1 rounded flex items-center gap-2
       ${variant === 'danger' && 'hover:border-danger hover:text-danger'}
       ${
         variant === 'success' &&
         'hover:border-quaternary hover:text-quaternary dark:hover:border-tertiary dark:hover:text-tertiary'
       }
       `}
      onClick={action && action}
      {...props}
    >
      {Icon && (
        <span>
          <Icon className='h-[16px] w-[16px]' />
        </span>
      )}
      <span> {label}</span>
    </button>
  );
};

export default Button;
