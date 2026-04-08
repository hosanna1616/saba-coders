"use client"

import { motion } from "framer-motion"
import { AvatarGroup } from "@/components/ui/avatar-group"
import ElectricBorder from "@/components/ui/electric-border"

const teamMembers = [
  { imageUrl: "/h.png", name: "Hosanna" },
  { imageUrl: "/meron.png", name: "Meron" },
  { imageUrl: "/hiwot.png", name: "Hiwot" },
];

export function MeetTeam() {
  return (
    <section id="team" className="px-6 py-24 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <ElectricBorder
          color="#a2a9a9"
          speed={1}
          chaos={0.17}
          borderRadius={24}
          className="rounded-3xl"
        >
          <div className="rounded-3xl border border-border/60 bg-background/70 p-8 backdrop-blur md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Meet the Team
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              The people behind Saba Coders
            </h2>
            <AvatarGroup avatarUrls={teamMembers} className="mx-auto select-none" />
          </div>
        </ElectricBorder>
      </motion.div>
    </section>
  )
}
