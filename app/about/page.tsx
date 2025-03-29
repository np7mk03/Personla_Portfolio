import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">About Me</h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              Hello! My name is Nicole and I'm a Computer Science and Management student passionate about building innovative solutions that
              bridge technology and business needs. With a strong foundation in both technical development and
              management principles, I bring a unique perspective to every project.
            </p>

            <p>
              My journey began with an interest in business during high school, which evolved into a deeper
              exploration of entreprenuarial management fundamentals, and later on with the combination of computer science
              during my university studies.
            </p>

            <h2>Education</h2>
            <p>
              I'm currently pursuing a dual degree in Computer Science and Business Management at Columbia Univeristy,
              where I've maintained a strong academic record while participating in various extracurricular activities
              and projects.
            </p>

            <h2>Technical Skills</h2>
            <p>
              My technical toolkit includes proficiency in multiple programming languages (JavaScript/TypeScript,
              Python, Java, C), web development frameworks (Flask,React, Next.js, Node.js), database technologies (SQL), 
              and data analysis tools(Excel,python packages for machine learning model training). 
              I'm also experienced with agile methodologies and cloud platforms.
            </p>

            <h2>Management Skills</h2>
            <p>
              On the management side, I've developed skills in project management, business analysis, strategic
              planning, and team leadership. I understand how to align technical solutions with business objectives and
              how to communicate effectively with stakeholders at all levels.
            </p>

            <h2>Professional Goals</h2>
            <p>
              I aim to leverage my interdisciplinary background to pursue a career at the intersection of technology and
              business. Whether it's developing innovative products, optimizing business processes through technology,
              or leading technical teams, I'm excited about opportunities that allow me to apply both my technical
              expertise and management knowledge.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold">Market Strategiest Intern</h3>
                <p className="text-muted-foreground">Company Name • Summer 2023</p>
                <p className="mt-2">
                  Developed and maintained web applications using React and Node.js. Collaborated with the product team
                  to implement new features and improve user experience.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold">Business Analyst Intern</h3>
                <p className="text-muted-foreground">Company Name • Summer 2022</p>
                <p className="mt-2">
                  Analyzed business processes and identified opportunities for improvement. Created reports and
                  dashboards to visualize key performance indicators.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-bold">Research Assistant</h3>
                <p className="text-muted-foreground">University Department • 2021-2022</p>
                <p className="mt-2">
                  Assisted in research projects focused on machine learning applications in business decision-making.
                  Implemented algorithms and analyzed results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-lg sticky top-8 space-y-6">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Your Name</h2>
              <p className="text-muted-foreground">Computer Science & Management Student</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Contact</h3>
              <ul className="space-y-2">
                <li>email@example.com</li>
                <li>City, Country</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <Button asChild className="w-full gap-2">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


