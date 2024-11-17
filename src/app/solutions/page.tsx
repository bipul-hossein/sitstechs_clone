import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Calendar } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Training", href: "/training" },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" }
  ]
  
const solutionAreas = [
  "System Development and Maintenance",
  "Data Warehousing and Business Intelligence Solutions",
  "Business Process Re-engineering",
  "Software Quality Assurance and Testing",
  "Business Analysis",
  "Technology Consulting",
  "Data Analysis",
  "Change Management",
  "Application Support Analyst",
  "Network Builds, migrations and upgrades"
]



export default function SolutionsPage() {
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
               src="/public/banner/slolution.png"
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
        <Image
          src="/banner/slolution.png"
          alt="Services background"
          width={1200}
          height={400}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">SOLUTIONS</h1>
        
        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Secure Info-Tech Solutions (SITS)</span> committed to provide the best possible highest level of
              service to our clients and business partners to achieve the targeted goals in the following areas.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              {solutionAreas.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Business analytics visualization"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
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