import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Calendar } from 'lucide-react'

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Training", href: "/training" },
  { name: "Careers", href: "/career" },
  { name: "Contact Us", href: "/contact" }
]

export default function AboutUs() {
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
        <Image
          src="/banner/about.png"
          alt="Abstract background"
          width={1200}
          height={400}
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">ABOUT US</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Secure Info-Tech Solutions (SITS)</h2>
              <p className="text-gray-700">
                is an IT services firm that specializes in Consulting services, Training, Software Development, 
                Software Quality Assurance and Application Supports to the Information Technology (IT) Industry. 
                Our technical expertise lies in the implementation of streamlined QA strategies and the latest 
                QA testing tools.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                Our consulting and projects divisions allow for on-site, off-site development and supports. 
                We provide clients end-to-end business solutions. We focus on continually improving and 
                excelling at our services to be the best in the industry while Finding Solutions to complex 
                Business problems.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                Secure Info-Tech Solutions provides clients with customized services including test automation, 
                functional testing, performance testing, and defect management and application support. 
                Secure Info-Tech Solutions also provides training and mentoring services that allow IT 
                organizations to rapidly implement software testing tools. At Secure Info-Tech Solutions, 
                our mission is to provide the expertise that will allow IT organizations to deploy, upgrade 
                and manage critical software systems.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                We provide staff with the skills and experience that any organization can depend on. 
                Secure Info-Tech Solutions employees offer more than just excellent working knowledge 
                of their jobs. They also demonstrate the right attitude in addition to being versatile 
                and flexible, our employees can quickly apply their education and experience to the 
                specific responsibility at work place.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-auto">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Professional working on computer"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-full"
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