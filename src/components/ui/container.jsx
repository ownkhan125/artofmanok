import PropTypes from 'prop-types'

import { cn } from '@/lib/cn'

const Container = ({ children, className = '', as: Tag = 'div' }) => {
  return (
    <Tag className={cn('mx-auto w-full max-w-6xl px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
}

export default Container
