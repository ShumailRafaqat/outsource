import { Code2 } from "lucide-react";

import type { FunctionGroup } from "./types";

export const softwareDevelopmentFunction: FunctionGroup = {
  label: "Software & Development",
  href: "/expertise/software-dev",
  icon: Code2,
  intro:
    "Skilled developers and technical operators who embed into your stack and keep systems, products, and pipelines moving.",
  roles: [
    {
      title: "N8N / Full Stack Developer",
      description: "Handles API integrations, backend logic, and workflow automation builds.",
    },
    {
      title: "PHP Developer",
      description: "Develops and maintains PHP applications, scripts, and legacy code.",
    },
    {
      title: "AI Developer",
      description: "Trains, fine-tunes, and integrates machine learning models into your stack.",
    },
    {
      title: "WordPress Developer",
      description: "Builds, customizes, and maintains WordPress themes, plugins, and integrations.",
    },
    {
      title: "Web & Frontend Developer",
      description: "Implements responsive UI, components, and performance improvements.",
    },
    {
      title: "Framer Developer",
      description: "Builds responsive Framer pages with CMS setup and animations.",
    },
    {
      title: "Data Scientist",
      description: "Develops models, dashboards, and data analysis to support decisions.",
    },
    {
      title: "Technical Ops Specialist",
      description: "Documents systems, monitors workflows, and coordinates issue resolution.",
    },
    {
      title: "Laravel Developer",
      description: "Builds and maintains Laravel applications, APIs, and database migrations.",
    },
    {
      title: "MERN Front End Developer",
      description: "Builds React components, layouts, and state management for MERN apps.",
    },
    {
      title: "MERN Back End Developer",
      description: "Builds Node and Express APIs, schemas, and backend logic for MERN apps.",
    },
    {
      title: "Full-Stack MERN Developer",
      description: "Builds and maintains both frontend and backend for MERN applications.",
    },
    {
      title: "MERN E-Commerce Developer",
      description: "Builds MERN storefronts, catalogs, search, and checkout functionality.",
    },
    {
      title: "Full-Stack Developer",
      description: "Builds and maintains full-stack features across frontend and backend.",
    },
    {
      title: "WooCommerce Developer",
      description: "Builds and maintains WooCommerce stores, catalogs, and checkout flows.",
    },
    {
      title: "iOS App Developer",
      description: "Builds and maintains native iOS features, releases, and App Store submissions.",
    },
    {
      title: "Android App Developer",
      description:
        "Builds and maintains native Android features, releases, and Play Store submissions.",
    },
    {
      title: "React Native/Ionic Developer",
      description: "Builds cross-platform apps in React Native and Ionic, from state to release.",
    },
    {
      title: "ML Engineer",
      description: "Deploys and maintains machine learning models, pipelines, and infrastructure.",
    },
    {
      title: "Data Collection Specialist",
      description: "Sources, records, and organizes datasets from web, APIs, and raw inputs.",
    },
    {
      title: "Data Annotation Specialist",
      description: "Labels and classifies images, text, and data for machine learning models.",
    },
    {
      title: "Data Validation Specialist",
      description: "Reviews, cleans, and validates datasets for accuracy and consistency.",
    },
    {
      title: "Technical Writer",
      description: "Writes documentation, guides, and content for products and developers.",
    },
  ],
};

export const softwareDevelopmentFaqs = [
  [
    "What Software & Development roles can I hire?",
    "Roles include full-stack and frontend/backend developers, PHP, Laravel, WordPress and e-commerce specialists, mobile developers, AI/ML engineers, data specialists, technical operations, and technical writers.",
  ],
  [
    "Can developers work with our existing stack and tools?",
    "Yes. Share your languages, frameworks, repositories, cloud environment, development workflow, and collaboration tools during role planning so relevant experience can be considered.",
  ],
  [
    "Can I hire for a specific project or ongoing product work?",
    "Support can be scoped for ongoing product development or defined project needs. Responsibilities, deliverables, collaboration expectations, and timelines should be agreed before work begins.",
  ],
  [
    "How do you handle access to source code and technical systems?",
    "Access and confidentiality requirements should be agreed before work begins. We recommend individual accounts, least-privilege permissions, and your standard review and deployment controls.",
  ],
  [
    "Can I start with one developer and expand the team later?",
    "Yes. You can start with a defined role and add skills or capacity as the roadmap evolves. Changes to scope, schedule, and fees should be agreed in advance.",
  ],
] as const;
