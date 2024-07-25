"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import {TActiveLinkProps} from '@/types/index'
const ActiveLink = ({url, children} : TActiveLinkProps) => {
    const pathname = usePathname();
    const isActive = url === pathname;
  return (
    <Link
    href={url}
    className={`p-3 rounded-md flex items-center gap-3    ${isActive ? "text-white bg-primary svg-animate" : "hover:text-primary hover:bg-primary hover:bg-opacity-10 "} transition-all `}
  >
    {children}
  </Link>
  )
}

export default ActiveLink