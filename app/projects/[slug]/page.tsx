import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Github, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // In a real application, you would fetch this data from a database or CMS based on the slug
  // For this example, we'll use a static object
  const projectData = {
    title: "E-Commerce Analytics Dashboard",
    description:
      "A data visualization tool built with React and D3.js to track sales performance and customer behavior.",
    fullDescription: `
      <p>This project was developed to address the need for real-time analytics in e-commerce businesses. The dashboard provides comprehensive insights into sales trends, customer behavior, and inventory management.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time sales tracking with customizable date ranges</li>
        <li>Customer segmentation analysis</li>
        <li>Product performance metrics</li>
        <li>Inventory level monitoring</li>
        <li>Predictive analytics for future sales</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <p>The frontend was built using React with TypeScript for type safety. D3.js was used for creating interactive data visualizations. The backend API was developed with Node.js and Express, connecting to a PostgreSQL database.</p>
      
      <p>One of the main challenges was optimizing the performance of real-time data updates without overwhelming the server. This was solved by implementing a WebSocket connection for live updates and a caching layer to reduce database queries.</p>
    `,
    tags: ["React", "D3.js", "TypeScript", "Node.js", "PostgreSQL", "Data Analysis"],
    image: "/placeholder.svg?height=600&width=1200",
    date: "January 2023",
    duration: "3 months",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="container py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to projects</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{projectData.title}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={projectData.image || "/placeholder.svg"}
              alt={projectData.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: projectData.fullDescription }} />
          </div>

          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3">
            {projectData.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-lg sticky top-8">
            <h2 className="text-xl font-bold mb-4">Project Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Date</h3>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{projectData.date}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Duration</h3>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{projectData.duration}</span>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                {projectData.demoUrl && (
                  <Button asChild className="w-full gap-2">
                    <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {projectData.githubUrl && (
                  <Button asChild variant="outline" className="w-full gap-2">
                    <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

