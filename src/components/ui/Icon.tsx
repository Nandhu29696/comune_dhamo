import type { SVGProps, ReactElement } from 'react';

/**
 * Inline SVG replacements for the icon fonts used by the reference
 * (icomoon: envelope/phone/map-marker/expand, ionicons: arrow-forward,
 * font-awesome: bars/long-arrows, themify: zoom-in).
 */
export type IconName =
  | 'envelope'
  | 'phone'
  | 'map-marker'
  | 'expand'
  | 'arrow-forward'
  | 'bars'
  | 'long-arrow-left'
  | 'long-arrow-right'
  | 'zoom-in'
  | 'whatsapp'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}

const paths: Record<IconName, ReactElement> = {
  envelope: (
    <path d="M2 4h20v16H2zM2 4l10 8 10-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  ),
  phone: (
    <path
      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z"
      fill="currentColor"
    />
  ),
  'map-marker': (
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="currentColor" />
  ),
  expand: (
    <path
      d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'arrow-forward': (
    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  bars: <path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />,
  'long-arrow-left': (
    <path d="M21 12H4M9 7l-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'long-arrow-right': (
    <path d="M3 12h17M15 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'zoom-in': (
    <path
      d="M10.5 3a7.5 7.5 0 1 0 4.6 13.4L20 21.3 21.3 20l-4.9-4.9A7.5 7.5 0 0 0 10.5 3zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM9.5 7v2.5H7v2h2.5V14h2v-2.5H14v-2h-2.5V7z"
      fill="currentColor"
    />
  ),
  whatsapp: (
    <path
      d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.1 4.9 4.2 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3l-2-.9c-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.4 0-.5L9.9 8.6c-.3-.6-.5-.5-.7-.5h-.5z"
      fill="currentColor"
    />
  ),
  close: <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
  'chevron-left': <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  'chevron-right': <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  'chevron-down': <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
};

export function Icon({ name, size = '1em', className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-0.15em', flexShrink: 0 }}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
