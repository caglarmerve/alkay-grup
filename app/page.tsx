"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wrench,
  Palette,
  Settings,
  CheckCircle,
  Calendar,
  MessageCircle,
  ArrowRight,
  Menu,
  Gauge,
  ChevronRight,
  Mail,
  Globe,
  Search,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeBrand, setActiveBrand] = useState("volkswagen")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setSidebarOpen(false)
    }
  }

  // SVG logoları için component'ler - Gerçek logolar
  const VolkswagenLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="45" fill="#1E3A8A" stroke="#1E40AF" strokeWidth="2" />
      <text x="50" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        VW
      </text>
      <path d="M25 60 L50 40 L75 60 Z" fill="white" />
    </svg>
  )

  const AudiLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="25" cy="50" r="15" fill="none" stroke="#DC2626" strokeWidth="3" />
      <circle cx="40" cy="50" r="15" fill="none" stroke="#DC2626" strokeWidth="3" />
      <circle cx="60" cy="50" r="15" fill="none" stroke="#DC2626" strokeWidth="3" />
      <circle cx="75" cy="50" r="15" fill="none" stroke="#DC2626" strokeWidth="3" />
    </svg>
  )

  const SeatLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect x="20" y="30" width="60" height="40" rx="5" fill="#EF4444" stroke="#DC2626" strokeWidth="2" />
      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
        SEAT
      </text>
    </svg>
  )

  const SkodaLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="40" fill="#059669" stroke="#047857" strokeWidth="2" />
      <path d="M30 35 Q50 25 70 35 Q65 50 50 55 Q35 50 30 35 Z" fill="white" />
      <circle cx="45" cy="42" r="3" fill="#059669" />
    </svg>
  )

  const FiatLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <rect x="15" y="35" width="70" height="30" rx="15" fill="#7C2D12" stroke="#92400E" strokeWidth="2" />
      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        FIAT
      </text>
    </svg>
  )

  const navigationItems = [
    { id: "anasayfa", label: "Anasayfa", icon: null },
    { id: "markalar", label: "Markalarımız", icon: ChevronRight },
    { id: "hizmetler", label: "Hizmetlerimiz", icon: ChevronRight },
    { id: "hakkimizda", label: "Hakkımızda", icon: ChevronRight },
    { id: "galeri", label: "Galeri", icon: ChevronRight },
    { id: "yorumlar", label: "Müşteri Yorumları", icon: ChevronRight },
    { id: "iletisim", label: "İletişim", icon: ChevronRight },
  ]

  return (
    <div className="min-h-screen bg-white flex">
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar Navigation - Mobile Responsive */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ${
          sidebarOpen ? "w-80" : "w-0"
        } lg:w-80 overflow-hidden`}
      >
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Geçici logo - gerçek logo yüklenene kadar */}
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">AG</span>
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">ALKAY GRUP</span>
            </div>
          </div>
        </div>

        <nav className="p-4 sm:p-6">
          <ul className="space-y-1 sm:space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    item.id === "anasayfa" ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollToSection(item.id)
                  }
                  className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 text-left text-gray-700 hover:text-green-800 hover:bg-green-100 rounded-lg transition-all duration-200 group text-sm sm:text-base"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.icon && (
                    <item.icon className="h-4 w-4 text-gray-400 group-hover:text-green-800 transition-colors" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://wa.me/905070503333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-all duration-200 text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href="mailto:alkaygrup@gmail.com"
                className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-all duration-200 text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">E-posta</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-80">
        {/* Top Header Bar */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                <a
                  href="mailto:alkaygrup@gmail.com"
                  className="flex items-center space-x-2 hover:text-green-800 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden lg:inline">alkaygrup@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Türkiye</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>
        {/* Hero Section - YENİ GÖRSEL İLE GÜNCELLENDİ */}
        <section className="relative min-h-screen h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-banner.png"
              alt="Alkay Grup - Avrupa Otomotiv Markalarında Uzman Servis"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 sm:w-12 h-1 bg-green-600"></div>
                    <span className="text-green-400 font-medium tracking-wide text-sm sm:text-base">ALKAY GRUP</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block">Avrupa Markalarında</span>
                    <span className="block text-green-400">Uzman Çözümler</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed">
                    Volkswagen, Seat, Skoda, Audi ve Fiat markalarında 15+ yıllık deneyimimiz ile yetkili servis
                    kalitesinde hizmet sunuyoruz.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto shadow-lg"
                    onClick={() => scrollToSection("iletisim")}
                  >
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                    Ücretsiz Ön Değerlendirme
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                    onClick={() => scrollToSection("hizmetler")}
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                    Hizmetlerimizi Keşfedin
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                      2500+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base">Servis Edilen Araç</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                      15+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                      %99
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base">Müşteri Memnuniyeti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>
        {/* Brands Section */}
        <section id="markalar" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">
                  UZMAN OLDUĞUMUZ MARKALAR
                </span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Marka Bazında Özel Hizmetler</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Her marka için özelleşmiş hizmet anlayışımız ile aracınızın tüm ihtiyaçları için tek adres
              </p>
            </div>

            {/* Brand Tabs */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { id: "volkswagen", name: "Volkswagen", color: "bg-green-800", LogoComponent: VolkswagenLogo },
                  { id: "audi", name: "Audi", color: "bg-green-800", LogoComponent: AudiLogo },
                  { id: "seat", name: "Seat", color: "bg-green-800", LogoComponent: SeatLogo },
                  { id: "skoda", name: "Škoda", color: "bg-green-800", LogoComponent: SkodaLogo },
                  { id: "fiat", name: "Fiat", color: "bg-green-800", LogoComponent: FiatLogo },
                ].map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setActiveBrand(brand.id)}
                    className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base ${
                      activeBrand === brand.id
                        ? `${brand.color} text-white shadow-lg scale-105`
                        : "bg-white text-gray-700 hover:shadow-md hover:scale-102"
                    }`}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                      <brand.LogoComponent />
                    </div>
                    <span className="font-semibold">{brand.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Content - Sadece Volkswagen'i gösteriyorum, diğerleri aynı kalacak */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              {activeBrand === "volkswagen" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <VolkswagenLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Volkswagen</h3>
                          <p className="text-green-800 font-medium">Alman Mühendislik Hassasiyeti</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Volkswagen araçlarınız için ODIS orjinal test cihazı ile hassas teşhis ve orjinal parça
                        garantisi. DSG şanzıman uzmanımız ile tüm Volkswagen modellerine özel hizmet.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">500+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen VW</div>
                        </div>
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">%98</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/volkswagen-service.png"
                        alt="Alkay Grup Volkswagen Uzman Servisi"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        icon: Gauge,
                        title: "ODIS Teşhis Sistemi",
                        description: "Orjinal Volkswagen test cihazı ile hassas arıza tespiti",
                        features: ["Motor elektronik kontrolü", "ABS/ESP sistem testi", "Airbag sistem kontrolü"],
                      },
                      {
                        icon: Settings,
                        title: "DSG Şanzıman Uzmanı",
                        description: "DSG şanzıman arıza tespit ve onarımında uzman kadro",
                        features: ["DSG kavrama değişimi", "Yazılım güncellemeleri", "Performans optimizasyonu"],
                      },
                      {
                        icon: Wrench,
                        title: "Motor & Mekanik",
                        description: "TSI, TDI motorlar için özel hizmetler",
                        features: ["1.5 TSI sente aparatı", "Turbo sistem bakımı", "Enjektör temizliği"],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-green-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-slate-700 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Audi brand content section'ını ekle */}
              {activeBrand === "audi" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                          <AudiLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Audi</h3>
                          <p className="text-red-600 font-medium">Vorsprung durch Technik</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Audi araçlarınız için VCDS ve ODIS uyumlu test cihazları ile premium hizmet. Quattro sistemler,
                        TFSI motorlar ve MMI sistemleri konusunda uzman kadromuz.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">300+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen Audi</div>
                        </div>
                        <div className="bg-red-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">%97</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/audi-service.jpg"
                        alt="Alkay Grup Audi Uzman Servisi"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        icon: Gauge,
                        title: "VCDS & ODIS Teşhis",
                        description: "Audi özel test cihazları ile detaylı arıza tespiti",
                        features: [
                          "VCDS profesyonel teşhis",
                          "ODIS uyumlu sistem",
                          "MMI sistem kontrolü",
                          "Quattro sistem testi",
                        ],
                      },
                      {
                        icon: Settings,
                        title: "TFSI Motor Uzmanı",
                        description: "TFSI motorlar için özelleşmiş hizmetler",
                        features: [
                          "TFSI motor bakımı",
                          "Turbo sistem onarımı",
                          "Karbon temizliği",
                          "Performans optimizasyonu",
                        ],
                      },
                      {
                        icon: Wrench,
                        title: "Quattro Sistem",
                        description: "Audi Quattro 4x4 sistemleri için özel hizmet",
                        features: [
                          "Quattro diferansiyel",
                          "Torsen sistem bakımı",
                          "Haldex servisi",
                          "4x4 sistem kontrolü",
                        ],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-red-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-red-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-slate-700 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Seat brand content section'ını ekle */}
              {activeBrand === "seat" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                          <SeatLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Seat</h3>
                          <p className="text-red-600 font-medium">Auto Emoción</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        SEAT araçlarınız için VCDS ve Autocom test cihazları ile sportif karaktere uygun hizmet. TSI
                        motorlar, DSG şanzımanlar ve SEAT Connect sistemleri konusunda uzman kadromuz.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">250+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen SEAT</div>
                        </div>
                        <div className="bg-red-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">%96</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/seat-service.jpg"
                        alt="Alkay Grup SEAT Uzman Servisi"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        icon: Gauge,
                        title: "VCDS & Autocom Teşhis",
                        description: "SEAT özel test cihazları ile sportif performans testi",
                        features: [
                          "VCDS profesyonel teşhis",
                          "Autocom multi-marka",
                          "SEAT Connect kontrolü",
                          "Sportif mod ayarları",
                        ],
                      },
                      {
                        icon: Settings,
                        title: "TSI Motor & DSG",
                        description: "SEAT TSI motorlar ve DSG şanzıman uzmanı",
                        features: [
                          "TSI motor bakımı",
                          "DSG şanzıman servisi",
                          "Turbo sistem onarımı",
                          "Performans optimizasyonu",
                        ],
                      },
                      {
                        icon: Wrench,
                        title: "Sportif Modifikasyon",
                        description: "SEAT Cupra ve sportif modeller için özel hizmet",
                        features: [
                          "Cupra performans ayarı",
                          "Sportif süspansiyon",
                          "Fren sistem bakımı",
                          "Egzoz sistem servisi",
                        ],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-red-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-red-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-slate-700 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* ŠKODA brand content section'ını ekle - seat section'ından sonra */}
              {activeBrand === "skoda" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <SkodaLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Škoda</h3>
                          <p className="text-green-600 font-medium">Simply Clever</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        ŠKODA araçlarınız için VCDS ve Autocom test cihazları ile akıllı çözümler. TSI/TDI motorlar, DSG
                        şanzımanlar ve ŠKODA Connect sistemleri konusunda uzman kadromuz.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">200+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen ŠKODA</div>
                        </div>
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">%95</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/skoda-service.jpg"
                        alt="Alkay Grup ŠKODA Uzman Servisi"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        icon: Gauge,
                        title: "VCDS & Autocom Teşhis",
                        description: "ŠKODA özel test cihazları ile akıllı teşhis sistemi",
                        features: [
                          "VCDS profesyonel teşhis",
                          "Autocom multi-marka",
                          "ŠKODA Connect kontrolü",
                          "Akıllı sistem testleri",
                        ],
                      },
                      {
                        icon: Settings,
                        title: "TSI/TDI Motor Uzmanı",
                        description: "ŠKODA TSI ve TDI motorlar için özelleşmiş hizmetler",
                        features: [
                          "TSI motor bakımı",
                          "TDI dizel sistem",
                          "DSG şanzıman servisi",
                          "Turbo sistem onarımı",
                        ],
                      },
                      {
                        icon: Wrench,
                        title: "Simply Clever Çözümler",
                        description: "ŠKODA'nın akıllı çözümleri için özel hizmet",
                        features: [
                          "Akıllı park asistanı",
                          "Fren sistem bakımı",
                          "Süspansiyon servisi",
                          "Elektrikli sistem kontrolü",
                        ],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-green-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-slate-700 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeBrand === "fiat" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                          <FiatLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Fiat</h3>
                          <p className="text-yellow-600 font-medium">İtalyan Tutkusu</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        FIAT araçlarınız için Autocom test cihazları ile ekonomik ve güvenilir çözümler. Multijet dizel
                        motorlar, ticari araçlar ve FIAT Connect sistemleri konusunda uzman kadromuz ile İtalyan
                        mühendisliğinin keyfini çıkarın.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-yellow-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-yellow-600 mb-1">150+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen Fiat</div>
                        </div>
                        <div className="bg-yellow-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-yellow-600 mb-1">%94</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/fiat-service.png"
                        alt="Alkay Grup Fiat Uzman Servisi"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        icon: Gauge,
                        title: "Autocom Teşhis Sistemi",
                        description: "FIAT özel test cihazları ile ekonomik arıza tespiti",
                        features: [
                          "Autocom multi-marka teşhis",
                          "FIAT Connect kontrolü",
                          "Ekonomik sistem testleri",
                          "Ticari araç uzmanı",
                        ],
                      },
                      {
                        icon: Settings,
                        title: "Multijet Dizel Uzmanı",
                        description: "FIAT Multijet motorlar için özelleşmiş hizmetler",
                        features: [
                          "Multijet motor bakımı",
                          "Dizel enjektör temizliği",
                          "Turbo sistem onarımı",
                          "DPF filtre temizliği",
                        ],
                      },
                      {
                        icon: Wrench,
                        title: "Ticari Araç Servisi",
                        description: "FIAT ticari araçlar için özel hizmet",
                        features: [
                          "Ducato servis uzmanı",
                          "Fiorino bakım servisi",
                          "Doblo sistem kontrolü",
                          "Ticari araç garantisi",
                        ],
                      },
                    ].map((service, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-all duration-300 border border-yellow-100"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-slate-700 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Diğer markalar için aynı yapı devam eder... */}
              {/* Kısalık için sadece Volkswagen'i gösterdim */}
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="hizmetler" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">
                  PROFESYONEL HİZMETLERİMİZ
                </span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Kapsamlı Otomotiv Çözümleri</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Modern ekipmanlarımız ve uzman kadromuzla hizmet veriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Gauge,
                  title: "Elektronik Arıza Tespit",
                  description: "ODIS, VCDS ve Autocom cihazları ile hassas teşhis",
                  image: "/images/elektronik-teshis.jpg",
                  features: [
                    "ODIS orjinal test cihazı",
                    "VCDS profesyonel teşhis",
                    "Autocom multi-marka",
                    "Motor elektronik kontrolü",
                  ],
                },
                {
                  icon: Settings,
                  title: "DSG & Otomatik Şanzıman",
                  description: "DSG şanzıman uzmanı ve otomatik şanzıman servisi",
                  image: "/images/dsg-sanziman.jpg",
                  features: [
                    "DSG kavrama değişimi",
                    "DSG arıza tespiti",
                    "Otomatik şanzıman onarımı",
                    "Şanzıman yağ değişimi",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Motor Onarım & Bakım",
                  description: "TSI, TDI, TFSI motorlar için özel hizmetler",
                  image: "/images/motor-onarim.png",
                  features: ["Motor revizyonu", "Turbo sistem bakımı", "Enjektör temizliği", "1.5 TSI sente aparatı"],
                },
                {
                  icon: Settings,
                  title: "Klima Sistem Servisi",
                  description: "Tüm klima sistemleri için kapsamlı hizmet",
                  image: "/images/klima-servis.jpg",
                  features: [
                    "Klima arıza tespiti",
                    "R134a/R1234yf gaz dolumu",
                    "Kompresör onarımı",
                    "Evaporatör temizliği",
                  ],
                },
                {
                  icon: Palette,
                  title: "Kaporta & Boya",
                  description: "Profesyonel fırın boya ve kaporta onarımı",
                  image: "/images/kaporta-boya.jpg",
                  features: ["Profesyonel fırın boya", "Renk eşleştirme", "Kaporta onarımları", "Çizik giderme"],
                },
                {
                  icon: CheckCircle,
                  title: "Periyodik Bakım",
                  description: "Marka bazında periyodik bakım hizmetleri",
                  image: "/images/periyodik-bakim.jpg",
                  features: ["Motor yağ değişimi", "Filtre değişimleri", "Sistem kontrolleri", "Sıvı seviyeleri"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={350}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-gradient-to-br from-green-800 to-green-900 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Hizmet Detayları:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-800 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="hakkimizda" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">HAKKIMIZDA</span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Güvenilir Hizmet, <span className="text-green-800">Uzman Çözümler</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                2008 yılından bu yana Avrupa'nın prestijli otomotiv markalarında uzmanlaşmış, müşteri memnuniyetini
                önceleyerek hizmet sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">15+ Yıllık Deneyim</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Volkswagen, Audi, SEAT, Škoda ve Fiat markalarında uzmanlaşmış kadromuz ile yetkili servis
                    kalitesinde hizmet sunuyoruz. Modern ekipmanlarımız ve sürekli eğitim alan teknisyenlerimiz ile
                    aracınızın her türlü ihtiyacını karşılıyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">2500+</div>
                    <div className="text-gray-600 text-sm sm:text-base">Mutlu Müşteri</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <div className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">%99</div>
                    <div className="text-gray-600 text-sm sm:text-base">Memnuniyet Oranı</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                    <span className="text-gray-700">Orjinal parça garantisi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                    <span className="text-gray-700">Profesyonel test cihazları</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                    <span className="text-gray-700">Uzman teknisyen kadrosu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                    <span className="text-gray-700">Şeffaf fiyatlandırma</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/hakkimizda-teknisyen.jpeg"
                  alt="Alkay Grup Profesyonel Teknisyen Ekibi"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-800 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-sm sm:text-base">Yıl Deneyim</div>
                </div>
              </div>
            </div>

            {/* Değerlerimiz */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-800" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Kalite Garantisi</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Tüm işlemlerimizde orjinal parça kullanımı ve işçilik garantisi sunuyoruz.
                </p>
              </div>

              <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-green-800" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Uzman Kadro</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Sürekli eğitim alan, sertifikalı teknisyenlerimiz ile profesyonel hizmet.
                </p>
              </div>

              <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-green-800" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Modern Ekipman</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Son teknoloji test cihazları ve modern servis ekipmanları kullanıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery Section'dan sonra, Services Section'dan önce Galeri bölümünü ekle: */}
        {/* Gallery Section */}
        <section id="galeri" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">GALERİMİZ</span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Çalışma Alanımız & <span className="text-green-800">Ekipmanlarımız</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Modern tesisimiz, son teknoloji ekipmanlarımız ve profesyonel çalışma ortamımızı keşfedin.
              </p>
            </div>

            {/* Gallery Categories */}
            <div className="space-y-12 sm:space-y-16">
              {/* Çalışma Alanlarımız */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                  Çalışma Alanlarımız
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/modern-servis-alani.jpg"
                      alt="Modern Servis Alanı - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Modern Servis Alanı</h4>
                      <p className="text-sm">Geniş ve organize çalışma alanımız</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/kaporta-boya-firini.png"
                      alt="Kaporta Boya Fırını - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Profesyonel Boya Fırını</h4>
                      <p className="text-sm">Yüksek kalite boya işlemleri</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/musteri-bekleme-salonu.jpg"
                      alt="Müşteri Bekleme Salonu - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Konforlu Bekleme Salonu</h4>
                      <p className="text-sm">Müşterilerimiz için rahat ortam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Uzman Ekipmanlarımız */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                  Uzman Ekipmanlarımız
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/odis-test-cihazi.jpg"
                      alt="ODIS Test Cihazı - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">ODIS Test Cihazı</h4>
                      <p className="text-sm">Orjinal Volkswagen teşhis sistemi</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/klima-servisi-ekipman.jpg"
                      alt="Klima Servisi Ekipmanları - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Klima Servisi Ekipmanları</h4>
                      <p className="text-sm">Profesyonel AC basınç göstergeleri</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/dsg-sanziman-servisi.png"
                      alt="DSG Şanzıman Servisi - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">DSG Şanzıman Uzmanlığı</h4>
                      <p className="text-sm">İleri teknoloji şanzıman servisi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profesyonel Hizmet */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                  Profesyonel Hizmet Sürecimiz
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/uzman-teknisyen-kadrosu.jpg"
                      alt="Uzman Teknisyen Kadrosu - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Uzman Teknisyen Kadrosu</h4>
                      <p className="text-sm">Deneyimli ve sertifikalı ekibimiz</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/orjinal-parca-deposu.jpg"
                      alt="Orjinal Parça Deposu - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Orjinal Parça Garantisi</h4>
                      <p className="text-sm">Kaliteli yedek parça stoğumuz</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/galeri/arac-teslim-alani.jpg"
                      alt="Araç Teslim Alanı - Alkay Grup"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold mb-1">Profesyonel Araç Teslimi</h4>
                      <p className="text-sm">Müşteri memnuniyeti odaklı hizmet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="bg-green-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Tesisimizi Ziyaret Edin</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Modern tesisimizi ve profesyonel ekipmanlarımızı yakından görmek için randevu alın.
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4"
                  onClick={() => scrollToSection("iletisim")}
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Randevu Al
                </Button>
              </div>
            </div>
          </div>
        </section>
        // Gallery Section'dan sonra, şu iki bölümü ekle:
        {/* Customer Reviews Section */}
        <section id="yorumlar" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">MÜŞTERİ YORUMLARI</span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Müşterilerimiz <span className="text-green-800">Ne Diyor?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                15+ yıllık deneyimimiz ve kaliteli hizmetimizle kazandığımız müşteri memnuniyeti
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {[
                {
                  name: "Mehmet Yılmaz",
                  car: "Volkswagen Golf 7 GTI",
                  rating: 5,
                  comment:
                    "DSG şanzıman arızam vardı, başka servislerde çözüm bulamadım. Alkay Grup'ta ODIS cihazı ile teşhis edildi ve kısa sürede onarıldı. Gerçekten uzman bir ekip, herkese tavsiye ederim.",
                  service: "DSG Şanzıman Onarımı",
                },
                {
                  name: "Ayşe Demir",
                  car: "Audi A3 Sportback",
                  rating: 5,
                  comment:
                    "Audi'min klima sistemi çalışmıyordu. Profesyonel yaklaşımları ve şeffaf fiyatlandırmaları çok beğendim. İşlerini gerçekten iyi yapıyorlar, kesinlikle tekrar geleceğim.",
                  service: "Klima Sistem Servisi",
                },
                {
                  name: "Can Özkan",
                  car: "SEAT Leon Cupra",
                  rating: 5,
                  comment:
                    "Cupra'mın performans ayarları için gittim. VCDS ile yapılan kodlamalar mükemmeldi. Araç artık çok daha iyi performans gösteriyor. Teşekkürler Alkay Grup!",
                  service: "Performans Optimizasyonu",
                },
                {
                  name: "Fatma Kaya",
                  car: "Škoda Octavia",
                  rating: 5,
                  comment:
                    "Periyodik bakım için gittim, çok titiz ve özenli çalışıyorlar. Tüm kontrolleri yapıp detaylı rapor verdiler. Fiyatları da çok makul, memnun kaldım.",
                  service: "Periyodik Bakım",
                },
                {
                  name: "Ali Şahin",
                  car: "Fiat Ducato",
                  rating: 5,
                  comment:
                    "Ticari aracımın motor arızası vardı. Multijet motor konusunda gerçekten uzmanlar. Hızlı ve kaliteli hizmet aldım. İşimi aksatmadan çözdüler.",
                  service: "Motor Onarımı",
                },
                {
                  name: "Zeynep Arslan",
                  car: "Volkswagen Passat",
                  rating: 5,
                  comment:
                    "Elektronik arıza tespiti için geldim. ODIS cihazı ile detaylı teşhis yapıldı ve sorun kısa sürede çözüldü. Çok profesyonel bir hizmet aldım, teşekkürler.",
                  service: "Elektronik Teşhis",
                },
              ].map((review, index) => (
                <Card
                  key={index}
                  className="bg-white hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-600 mb-4 italic leading-relaxed">"{review.comment}"</p>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.car}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {review.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">%99</div>
                  <div className="text-gray-600 text-sm sm:text-base">Müşteri Memnuniyeti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">2500+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">4.9</div>
                  <div className="text-gray-600 text-sm sm:text-base">Ortalama Puan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">%95</div>
                  <div className="text-gray-600 text-sm sm:text-base">Tekrar Tercih</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="iletisim" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">İLETİŞİM</span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Bizimle <span className="text-green-800">İletişime Geçin</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Aracınız için profesyonel hizmet almak üzere randevu alın veya sorularınızı bize iletin
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Randevu Formu</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Soyad
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="0555 123 45 67"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 mb-2">
                        Araç Markası
                      </label>
                      <select
                        id="carBrand"
                        name="carBrand"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Marka Seçin</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="audi">Audi</option>
                        <option value="seat">SEAT</option>
                        <option value="skoda">Škoda</option>
                        <option value="fiat">Fiat</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                        Model
                      </label>
                      <input
                        type="text"
                        id="carModel"
                        name="carModel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Golf, A3, Leon..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Hizmet Seçin</option>
                      <option value="elektronik-teshis">Elektronik Arıza Tespit</option>
                      <option value="dsg-sanziman">DSG & Otomatik Şanzıman</option>
                      <option value="motor-onarim">Motor Onarım & Bakım</option>
                      <option value="klima-servis">Klima Sistem Servisi</option>
                      <option value="kaporta-boya">Kaporta & Boya</option>
                      <option value="periyodik-bakim">Periyodik Bakım</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Aracınızla ilgili sorun veya isteklerinizi detaylı olarak açıklayın..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Randevu Talebi Gönder
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                        <p className="text-gray-600">
                          Örnek Mahallesi, Otomotiv Caddesi No:123
                          <br />
                          34000 İstanbul, Türkiye
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                        <p className="text-gray-600">
                          <a href="tel:+905070503333" className="hover:text-green-600 transition-colors">
                            +90 507 050 33 33
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                        <p className="text-gray-600">
                          <a href="mailto:alkaygrup@gmail.com" className="hover:text-green-600 transition-colors">
                            alkaygrup@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Pazartesi - Cumartesi: 08:00 - 18:00</p>
                          <p>Pazar: Kapalı</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="https://wa.me/905070503333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Map */}
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2441!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOMKwNTgnNDIuMiJF!5e0!3m2!1str!2str!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        {/* About Section */}
      </div>
    </div>
  )
}
