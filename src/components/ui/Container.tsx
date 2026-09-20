import type { HTMLAttributes, ElementType } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** `fluid` = full width with 15px side padding (Bootstrap `.container-fluid`). */
  fluid?: boolean;
  /** Reference uses `px-md-0` on several inner containers. */
  flushMd?: boolean;
}

export function Container({ as: Tag = 'div', fluid, flushMd, className, ...rest }: ContainerProps) {
  return <Tag className={cn(fluid ? 'container-fluid' : 'container', flushMd && 'md:px-0', className)} {...rest} />;
}
