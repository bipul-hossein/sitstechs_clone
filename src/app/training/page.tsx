import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Training", href: "/training" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" }
  ]
  

const trainingPrograms = [
  {
    title: "Customize Corporate Training",
    description: "Customized training on specific Software for the corporate needs.",
    type: "corporate"
  },
  {
    title: "Experienced Technical Professional",
    description: "Advanced program where professional are taught specific Software Tools and New Technology needed for Career Advancement",
    type: "technical"
  },
  {
    title: "Experienced Non-Technical Professionals",
    description: "13 to 14 weeks program where professionals are taught and trained in the following areas:",
    topics: [
      "Structured Query Language (SQL) / UNIX / XML, HTML",
      "Object Oriented Concepts: JAVA, RUBY, C++",
      "Automation: Selenium Webdriver, TestNG, Selenium Grid, SOAP UI",
      "Life Cycle Management Tool: HP ALM , SharePoint",
      "Change Management Software: JIRA, SVN, VSS, Quality Center",
      "Business Analysis (Requirement Gathering, Analysis)",
      "Database: Oracle, SQL Server, Sybase and MS Access",
      "Database Development Tool: SQL Plus, SQL Developer and TOAD",
      "508 Compliance: JAWS, WAVE",
      "Agile SCRUM",
      "Software Development Life Cycle(SDLC) / Software Testing Life Cycle (STLC)",
      "ETL Tool: Informatica Power Center",
      "BI Tool: Business Object and OBIEE"
    ],
    type: "non-technical"
  }
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>SUNDAY, NOVEMBER 17, 2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="flex items-center hover:text-primary">
                <Phone className="h-4 w-4 mr-1" />
                <span className="sr-only">Phone</span>
              </Link>
              <Link href="#" className="flex items-center hover:text-primary">
                <Mail className="h-4 w-4 mr-1" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#003366] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
            <Image
                src="/public/banner/training.png"
                alt="Secure Info-Tech Solutions Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
                />

              <span className="text-sm">Finding Solutions for complex business</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-blue-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[300px]">
        <Image
           src="/banner/training.png"
          alt="Training session in progress"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">TRAINING</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Secure Info-Tech Solutions (SITS)</span> provides in-depth training program for our various
              Technical and Non-Technical Professionals.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-8">
          {trainingPrograms.map((program, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{program.description}</p>
                {program.topics && (
                  <ul className="grid gap-3">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/register">Register Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm">
            Secure Info-Tech Solutions © 2008-2024 All rights carefully reserved and preserved.
          </div>
        </div>
      </footer>
    </div>
  )
}