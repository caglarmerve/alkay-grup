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
  Star,
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

  // SVG logoları için component'ler
  const VolkswagenLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <image href="/images/volkswagen.svg" width="100" height="100" />
    </svg>
  )

  const AudiLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <image href="/images/audi.svg" width="100" height="100" />
    </svg>
  )

  const SeatLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <image href="/images/seat.svg" width="100" height="100" />
    </svg>
  )

  const SkodaLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <image href="/images/skoda.svg" width="100" height="100" />
    </svg>
  )

  const FiatLogo = () => (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <image href="/images/fiat.svg" width="100" height="100" />
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
      {/* Sidebar Navigation - Mobile Responsive */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ${
          sidebarOpen ? "w-80" : "w-0"
        } lg:w-80 overflow-hidden`}
      >
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/alkay-grup-logo.png"
                alt="Alkay Grup Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
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

        {/* Hero Section */}
        <section className="relative min-h-screen h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Alkay Grup Otomotiv Servisi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                    <span className="text-green-600 font-medium tracking-wide text-sm sm:text-base">ALKAY GRUP</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block">Avrupa Markalarında</span>
                    <span className="block text-green-600">Uzman Çözümler</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed">
                    Volkswagen, Seat, Skoda, Audi ve Fiat markalarında 15+ yıllık deneyimimiz ile yetkili servis
                    kalitesinde hizmet sunuyoruz.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-green-800 hover:bg-green-900 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
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
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
                      2500+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base">Servis Edilen Araç</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
                      15+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
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
                  { id: "skoda", name: "Skoda", color: "bg-green-800", LogoComponent: SkodaLogo },
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

            {/* Brand Content */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              {/* Volkswagen Content */}
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
                        src="/placeholder.svg?height=400&width=500&text=Volkswagen+Servisi"
                        alt="Volkswagen Servisi"
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

              {/* Audi Content */}
              {activeBrand === "audi" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <AudiLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Audi</h3>
                          <p className="text-green-800 font-medium">Premium Lüks Segment</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Audinin premium teknolojileri için özel eğitim almış teknisyenlerimiz. Quattro sisteminden MMI
                        teknolojisine kadar tüm Audi özelliklerinde uzman hizmet.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">300+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen Audi</div>
                        </div>
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">%99</div>
                          <div className="text-xs sm:text-sm text-gray-600">Müşteri Memnuniyeti</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=400&width=500&text=Audi+Premium+Servis"
                        alt="Audi Premium Servis"
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
                        title: "VCDS Premium Teşhis",
                        description: "Audiye özel gelişmiş teşhis sistemleri",
                        features: ["MMI sistem kontrolü", "Quattro test prosedürleri", "LED/Matrix farlar"],
                      },
                      {
                        icon: Settings,
                        title: "S-Tronic Şanzıman",
                        description: "Audi S-Tronic şanzıman uzmanı",
                        features: ["S-Tronic adaptasyonu", "Performans ayarları", "Yazılım güncellemeleri"],
                      },
                      {
                        icon: Wrench,
                        title: "TFSI/TDI Motorlar",
                        description: "Audinin güçlü motorları için özel servis",
                        features: ["Turbo bakım", "Karbon temizliği", "Performans optimizasyonu"],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-green-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-gray-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-gray-800 flex-shrink-0" />
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

              {/* Seat Content */}
              {activeBrand === "seat" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <SeatLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Seat</h3>
                          <p className="text-green-800 font-medium">İspanyol Dinamizmi</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Seatın genç ve dinamik ruhu için özel hizmetler. Leon Cupradan Ibizaya kadar tüm Seat
                        modellerinde uzman kadromuzla hizmet veriyoruz.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">400+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen Seat</div>
                        </div>
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">%97</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=400&width=500&text=Seat+Dinamik+Servis"
                        alt="Seat Dinamik Servis"
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
                        title: "VCDS Seat Teşhis",
                        description: "Seat modelleri için özel teşhis",
                        features: ["Sport modu kontrolü", "Elektronik sistem", "Performans testleri"],
                      },
                      {
                        icon: Settings,
                        title: "DSG/Manuel Şanzıman",
                        description: "Tüm Seat şanzıman türleri",
                        features: ["DSG adaptasyonu", "Manuel şanzıman", "Debriyaj sistemi"],
                      },
                      {
                        icon: Wrench,
                        title: "TSI/TDI Seat Motorlar",
                        description: "Seatın güçlü motor seçenekleri",
                        features: ["1.0 TSI", "1.5 TSI", "2.0 TDI bakımı"],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-green-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-gray-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-gray-700 flex-shrink-0" />
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

              {/* Skoda Content */}
              {activeBrand === "skoda" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <SkodaLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Skoda</h3>
                          <p className="text-green-800 font-medium">Çek Kalitesi & Pratiklik</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Skodanın akıllı çözümleri ve pratik yaklaşımı için özel hizmetler. Octaviadan Superbe kadar tüm
                        Skoda modellerinde deneyimli kadromuzla hizmet.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">350+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen Skoda</div>
                        </div>
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">%98</div>
                          <div className="text-xs sm:text-sm text-gray-600">Müşteri Memnuniyeti</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=400&width=500&text=Skoda+Akıllı+Servis"
                        alt="Skoda Akıllı Servis"
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
                        title: "VCDS Skoda Teşhis",
                        description: "Skodaya özel teşhis sistemleri",
                        features: ["Akıllı sistemler", "Infotainment kontrolü", "Sensör kalibrasyonu"],
                      },
                      {
                        icon: Settings,
                        title: "DSG & Otomatik",
                        description: "Skoda şanzıman sistemleri",
                        features: ["7-speed DSG", "Tiptronic", "Manuel şanzıman"],
                      },
                      {
                        icon: Wrench,
                        title: "TSI/TDI Skoda",
                        description: "Skodanın verimli motorları",
                        features: ["1.0 TSI", "1.5 TSI", "2.0 TDI"],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-green-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-800" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-800 flex-shrink-0" />
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

              {/* Fiat Content */}
              {activeBrand === "fiat" && (
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                          <FiatLogo />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Fiat</h3>
                          <p className="text-green-800 font-medium">İtalyan Tasarım & Stil</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                        Fiatın İtalyan tasarım anlayışı ve şehir otomobili uzmanlığı için özel hizmetler. 500den Egeaya
                        kadar tüm Fiat modellerinde deneyimli ekibimizle hizmet.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">450+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Servis Edilen Fiat</div>
                        </div>
                        <div className="bg-green-50 p-3 sm:p-4 rounded-xl">
                          <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">%96</div>
                          <div className="text-xs sm:text-sm text-gray-600">Başarı Oranı</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=400&width=500&text=Fiat+İtalyan+Servis"
                        alt="Fiat İtalyan Servis"
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
                        title: "Autocom Fiat Teşhis",
                        description: "Fiat modelleri için özel teşhis",
                        features: ["Motor kontrolü", "ABS/ESP sistemi", "Airbag kontrolü"],
                      },
                      {
                        icon: Settings,
                        title: "Otomatik Şanzıman",
                        description: "Fiat otomatik şanzıman sistemleri",
                        features: ["CVT şanzıman", "Otomatik vites", "Şanzıman bakımı"],
                      },
                      {
                        icon: Wrench,
                        title: "MultiJet/Fire Motorlar",
                        description: "Fiatın güvenilir motorları",
                        features: ["1.3 MultiJet", "1.4 Fire", "Motor bakımı"],
                      },
                    ].map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-green-100">
                        <CardContent className="p-4 sm:p-6">
                          <div className="bg-gray-100 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-gray-800 flex-shrink-0" />
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
                  image: "/placeholder.svg?height=250&width=350&text=Elektronik+Teşhis",
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
                  image: "/placeholder.svg?height=250&width=350&text=DSG+Şanzıman",
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
                  image: "/placeholder.svg?height=250&width=350&text=Motor+Onarım",
                  features: ["Motor revizyonu", "Turbo sistem bakımı", "Enjektör temizliği", "1.5 TSI sente aparatı"],
                },
                {
                  icon: Settings,
                  title: "Klima Sistem Servisi",
                  description: "Tüm klima sistemleri için kapsamlı hizmet",
                  image: "/placeholder.svg?height=250&width=350&text=Klima+Servisi",
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
                  image: "/placeholder.svg?height=250&width=350&text=Kaporta+Boya",
                  features: ["Profesyonel fırın boya", "Renk eşleştirme", "Kaporta onarımları", "Çizik giderme"],
                },
                {
                  icon: CheckCircle,
                  title: "Periyodik Bakım",
                  description: "Marka bazında periyodik bakım hizmetleri",
                  image: "/placeholder.svg?height=250&width=350&text=Periyodik+Bakım",
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
        <section id="hakkimizda" className="py-12 sm:py-16 lg:py-20 bg-white">
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
                2008 yılından bu yana Avrupanın prestijli otomotiv markalarında uzmanlaşmış, müşteri memnuniyetini ön
                planda tutmuş bir ekibiz.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Neden Alkay Grupu Tercih Etmelisiniz?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">15+ Yıllık Deneyim</h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Sektörde uzun yıllar edindiğimiz tecrübe ile her türlü arızaya çözüm üretiyoruz.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                        <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-green-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Son Teknoloji Ekipmanlar</h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          ODIS, Autocom gibi orjinal test cihazları ile hassas teşhis yapıyoruz.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                        <Star className="h-5 w-5 text-green-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Sertifikalı Teknisyenler</h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Her marka için özel eğitim almış, sertifikalı uzman kadromuz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=600&text=Modern+Servis+Alanı"
                    alt="Alkay Grup Modern Servis Alanı"
                    width={600}
                    height={500}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Misyon & Vizyon Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
              {/* Misyonumuz */}
              <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Misyonumuz</h3>
                  </div>

                  <p className="text-green-100 text-base sm:text-lg leading-relaxed">
                    Avrupanın prestijli otomotiv markalarında uzmanlaşarak, müşterilerimize yetkili servis kalitesinde
                    hizmet sunmak. Modern teknoloji ve deneyimli kadromuzla, her aracın ihtiyacına özel çözümler
                    üreterek müşteri memnuniyetini en üst seviyede tutmak.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-300 rounded-full flex-shrink-0"></div>
                      <span className="text-green-100 text-sm sm:text-base">Kaliteli ve güvenilir hizmet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-300 rounded-full flex-shrink-0"></div>
                      <span className="text-green-100 text-sm sm:text-base">Müşteri odaklı yaklaşım</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-300 rounded-full flex-shrink-0"></div>
                      <span className="text-green-100 text-sm sm:text-base">Sürekli gelişim ve yenilik</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vizyonumuz */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Vizyonumuz</h3>
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Türkiyede Avrupa otomotiv markalarının en güvenilir ve tercih edilen servisi olmak. Teknolojik
                    gelişmeleri yakından takip ederek, sektörde öncü konumumuzu korumak ve müşterilerimize en iyi hizmet
                    deneyimini yaşatmak.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm sm:text-base">Sektörde liderlik</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm sm:text-base">Teknolojik yenilik</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm sm:text-base">Sürdürülebilir büyüme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Değerlerimiz */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border p-6 sm:p-8 lg:p-10 mb-16 sm:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h3>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  İş yapış şeklimizi ve müşteri ilişkilerimizi şekillendiren temel değerlerimiz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center group">
                  <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-800" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Güvenilirlik</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Sözümüzün arkasında durur, verdiğimiz garantileri yerine getiririz
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                    <Star className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Kalite</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Her işimizde mükemmellik arayışı ve yüksek standartlar
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Settings className="h-8 w-8 sm:h-10 sm:w-10 text-green-800" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Uzmanlık</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Sürekli eğitim ve gelişim ile sektördeki uzmanlığımızı artırırız
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                    <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">İletişim</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Şeffaf ve açık iletişim ile müşteri memnuniyetini sağlarız
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="bg-green-800 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">2500+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Servis Edilen Araç</div>
                </div>

                <div className="text-center">
                  <div className="bg-green-800 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Yıl Deneyim</div>
                </div>

                <div className="text-center">
                  <div className="bg-green-800 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">5</div>
                  <div className="text-gray-600 text-sm sm:text-base">Uzman Marka</div>
                </div>

                <div className="text-center">
                  <div className="bg-green-800 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">%99</div>
                  <div className="text-gray-600 text-sm sm:text-base">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">GALERİMİZ</span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Çalışma Alanımız ve Ekipmanlarımız
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Modern tesisimiz, son teknoloji ekipmanlarımız ve uzman kadromuzla hizmet veriyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Modern Servis Alanı",
                  description: "Geniş ve modern çalışma alanımız",
                  image: "/placeholder.svg?height=300&width=400&text=Modern+Servis+Alanı",
                },
                {
                  title: "ODIS Test Cihazı",
                  description: "Volkswagen Grup orjinal test cihazı",
                  image: "/placeholder.svg?height=300&width=400&text=ODIS+Test+Cihazı",
                },
                {
                  title: "DSG Şanzıman Servisi",
                  description: "DSG şanzıman özel servis alanı",
                  image: "/placeholder.svg?height=300&width=400&text=DSG+Şanzıman+Servisi",
                },
                {
                  title: "Kaporta Boya Fırını",
                  description: "Profesyonel boya fırını",
                  image: "/placeholder.svg?height=300&width=400&text=Boya+Fırını",
                },
                {
                  title: "Klima Servisi",
                  description: "Klima sistemi özel ekipmanları",
                  image: "/placeholder.svg?height=300&width=400&text=Klima+Servisi",
                },
                {
                  title: "Uzman Teknisyen Kadrosu",
                  description: "Sertifikalı teknisyenlerimiz",
                  image: "/placeholder.svg?height=300&width=400&text=Uzman+Kadro",
                },
                {
                  title: "Orjinal Parça Deposu",
                  description: "Geniş orjinal parça stoğumuz",
                  image: "/placeholder.svg?height=300&width=400&text=Parça+Deposu",
                },
                {
                  title: "Müşteri Bekleme Salonu",
                  description: "Konforlu bekleme alanımız",
                  image: "/placeholder.svg?height=300&width=400&text=Bekleme+Salonu",
                },
                {
                  title: "Araç Teslim Alanı",
                  description: "Temiz ve düzenli teslim alanı",
                  image: "/placeholder.svg?height=300&width=400&text=Teslim+Alanı",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="yorumlar" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
                <span className="text-green-800 font-medium tracking-wide text-sm sm:text-base">
                  MÜŞTERİ DENEYİMLERİ
                </span>
                <div className="w-8 sm:w-12 h-1 bg-green-800"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Müşterilerimizin Görüşleri</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Hizmet kalitemiz ve müşteri memnuniyetimiz hakkında gerçek müşteri deneyimleri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Mehmet Yılmaz",
                  car: "Volkswagen Golf GTI 2019",
                  rating: 5,
                  comment:
                    "DSG şanzıman arızam için geldim. Hem fiyat hem de hizmet kalitesi mükemmeldi. ODIS cihazı ile detaylı teşhis yaptılar ve orjinal parça kullandılar. 2 yıl garanti vermeleri çok güven verici. Kesinlikle tavsiye ederim.",
                  avatar: "MY",
                  service: "DSG Şanzıman Onarımı",
                },
                {
                  name: "Ayşe Demir",
                  car: "Audi A3 Sportback 2020",
                  rating: 5,
                  comment:
                    "Elektronik arıza tespiti için gittim. Çok profesyonel yaklaştılar ve sorunu hızlıca tespit edip çözdüler. Teknisyenleri gerçekten işinin ehli. Fiyatları da çok makul. Artık tüm bakımlarımı burada yaptırıyorum.",
                  avatar: "AD",
                  service: "Elektronik Arıza Tespiti",
                },
                {
                  name: "Can Özkan",
                  car: "Seat Leon Cupra 2021",
                  rating: 5,
                  comment:
                    "Kaporta boyası için geldim. İşçilik kalitesi ve müşteri memnuniyeti odaklı yaklaşımları harika. Araç teslim edildiğinde sıfır gibi olmuştu. Renk eşleştirmesi mükemmel. Çok memnun kaldım.",
                  avatar: "CÖ",
                  service: "Kaporta & Boya",
                },
                {
                  name: "Fatma Kaya",
                  car: "Skoda Octavia 2018",
                  rating: 5,
                  comment:
                    "Klima arızası vardı, yazın çok zorlandık. Buraya geldik ve aynı gün çözdüler. Gaz dolumu ve kompresör temizliği yaptılar. Artık klima buz gibi soğutuyor. Teşekkürler Alkay Grup!",
                  avatar: "FK",
                  service: "Klima Servisi",
                },
                {
                  name: "Ali Demir",
                  car: "Fiat Egea 2020",
                  rating: 5,
                  comment:
                    "Fiatım için periyodik bakım yaptırdım. Autocom cihazı ile detaylı kontrol ettiler. Hangi parçaların değişmesi gerektiğini açık açık anlattılar. Şeffaf fiyatlandırma ve kaliteli hizmet.",
                  avatar: "AD",
                  service: "Periyodik Bakım",
                },
                {
                  name: "Zeynep Arslan",
                  car: "Volkswagen Passat 2017",
                  rating: 5,
                  comment:
                    "Motor arızası vardı, çok endişeliydim. Alkay Grupta çok detaylı inceleme yaptılar. Sorunu bulup orjinal parça ile çözdüler. 1 yıldır hiç sorun yaşamadım. Güvenilir bir yer.",
                  avatar: "ZA",
                  service: "Motor Onarımı",
                },
                {
                  name: "Murat Şahin",
                  car: "Audi A4 2019",
                  rating: 5,
                  comment:
                    "Göçük onarımı için gittim. PDR yöntemi ile boyasız olarak çok güzel düzelttiler. Hiç belli olmuyor. Hem ekonomik hem de hızlı çözüm. Kesinlikle tavsiye ederim.",
                  avatar: "MŞ",
                  service: "Göçük Onarımı",
                },
                {
                  name: "Elif Yıldız",
                  car: "Seat Ibiza 2021",
                  rating: 5,
                  comment:
                    "İlk defa geldiğimde çok memnun kaldım. Personel çok kibar ve bilgili. Araçla ilgili her şeyi detaylı açıkladılar. Fiyatlar uygun, hizmet kalitesi yüksek. Artık sürekli müşterisiyim.",
                  avatar: "EY",
                  service: "Genel Bakım",
                },
                {
                  name: "Hasan Özdemir",
                  car: "Skoda Superb 2020",
                  rating: 5,
                  comment:
                    "Şanzıman yağ değişimi için geldim. Çok temiz ve düzenli bir işletme. İşlerini ciddiye alıyorlar. Randevu saatine uyuyorlar ve zamanında teslim ediyorlar. Profesyonel yaklaşım.",
                  avatar: "HÖ",
                  service: "Şanzıman Bakımı",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gray-50">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 italic leading-relaxed text-sm sm:text-base">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>

                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-green-800 to-green-900 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">{testimonial.car}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <p className="text-gray-600 mb-4 sm:mb-6">Siz de deneyiminizi paylaşın!</p>
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center">
                <a href="https://wa.me/905070503333" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-800 hover:bg-green-900 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApptan Yorum Yapın
                  </Button>
                </a>
                <a href="mailto:alkaygrup@gmail.com">
                  <Button
                    variant="outline"
                    className="border-green-800 text-green-800 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 bg-transparent w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    E-posta Gönder
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="py-12 sm:py-16 lg:py-20 bg-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Hemen İletişime Geçin</h2>
                <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto">
                  Aracınız için ücretsiz ön değerlendirme ve detaylı bilgi almak için profesyonel ekibimizle iletişime
                  geçin
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center">
                <a href="https://wa.me/905070503333" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-green-800 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                    WhatsApp İletişim
                  </Button>
                </a>
                <a href="mailto:alkaygrup@gmail.com">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                    E-posta Gönder
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4 sm:mb-6">
                <Image
                  src="/images/alkay-grup-logo.png"
                  alt="Alkay Grup Logo"
                  width={32}
                  height={32}
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                />
                <span className="text-xl sm:text-2xl font-bold">ALKAY GRUP</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                &copy; 2024 Alkay Grup Otomotiv Servisi. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
