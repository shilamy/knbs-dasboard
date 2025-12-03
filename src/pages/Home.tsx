"use client"

import { useNavigate } from "react-router-dom"
import { TopHeader } from "../components/layout/TopHeader"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import {
  Layers,
  ArrowRight,
  BarChart3,
  Users,
  FileText,
  BookOpen,
  Shield,
  ListTree,
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
  BadgeCheck,
  Globe,
  ShieldCheck,
  ChevronRight,
  MessageCircle
  } from "lucide-react"
import Footer  from "../components/layout/Footer"


// Add this contact data array before your component
const contactInfo = [
  {
    title: "Phone Support",
    description: "Direct assistance line",
    value: "+254 (0) 20 317 3000",
    icon: Phone,
    type: "phone",
    action: "call"
  },
  {
    title: "Email",
    description: "General inquiries",
    value: "info@knbs.or.ke",
    icon: Mail,
    type: "email",
    action: "email"
  },
  {
    title: "Our Location",
    description: "Main office",
    value: "Nairobi, Kenya",
    icon: MapPin,
    type: "location",
    action: "locate"
  },
  {
    title: "Working Hours",
    description: "Office availability",
    value: "Mon - Fri: 8AM - 5PM",
    icon: Clock,
    type: "hours",
    action: "view"
  }
];


const handleContactAction = (type, value) => {
  switch(type) {
    case 'phone':
      window.location.href = `tel:${value}`;
      break;
    case 'email':
      window.location.href = `mailto:${value}`;
      break;
    case 'location':
      window.open(`https://maps.app.goo.gl/zn2RSVLg7e1qEQYd8${encodeURIComponent(value)}`, '_blank');
      break;
    default:
      
      console.log(`Viewing ${type}: ${value}`);
  }
};

export function Homepage() {
  const navigate = useNavigate()

  const modules = [
    {
      title: "Quality Reports",
      description:
        "Comprehensive quality evaluation reports for all statistical products and surveys conducted by KNBS",
      icon: Shield,
      path: "/dashboard/metadata/quality-reports",
      iconBg: "bg-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Statistical Dictionary",
      description: "Official definitions of statistical terms, concepts, and methodologies used in national statistics",
      icon: FileText,
      path: "/dashboard/metadata/dictionary",
      iconBg: "bg-purple-600",
      iconColor: "text-purple-600",
    },
    {
      title: "KeSQAF",
      description: "Kenya Statistical Quality Assurance Framework - ensuring adherence to international best practices",
      icon: BookOpen,
      path: "/dashboard/quality/kesqaf",
      iconBg: "bg-green-600",
      iconColor: "text-green-600",
    },
    {
      title: "KSPM",
      description:
        "Kenya Statistics Production Manual - standardized processes and procedures for statistical production",
      icon: Settings,
      path: "/dashboard/quality/kspm",
      iconBg: "bg-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Codelists",
      description: "Standardized classifications, reference codes, and taxonomies used in national statistical systems",
      icon: ListTree,
      path: "/dashboard/metadata/codelists",
      iconBg: "bg-indigo-600",
      iconColor: "text-indigo-600",
    },
    {
      title: "Classifications",
      description: "National and international statistical classifications aligned with global standards",
      icon: Layers,
      path: "/dashboard/metadata/classification/national",
      iconBg: "bg-teal-600",
      iconColor: "text-teal-600",
    },
  ]

  return (
    
    <div className="min-h-screen flex flex-col bg-white">
      <TopHeader />

      {/* Official Notice Banner - MINIMALIST */}
      <div className="bg-knbs-700 text-white py-3 sm:py-4 border-b border-knbs-600">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-sm font-medium text-white/90">
            Official Portal of Kenya National Bureau of Statistics
          </p>
        </div>
      </div>

      {/* Hero Section - MINIMALIST & OFFICIAL */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight text-balance">
              Statistical Quality & Metadata Portal
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              The official repository for Kenya's statistical quality frameworks and metadata standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20">
              <Button
                size="lg"
                className="bg-knbs-600 text-white hover:bg-knbs-700 transition-colors px-8 py-3 text-base font-medium"
                onClick={() => navigate("/dashboard/metadata/quality-reports")}
              >
                Access Resources
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>



<div className="flex flex-col sm:flex-row gap-12 sm:gap-20 justify-center items-center pt-16 sm:pt-20">
  <div className="text-center space-y-3">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#003399]">
      <BadgeCheck className="w-6 h-6" />
    </div>
    <div>
      <p className="text-lg font-bold text-slate-900">ISO Certified</p>
      <p className="text-sm text-slate-500 mt-1">Quality Standards</p>
    </div>
  </div>
  
  <div className="text-center space-y-3">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#003399]">
      <Globe className="w-6 h-6" />
    </div>
    <div>
      <p className="text-lg font-bold text-slate-900">Standards</p>
      <p className="text-sm text-slate-500 mt-1">International Aligned</p>
    </div>
  </div>
  
  <div className="text-center space-y-3">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#003399]">
      <ShieldCheck className="w-6 h-6" />
    </div>
    <div>
      <p className="text-lg font-bold text-slate-900">Quality Assured</p>
      <p className="text-sm text-slate-500 mt-1">Verified & Validated</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Main Modules Section - Government Card Style */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-4 sm:px-5 py-2 bg-slate-100 text-slate-700 rounded-md mb-4 border border-slate-200 text-xs sm:text-sm">
              Resources
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Access Statistical Resources
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive access to Kenya's statistical quality frameworks, metadata repositories, and reference
              documentation in compliance with international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-slate-200 hover:border-knbs-500 bg-white"
                onClick={() => navigate(module.path)}
              >
                <CardHeader className="pb-4 space-y-3 sm:space-y-4">
                  <div
                    className={`w-12 sm:w-14 h-12 sm:h-14 ${module.iconBg} rounded-lg flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    <module.icon className="size-6 sm:size-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                      {module.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 pb-4 sm:pb-6">
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100">
                    <span className="text-xs sm:text-sm text-knbs-600 group-hover:text-knbs-700 font-medium">
                      Access Resource
                    </span>
                    <ArrowRight className="size-4 text-knbs-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Key Features - Government Benefits */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-4 sm:px-5 py-2 bg-slate-100 text-slate-700 rounded-md mb-4 border border-slate-200 text-xs sm:text-sm">
              Platform Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Why Use This Platform?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Designed to serve researchers, policymakers, government agencies, development partners, and the general
              public
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Structured & Standardized */}
            <div className="text-center p-6 sm:p-8 bg-slate-50 rounded-lg border-2 border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-knbs-600 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md flex-shrink-0">
                <BarChart3 className="size-7 sm:size-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Structured & Standardized</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Organized statistical information following international metadata standards (SDMX, DDI) for seamless
                integration and interoperability.
              </p>
            </div>

            {/* Accessible & Transparent */}
            <div className="text-center p-6 sm:p-8 bg-slate-50 rounded-lg border-2 border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-knbs-600 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md flex-shrink-0">
                <Users className="size-7 sm:size-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Accessible & Transparent</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                User-friendly interface providing open access to statistical methodologies, quality reports, and
                documentation for informed decision-making.
              </p>
            </div>

            {/* Quality Assured */}
            <div className="text-center p-6 sm:p-8 bg-slate-50 rounded-lg border-2 border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-knbs-600 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md flex-shrink-0">
                <Shield className="size-7 sm:size-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Quality Assured</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                All statistical outputs undergo rigorous quality assurance processes aligned with KeSQAF and
                international best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Information Section */}
     {/* Enhanced Contact & Information Section */}
<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
    {/* Header with improved visual impact */}
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-knbs-50 mb-5">
        <MessageCircle className="size-8 text-knbs-600" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
        Get In <span className="text-knbs-600">Touch</span>
      </h2>
      <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Our dedicated team is ready to assist with all your statistical data and information needs
      </p>
    </div>

    {/* Enhanced contact cards with better visual hierarchy */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {contactInfo.map((item, index) => (
        <div 
          key={index}
          className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-100 text-center 
                     hover:shadow-xl hover:border-knbs-100 hover:-translate-y-1 
                     transition-all duration-300 group cursor-pointer"
          onClick={() => handleContactAction(item.type, item.value)}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-knbs-50 to-knbs-100 rounded-xl 
                          flex items-center justify-center mx-auto mb-5 
                          group-hover:from-knbs-100 group-hover:to-knbs-200 transition-all">
            <item.icon className="size-7 text-knbs-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
          <p className="text-sm text-slate-600 mb-2">{item.description}</p>
          <p className="text-base font-medium text-slate-800 group-hover:text-knbs-700 transition-colors">
            {item.value}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="inline-flex items-center text-xs text-knbs-500 font-medium">
              Click to {item.action}
              <ChevronRight className="ml-1 size-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Enhanced call-to-action section */}
    <div className="mt-14 sm:mt-16 text-center">
      <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
        For detailed reports, publications, and comprehensive statistical data, visit our main portal
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          className="px-8 py-6 text-base font-medium bg-gradient-to-r from-knbs-600 to-knbs-700 
                     text-white hover:from-knbs-700 hover:to-knbs-800 shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.open("https://www.knbs.or.ke", "_blank")}
        >
          <Globe className="mr-3 size-5" />
          Visit Official KNBS Website
        </Button>
       
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
