import type { SVGProps } from 'react';

/** Display the emblem within the supplied JPEG, preserving the original asset. */
export default function BrandLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="brand-logo" viewBox="490 575 1300 600" aria-hidden="true" focusable="false" {...props}>
      <image href="/desun-logo.jpeg" width="2048" height="2048" />
    </svg>
  );
}
