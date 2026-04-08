"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type AvatarItem = {
  imageUrl: string
  name: string
  profileUrl?: string
}

type AvatarGroupProps = {
  avatarUrls: AvatarItem[]
  className?: string
}

export function AvatarGroup({ avatarUrls, className }: AvatarGroupProps) {
  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      {avatarUrls.map((avatar, index) => {
        const Wrapper = avatar.profileUrl ? Link : "div"
        const wrapperProps = avatar.profileUrl
          ? { href: avatar.profileUrl, target: "_blank", rel: "noreferrer" }
          : {}

        return (
          <motion.div
            key={`${avatar.name}-${index}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={cn(
              "group relative -ml-3 first:ml-0",
              "focus-within:z-20 hover:z-20",
            )}
          >
            <Wrapper
              {...wrapperProps}
              className={cn(
                "flex items-center rounded-full border border-border bg-background pr-1 transition-all duration-300",
                "group-hover:pr-5 group-focus-within:pr-5",
              )}
            >
              <span className="relative h-30 w-30 overflow-hidden rounded-full border border-border bg-muted">
                <Image
                  src={avatar.imageUrl}
                  alt={avatar.name}
                  fill
                  sizes="84px"
                  className="object-cover"
                />
              </span>
              <span
                className={cn(
                  "max-w-0 overflow-hidden whitespace-nowrap text-base font-medium",
                  "transition-all duration-300 ease-out group-hover:ml-3 group-hover:max-w-44",
                  "group-focus-within:ml-3 group-focus-within:max-w-44",
                )}
              >
                {avatar.name}
              </span>
            </Wrapper>
          </motion.div>
        )
      })}
    </div>
  )
}
