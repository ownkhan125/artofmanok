import PropTypes from 'prop-types'

import { cn } from '@/lib/cn'

const VARIANTS = {
  primary:
    'bg-primary text-primary-foreground hover:opacity-90',
  secondary:
    'bg-accent text-accent-foreground hover:bg-muted',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-muted',
  ghost: 'bg-transparent text-foreground hover:bg-muted',
}

const SIZES = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium',
        'transition-colors focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-foreground focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
