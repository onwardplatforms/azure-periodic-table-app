import Link from 'next/link';

interface ConditionalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  showLink: boolean;
  href: string;
  shallow?: boolean;
  children: React.ReactNode;
}

export default function ConditionalLink({
  showLink,
  href,
  children,
  ...props
}: ConditionalLinkProps) {
  if (showLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}
