import { Megaphone } from "lucide-react";

import type { FunctionGroup } from "./types";

export const marketingCreativeFunction: FunctionGroup = {
  label: "Marketing & Creative",
  href: "/expertise/marketing-creative",
  icon: Megaphone,
  intro:
    "Consistent content, active channels, and campaigns that go out—without the coordination overhead.",
  roles: [
    {
      title: "Digital Marketing Assistant",
      description: "Coordinates campaigns, tracks analytics, and keeps marketing current.",
    },
    {
      title: "SEO Specialist",
      description: "Handles keyword research, on-page optimization, and search tracking.",
    },
    {
      title: "Email Marketing Assistant",
      description: "Manages campaigns, newsletters, and subscriber lists for outreach.",
    },
    {
      title: "Social Media Assistant",
      description: "Schedules content, moderates comments, and keeps your channels active.",
    },
    {
      title: "Content Writer",
      description: "Produces blogs, web copy, and written content across channels.",
    },
    {
      title: "Graphic Designer",
      description: "Creates visual assets, brand materials, and digital graphics.",
    },
    {
      title: "Video Editor",
      description: "Cuts, sequences, and delivers polished video content ready to publish.",
    },
    {
      title: "Influencer Marketing Manager",
      description: "Sources creators, tracks deliverables, and keeps campaigns on schedule.",
    },
    {
      title: "Podcast Operations Assistant",
      description: "Handles guest booking, scheduling, show notes, and episode publishing.",
    },
    {
      title: "Personal Brand Manager",
      description: "Manages your content, presence, and positioning across channels.",
    },
    {
      title: "Creative Asset Management Assistant",
      description: "Organizes, tags, and maintains your creative asset library.",
    },
    {
      title: "Creative Studio Project Coordinator",
      description: "Tracks briefs, timelines, and deliverables so projects stay on schedule.",
    },
    {
      title: "Production & Crew Coordination Assistant",
      description: "Coordinates crew scheduling, call sheets, and shoot day logistics.",
    },
  ],
};

export const marketingCreativeFaqs = [
  [
    "What marketing and creative roles can I hire?",
    "Options include digital marketing assistants, SEO specialists, email and social media assistants, content writers, graphic designers, video editors, influencer and personal brand managers, podcast operations, and creative project coordination.",
  ],
  [
    "Can a marketing assistant work with our existing tools and brand guidelines?",
    "Yes. Share your platforms, workflows, brand guidelines, and approval process during role planning so onboarding can be tailored to the way your team works.",
  ],
  [
    "Can you support both ongoing marketing and one-off campaigns?",
    "Support can be scoped around recurring channel operations or defined campaign and production needs. The responsibilities, timelines, and deliverables should be agreed before work begins.",
  ],
  [
    "How do you handle content reviews and creative approvals?",
    "You define the review process, brand standards, and approval owners. The professional can coordinate drafts and deliverables through your agreed workflow; final approval remains with your team.",
  ],
  [
    "Can I start with one creative role and expand later?",
    "Yes. You can begin with the role or skills you need first and discuss adding capacity as your marketing priorities evolve. Changes to scope, schedule, or fees should be agreed in advance.",
  ],
] as const;
