import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  return (
    <div className="container py-12">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Resume</h1>
        </div>
        <Button asChild className="gap-2">
          <a href="/resume.pdf" download>
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-sm border p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Your Name</h2>
          <p className="text-muted-foreground">Computer Science & Management Student</p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <span>email@example.com</span>
            <span>•</span>
            <span>+1 (123) 456-7890</span>
            <span>•</span>
            <span>City, Country</span>
          </div>
        </div>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Summary</h3>
          <Separator className="mb-4" />
          <p>
            Computer Science and Management student with a strong foundation in software development, data analysis, and
            business strategy. Seeking opportunities to apply technical skills and management knowledge in a challenging
            role.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <h4 className="font-bold">Bachelor of Science in Computer Science & Management</h4>
                <span className="text-muted-foreground">Expected 2025</span>
              </div>
              <p>University Name, City, Country</p>
              <p className="text-muted-foreground">GPA: 3.8/4.0</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Operations
                  Management, Strategic Management
                </li>
                <li>Dean's List: All semesters</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <Separator className="mb-4" />
          <div className="space-y-6">
            <div>
              <div className="flex justify-between">
                <h4 className="font-bold">Software Development Intern</h4>
                <span className="text-muted-foreground">Summer 2023</span>
              </div>
              <p>Company Name, City, Country</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with the product team to implement new features and improve user experience</li>
                <li>Participated in code reviews and contributed to technical documentation</li>
                <li>Optimized database queries, resulting in a 30% improvement in application performance</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between">
                <h4 className="font-bold">Business Analyst Intern</h4>
                <span className="text-muted-foreground">Summer 2022</span>
              </div>
              <p>Company Name, City, Country</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Analyzed business processes and identified opportunities for improvement</li>
                <li>Created reports and dashboards to visualize key performance indicators</li>
                <li>Conducted market research and competitor analysis</li>
                <li>Presented findings and recommendations to senior management</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between">
                <h4 className="font-bold">Research Assistant</h4>
                <span className="text-muted-foreground">2021-2022</span>
              </div>
              <p>University Department, City, Country</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>
                  Assisted in research projects focused on machine learning applications in business decision-making
                </li>
                <li>Implemented algorithms and analyzed results</li>
                <li>Contributed to academic papers and presentations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2">Skills</h3>
          <Separator className="mb-4" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Technical Skills</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Programming: JavaScript/TypeScript, Python, Java, C++</li>
                <li>Web Development: React, Next.js, Node.js, HTML/CSS</li>
                <li>Databases: PostgreSQL, MongoDB, MySQL</li>
                <li>Tools: Git, Docker, AWS, Azure</li>
                <li>Data Analysis: Python (Pandas, NumPy), R, Tableau</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Management Skills</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Project Management</li>
                <li>Business Analysis</li>
                <li>Strategic Planning</li>
                <li>Team Leadership</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">Projects</h3>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">E-Commerce Analytics Dashboard</h4>
              <p className="text-sm text-muted-foreground">React, D3.js, Node.js, PostgreSQL</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Developed a data visualization tool to track sales performance and customer behavior</li>
                <li>Implemented real-time updates using WebSockets</li>
                <li>Created interactive charts and graphs using D3.js</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Inventory Management System</h4>
              <p className="text-sm text-muted-foreground">Next.js, TypeScript, PostgreSQL</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Built a full-stack application to manage inventory, track orders, and generate reports</li>
                <li>Implemented authentication and authorization using NextAuth.js</li>
                <li>Created a responsive UI with Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Machine Learning for Market Prediction</h4>
              <p className="text-sm text-muted-foreground">Python, TensorFlow, Data Science</p>
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>Developed ML models to predict market trends and optimize business strategies</li>
                <li>Processed and analyzed large datasets using Pandas and NumPy</li>
                <li>Achieved 85% prediction accuracy on test data</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

