import PropTypes from 'prop-types'

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const SearchIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)
SearchIcon.propTypes = { className: PropTypes.string }

export const UserIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
  </svg>
)
UserIcon.propTypes = { className: PropTypes.string }

export const BagIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
)
BagIcon.propTypes = { className: PropTypes.string }

export const ArrowRightIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)
ArrowRightIcon.propTypes = { className: PropTypes.string }

export const ChevronDownIcon = ({ className = 'size-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)
ChevronDownIcon.propTypes = { className: PropTypes.string }

export const MenuIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
)
MenuIcon.propTypes = { className: PropTypes.string }

export const CloseIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
)
CloseIcon.propTypes = { className: PropTypes.string }

export const GridIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </svg>
)
GridIcon.propTypes = { className: PropTypes.string }

export const HomeIcon = ({ className = 'size-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M4 11.5 12 5l8 6.5" />
    <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
  </svg>
)
HomeIcon.propTypes = { className: PropTypes.string }

export const EyeIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
EyeIcon.propTypes = { className: PropTypes.string }

export const CartPlusIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    <path d="M12 12v5" />
    <path d="M9.5 14.5h5" />
  </svg>
)
CartPlusIcon.propTypes = { className: PropTypes.string }

export const StarIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 2.5 14.85 8.6l6.65.95-4.81 4.69 1.13 6.62L12 17.77l-5.82 3.09 1.13-6.62L2.5 9.55l6.65-.95L12 2.5Z" />
  </svg>
)
StarIcon.propTypes = { className: PropTypes.string }

export const InstagramIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <rect x="3" y="3" width="18" height="18" rx="4.5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)
InstagramIcon.propTypes = { className: PropTypes.string }

export const FacebookIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M13.5 22v-8h2.7l.4-3.1H13.5V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.7v3.1h2.7V22h3.1Z" />
  </svg>
)
FacebookIcon.propTypes = { className: PropTypes.string }

export const ArrowUpIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
)
ArrowUpIcon.propTypes = { className: PropTypes.string }

export const FilterIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M4 6h16" />
    <path d="M7 12h10" />
    <path d="M10 18h4" />
  </svg>
)
FilterIcon.propTypes = { className: PropTypes.string }

export const HeartIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
  </svg>
)
HeartIcon.propTypes = { className: PropTypes.string }

export const ArrowLeftIcon = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...baseProps}>
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </svg>
)
ArrowLeftIcon.propTypes = { className: PropTypes.string }
