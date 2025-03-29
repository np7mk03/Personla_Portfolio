import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  // This would typically come from a database or CMS
  const projects = [
    {
      title: "E-Commerce Analytics Dashboard",
      description:
        "A data visualization tool built with React and D3.js to track sales performance and customer behavior.",
      tags: ["React", "D3.js", "Data Analysis"],
      image: "/placeholder.svg?height=400&width=600",
      slug: "ecommerce-analytics",
    },
    {
      title: "Inventory Management System",
      description:
        "A full-stack application to manage inventory, track orders, and generate reports for small businesses.",
      tags: ["Next.js", "PostgreSQL", "TypeScript"],
      image: "/placeholder.svg?height=400&width=600",
      slug: "inventory-system",
    },
    {
      title: "Machine Learning for Market Prediction",
      description: "Using ML algorithms to predict market trends and optimize business strategies.",
      tags: ["Python", "TensorFlow", "Data Science"],
      image: "/placeholder.svg?height=400&width=600",
      slug: "ml-market-prediction",
    },
    {
      title: "Student Information System",
      description: "A comprehensive system for managing student data, course registrations, and academic records.",
      tags: ["Java", "Spring Boot", "MySQL"],
      image: "/placeholder.svg?height=400&width=600",
      slug: "student-information-system",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "An algorithm to optimize supply chain operations and reduce costs using operations research techniques.",
      tags: ["Python", "Operations Research", "Optimization"],
      image: "/placeholder.svg?height=400&width=600",
      slug: "supply-chain-optimization",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure and user-friendly mobile banking application with transaction tracking and budget management.",
      tags: ["React Native", "Firebase", "Mobile Development"],
      image: "/placeholder.svg?height=400&width=600",
      slug: "mobile-banking-app",
    },
  ]

  return (
    <div className="container py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">All Projects</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  )
}

