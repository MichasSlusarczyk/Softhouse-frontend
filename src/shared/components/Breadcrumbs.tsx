import {
  Box,
  Breadcrumbs as BaseBreadcrumbs,
  BreadcrumbsProps as BaseBreadcrumbsProps,
  Typography,
} from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export type BreadcrumbItem = string | { link: string; label: string }

interface BreadcrumbsProps extends BaseBreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs = ({ items, ...props }: BreadcrumbsProps) => (
  <Box paddingY={2} paddingX={3}>
    <BaseBreadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
      {...props}
    >
      {items.map(item => (
        <Typography
          color="textSecondary"
          variant="body2"
          {...(typeof item === 'object' && { component: Link, to: item.link })}
        >
          {typeof item === 'string' ? item : item.label}
        </Typography>
      ))}
    </BaseBreadcrumbs>
  </Box>
)

export default Breadcrumbs
