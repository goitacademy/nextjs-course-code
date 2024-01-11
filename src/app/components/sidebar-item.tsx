import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface SidebarItemProps {
  current?: boolean;
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  current,
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-1 gap-3.5',
          current &&
            'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm',
        )}
      >
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
