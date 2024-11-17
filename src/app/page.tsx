import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Phone, Mail, Calendar } from 'lucide-react'
import Slider from "@/components/ui/slider/Slider"


const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Training", href: "/training" },
  { name: "Careers", href: "/career" },
  { name: "Contact Us", href: "/contact" }
]


export default function Component() {
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
                src="/placeholder.svg?height=60&width=200"
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
      <div className="relative h-[300px] bg-gray-900">
          <Slider/>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Secure Info-Tech Solutions (SITS)</h2>
            <p className="text-gray-600 mb-4">
              Secure Info-Tech Solutions (SITS) is an IT services firm that specializes in Consulting services, Training, Software
              Development, Software Quality Assurance and Application Supports to the Information Technology (IT) Industry. Our
              technical expertise lies in the implementation of strategic QA strategies and the latest QA testing tools.
            </p>
            <p className="text-gray-600 mb-4">
              Our consulting and projects divisions allow for on-site, off-site development and supports. We provide clients end-to-end
              business solutions. We focus on continually improving and excelling at our services to be the best in the industry while
              Finding Solutions to complex business problems.
            </p>
            <Link href="/about-us" className="text-primary hover:underline">Read More</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">News & Events</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <Link href="#" className="text-gray-600 hover:text-primary">Data Modeling Development</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <Link href="#" className="text-gray-600 hover:text-primary">Deploy IT Infrastructure solutions</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <Link href="#" className="text-gray-600 hover:text-primary">Data Centre Security</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Section */}
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "E-Businesses Solutions",
                  "Enterprise Applications",
                  "ORACLE",
                  "SAP",
                  "Database Management Solutions",
                  "Networking",
                  "Software Quality Assurance & Testing",
                ].map((service) => (
                  <li key={service} className="flex items-center space-x-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    <Link href="#" className="text-sm hover:text-primary">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="text-sm text-primary hover:underline mt-4 block">More</Link>
            </CardContent>
          </Card>

          {/* Solutions Section */}
          <Card>
            <CardHeader>
              <CardTitle>Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Requirement Gathering",
                  "Business Process Re-engineering",
                  "Business Analysis",
                  "Software Quality Assurance and Testing",
                  "Technology Consulting",
                  "Data Analysis",
                  "Business Object",
                ].map((solution) => (
                  <li key={solution} className="flex items-center space-x-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    <Link href="#" className="text-sm hover:text-primary">
                      {solution}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="text-sm text-primary hover:underline mt-4 block">More</Link>
            </CardContent>
          </Card>

          {/* Training Section */}
          <Card>
            <CardHeader>
              <CardTitle>Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We have in-depth training program for various corporations and Technical or Non-Technical Professionals.
              </p>
              <ul className="space-y-2">
                {[
                  "Automation & framework on different platform",
                  "Risk Analysis and Configuration Management",
                  "COTS product",
                ].map((training) => (
                  <li key={training} className="flex items-center space-x-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    <Link href="#" className="text-sm hover:text-primary">
                      {training}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/training" className="text-sm text-primary hover:underline mt-4 block">More</Link>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Secure Info-Tech Solutions © 2008-2024 All rights carefully reserved and preserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}