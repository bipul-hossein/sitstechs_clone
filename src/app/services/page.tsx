import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Calendar } from 'lucide-react'
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
  

const serviceCategories = [
  {
    title: "Consulting Services/ Staffing Services",
    items: [
      "System Development and Integration",
      "Data Warehousing",
      "Business Intelligence Services",
      "Technology Consulting Services",
      "Business System Analysis",
      "Software Test Engineering"
    ]
  },
  {
    title: "System Development and Integration",
    description: "Current technology-heavy marketplace, many of our clients consider an integrated platform to be mission-critical. We have advised clients on numerous complex systems integration projects. We engage with clients in every phase of these transactions, including the initial structuring of the transaction, documenting the business deal, assessing the development of ongoing potential risks and managing the project through completion.",
    benefits: [
      "Integration points are detected early and are easy to track down due to small change sets. This saves both time and money over the lifespan of a project",
      "Continuous Integration avoids last-minute chaos at release dates, when everyone tries to check in their slightly incompatible versions",
      "If unit tests fail or a bug emerges, if developers need to revert the codebase to a bug-free state without debugging, only a small number of changes are lost",
      "Constant availability of a 'current' build for testing, demo, or release purposes",
      "Enforces discipline of frequent automated testing",
      "Immediate feedback on system-wide impact of local changes"
    ]
  },
  {
    title: "Data Warehousing",
    description: "SITS Warehouse specialists evaluate, install, configure and implement high-performance data warehouse architectures on various environments. Our solutions are designed to be flexible, and scalable, with future add-on capacity to avoid unnecessary up-front costs due to over-provisioning.",
    services: [
      "Strategic Planning, BI Assessments",
      "BI Tool Selection",
      "Prototyping and Proof-of-Concept Exercises",
      "Data Migration, Data Integration",
      "BI Architecture Design and Optimization",
      "Analytics Reporting Architecture, Dashboard Development"
    ]
  },
  {
    title: "Business Intelligence Services",
    description: "Business Intelligence has transformed from being able to integrate data and create graphs, reports and dashboards. With the changing market dynamics where we see multiple mergers and Acquisitions, addition of new tools, majority of the workforce is on the move so mobility become critical.",
    features: [
      "Dimensionalization, mapping and standardization",
      "Multidimensional aggregation and allocation",
      "Real time reporting with analytical alert",
      "A method of interfacing with unstructured data sources",
      "Group consolidation, budgeting and rolling forecasts",
      "Statistical inference and probabilistic simulation",
      "Key performance indicators optimization",
      "Version control and process management"
    ]
  }
]

export default function ServicesPage() {
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
               src="/public/banner/services.png"
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
          src="/banner/services.png"
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
        <div className="grid gap-12">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {category.description && (
                  <p className="text-gray-600 mb-6">{category.description}</p>
                )}
                {category.items && (
                  <ul className="grid gap-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {category.benefits && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-4">Key Benefits:</h3>
                    <ul className="grid gap-2">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {category.services && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-4">Our Services Include:</h3>
                    <ul className="grid gap-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {category.features && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-4">Key Features:</h3>
                    <ul className="grid gap-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
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