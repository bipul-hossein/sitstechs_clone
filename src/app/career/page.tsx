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

const careerFields = [
  "Software Development",
  "Agile/SCRUM",
  "Data Warehousing and Business Intelligence",
  "Project Management",
  "Software Quality Assurance",
  "Software Test Engineering",
  "Java/J2EE",
  "Oracle",
  "Net",
  "Networking",
  "Application Support"
]

const qualifications = [
  "Bachelors/Masters in Computer Science",
  "Computer Engineering",
  "Computer Information Systems (CIS)",
  "Management Information System(MIS)",
  "Business Administration",
  "MBA",
  "Oracle DBA"
]

export default function CareersPage() {
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
                src="/public/banner/carrer.png"
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
           src="/banner/carrer.png"
          alt="Professional team members"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">CAREER</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Secure Info-Tech Solutions (SITS)</span> is always looking to employ Experienced IT Professionals 
              and help them to build solid careers in the Information Technology (IT) Industry. We are offering the opportunity to work with our clients.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Opportunities Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                We have an abundance of opportunities for the students who have just completed Bachelors/Masters preferably in
                Computer Science or Computer Engineering, Computer Information Systems (CIS), Management Information
                System(MIS), Business Administration, MBAs, Oracle DBAs and also for the people who have worked in development
                and software quality testing fields.
              </p>
              <p className="text-gray-700">
                Secure Info-Tech Solutions provides all the technical training under the supervision of
                our highly experienced and qualified team. We not only provide the job training for QA and BA; but we are also provide
                management training enabling our consultants to secure management positions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Required Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-gray-700">{qualification}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>We have opportunities in various fields including:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerFields.map((field, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-gray-700">{field}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Apply CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/apply">Apply Now</Link>
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