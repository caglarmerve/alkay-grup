"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  Zap,
  Palette,
  Settings,
  Shield,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Gauge,
  Car,
  FileText,
  Users,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl shadow-slate-900/5"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl blur-sm opacity-20"></div>
                <Image
                  src="/images/alkay-grup-logo.png"
                  alt="Alkay Grup Logo"
                  width={48}
                  height={48}
                  className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent tracking-tight">
                  ALKAY GRUP
                </span>
                <p className="text-xs sm:text-sm text-slate-600 -mt-1 hidden sm:block font-medium tracking-wide">
                  Premium Otomotiv Servisi
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {["hizmetler", "markalar", "hakkimizda", "galeri", "yorumlar", "iletisim"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all duration-300 group capitalize tracking-wide"
                >
                  {section === "hakkimizda" ? "Hakkımızda" : section === "iletisim" ? "İletişim" : section}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-slate-600 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-slate-600 blur-sm transition-all duration-300 group-hover:w-full opacity-50"></span>
                </button>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 bg-transparent text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                <Phone className="h-4 w-4 mr-2" />
                Hemen Ara
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                size="sm"
                className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white p-2 shadow-lg"
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-slate-900 p-2 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {["hizmetler", "markalar", "hakkimizda", "galeri", "yorumlar", "iletisim"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left text-slate-700 hover:text-slate-900 font-semibold py-3 capitalize transition-colors border-b border-slate-100 last:border-b-0"
                  >
                    {section === "hakkimizda" ? "Hakkımızda" : section === "iletisim" ? "İletişim" : section}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-semibold shadow-lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp İletişim
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-slate-600/10 to-slate-700/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="text-white space-y-8 lg:space-y-10">
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                      <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-slate-300" />
                    </div>
                    <Badge className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-slate-200 font-semibold text-sm px-4 py-2 border border-slate-600/30">
                      Premium Otomotiv Hizmetleri
                    </Badge>
                  </div>

                  <h1 className="font-bold leading-tight tracking-tight">
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-100">
                      Avrupa Markalarında
                    </span>
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                      Uzman Çözümler
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
                    <span className="text-slate-200 font-semibold">Volkswagen, Seat, Skoda, Audi ve Fiat</span>{" "}
                    markalarında 15+ yıllık deneyimimiz ile yetkili servis kalitesinde hizmet.
                    <span className="text-slate-200 font-medium"> Orjinal parça garantisi</span> ve uzman kadromuzla
                    aracınız güvenli ellerde.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-base"
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    Ücretsiz Ön Değerlendirme
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-400 text-slate-200 hover:bg-slate-200 hover:text-slate-900 bg-transparent font-semibold px-8 py-4 text-base transition-all duration-300"
                    onClick={() => scrollToSection("hakkimizda")}
                  >
                    <ArrowRight className="h-5 w-5 mr-3" />
                    Hakkımızda
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 lg:pt-12">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-2">2500+</div>
                    <div className="text-sm sm:text-base text-slate-400 font-medium">Servis Edilen Araç</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-2">15+</div>
                    <div className="text-sm sm:text-base text-slate-400 font-medium">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 mb-2">%99</div>
                    <div className="text-sm sm:text-base text-slate-400 font-medium">Müşteri Memnuniyeti</div>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0">
                <div className="relative z-10">
                  {/* Main Image */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-3xl blur-2xl transform rotate-6"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=700"
                      alt="Premium otomotiv servisi"
                      width={700}
                      height={600}
                      className="relative w-full h-auto rounded-3xl shadow-2xl border border-slate-700/30"
                    />
                  </div>

                  {/* Floating Cards */}
                  <div className="hidden sm:block absolute -top-6 -left-6 lg:-top-8 lg:-left-8">
                    <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl shadow-slate-900/20">
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex items-center space-x-3 lg:space-x-4">
                          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 lg:p-3 rounded-xl shadow-lg">
                            <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm lg:text-base">Orjinal Parça Garantisi</p>
                            <p className="text-xs lg:text-sm text-slate-600 font-medium">2 Yıl Tam Garanti</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8">
                    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-0 shadow-2xl shadow-slate-900/30">
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex items-center space-x-3 lg:space-x-4">
                          <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-2 lg:p-3 rounded-xl shadow-lg">
                            <Gauge className="h-5 w-5 lg:h-6 lg:w-6 text-slate-200" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-100 text-sm lg:text-base">Bilgisayarlı Teşhis</p>
                            <p className="text-xs lg:text-sm text-slate-300 font-medium">Son Teknoloji Ekipman</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="markalar" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
              <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 px-6 py-3 text-sm font-semibold border border-slate-300/50">
                Uzman Olduğumuz Markalar
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
                Avrupa&apos;nın Prestijli Markaları
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Her marka için özel eğitim almış sertifikalı teknisyenlerimiz ve orijinal yedek parça ağımız ile
                <span className="text-slate-800 font-semibold"> yetkili servis standardında</span> hizmet sunuyoruz
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
              {[
                { name: "Volkswagen", color: "from-blue-600 to-blue-700", desc: "Alman Mühendisliği", icon: "🇩🇪" },
                { name: "Audi", color: "from-red-600 to-red-700", desc: "Premium Lüks", icon: "🏆" },
                { name: "Seat", color: "from-orange-600 to-orange-700", desc: "İspanyol Dinamizmi", icon: "🇪🇸" },
                { name: "Skoda", color: "from-emerald-600 to-emerald-700", desc: "Çek Kalitesi", icon: "⭐" },
                { name: "Fiat", color: "from-red-500 to-red-600", desc: "İtalyan Tasarımı", icon: "🇮🇹" },
              ].map((brand, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div
                      className={`bg-gradient-to-br ${brand.color} w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                    >
                      <Car className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl text-slate-900 mb-2 tracking-wide">{brand.name}</h3>
                    <p className="text-sm lg:text-base text-slate-600 font-medium">{brand.desc}</p>
                    <div className="text-2xl mt-2">{brand.icon}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-0 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FileText className="h-8 w-8 text-slate-200" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 mb-3">Orjinal Parça Garantisi</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Tüm yedek parçalar için 2 yıl tam garanti ve yetkili servis kalitesi
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-8 w-8 text-slate-200" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 mb-3">Sertifikalı Uzmanlar</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Marka sertifikalı ve sürekli eğitim alan profesyonel teknisyen kadrosu
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Gauge className="h-8 w-8 text-slate-200" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 mb-3">İleri Teknoloji</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Son model teşhis cihazları ve kalibrasyon ekipmanları
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="py-20 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
              <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 px-6 py-3 text-sm font-semibold border border-slate-300/50">
                Profesyonel Hizmetlerimiz
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
                Kapsamlı Otomotiv Çözümleri
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Yetkili servis kalitesinde hizmet, orjinal parça garantisi ve uzman teknisyen kadromuz ile
                <span className="text-slate-800 font-semibold"> aracınızın tüm ihtiyaçları için tek adres</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  icon: Wrench,
                  title: "Genel Mekanik Onarım",
                  description: "Motor, şanzıman, fren, süspansiyon ve tüm mekanik sistemlerde uzman onarım hizmeti",
                  color: "from-slate-700 to-slate-800",
                  bgColor: "from-slate-50 to-slate-100",
                  features: ["Motor Revizyonu", "Şanzıman Onarımı", "Fren Sistemi", "Süspansiyon Bakımı"],
                },
                {
                  icon: Zap,
                  title: "Elektronik Sistemler",
                  description: "ECU programlama, elektronik arıza tespiti ve modern araç elektrik sistemleri",
                  color: "from-amber-600 to-amber-700",
                  bgColor: "from-amber-50 to-amber-100",
                  features: ["ECU Programlama", "Arıza Tespiti", "Kablo Tesisatı", "Sensör Kalibrasyonu"],
                },
                {
                  icon: Palette,
                  title: "Kaporta & Boya",
                  description: "Profesyonel kaporta onarımı ve fırın boya uygulaması ile mükemmel sonuçlar",
                  color: "from-red-600 to-red-700",
                  bgColor: "from-red-50 to-red-100",
                  features: ["Fırın Boya", "Kaporta Onarımı", "Çizik Giderme", "Tampon Yenileme"],
                },
                {
                  icon: Settings,
                  title: "DSG/CVT Şanzıman",
                  description: "Otomatik şanzıman bakım, onarım ve yazılım güncellemeleri konusunda uzman hizmet",
                  color: "from-emerald-600 to-emerald-700",
                  bgColor: "from-emerald-50 to-emerald-100",
                  features: ["DSG Bakımı", "CVT Onarımı", "Yazılım Güncelleme", "Performans Optimizasyonu"],
                },
                {
                  icon: Shield,
                  title: "Orjinal Yedek Parça",
                  description: "Orjinal ve OEM kalitesinde yedek parça tedariki ve profesyonel montaj hizmeti",
                  color: "from-purple-600 to-purple-700",
                  bgColor: "from-purple-50 to-purple-100",
                  features: ["Orjinal Parça", "OEM Kalitesi", "Hızlı Tedarik", "2 Yıl Garanti"],
                },
                {
                  icon: Gauge,
                  title: "Bilgisayarlı Teşhis",
                  description: "Son teknoloji teşhis cihazları ile detaylı araç analizi ve performans değerlendirmesi",
                  color: "from-indigo-600 to-indigo-700",
                  bgColor: "from-indigo-50 to-indigo-100",
                  features: ["Detaylı Analiz", "Performans Testi", "Emisyon Kontrolü", "Sistem Kalibrasyonu"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
                >
                  <div className={`bg-gradient-to-br ${service.bgColor} p-6 lg:p-8`}>
                    <div
                      className={`bg-gradient-to-br ${service.color} w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                    >
                      <service.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 tracking-wide">{service.title}</h3>
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                  </div>

                  <CardContent className="p-6 lg:p-8 bg-white">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm lg:text-base text-slate-600 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Detaylı Bilgi Al
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="hakkimizda"
          className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-700/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-600/20 to-transparent rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8 lg:space-y-10">
                <div>
                  <Badge className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-slate-200 px-6 py-3 mb-6 border border-slate-600/30">
                    Hakkımızda
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                    15 Yıllık Deneyim ile <span className="text-slate-300">Güvenilir Hizmet</span>
                  </h2>
                  <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-8 font-light">
                    2008 yılından bu yana Volkswagen, Seat, Skoda, Audi ve Fiat markalarında uzmanlaşmış ekibimizle
                    binlerce müşterimize hizmet verdik. Yetkili servis kalitesinde hizmet anlayışımız ve müşteri
                    memnuniyeti odaklı yaklaşımımızla sektörde öncü konumdayız.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 lg:gap-10">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-slate-200 mb-3">15+</div>
                    <div className="text-slate-400 font-medium">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-slate-200 mb-3">2500+</div>
                    <div className="text-slate-400 font-medium">Servis Edilen Araç</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-slate-200 mb-3">%99</div>
                    <div className="text-slate-400 font-medium">Müşteri Memnuniyeti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-slate-200 mb-3">5</div>
                    <div className="text-slate-400 font-medium">Uzman Marka</div>
                  </div>
                </div>

                <div className="space-y-4 lg:space-y-5">
                  {[
                    "Orjinal ve OEM kalitesinde yedek parça garantisi",
                    "Marka sertifikalı uzman teknisyen kadrosu",
                    "Son teknoloji teşhis ve onarım ekipmanları",
                    "Şeffaf fiyatlandırma ve detaylı raporlama",
                    "7/24 müşteri destek hizmetleri",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-1 rounded-full">
                        <CheckCircle className="h-5 w-5 text-slate-300" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-3xl blur-2xl transform -rotate-6"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Alkay Grup Otomotiv Servisi"
                    width={600}
                    height={500}
                    className="relative w-full h-auto rounded-3xl shadow-2xl border border-slate-700/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="yorumlar" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
              <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 px-6 py-3 text-sm font-semibold border border-slate-300/50">
                Müşteri Deneyimleri
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
                Müşterilerimizin Görüşleri
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Hizmet kalitemiz ve müşteri memnuniyetimiz hakkında gerçek müşteri deneyimleri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  name: "Mehmet Yılmaz",
                  car: "Volkswagen Golf GTI",
                  rating: 5,
                  comment:
                    "&ldquo;DSG şanzıman arızam için geldim. Hem fiyat hem de hizmet kalitesi mükemmeldi. Orjinal parça kullanmaları ve 2 yıl garanti vermeleri çok güven verici. Kesinlikle tavsiye ederim.&rdquo;",
                  avatar: "MY",
                },
                {
                  name: "Ayşe Demir",
                  car: "Audi A3 Sportback",
                  rating: 5,
                  comment:
                    "&ldquo;Elektronik arıza tespiti için gittim. Çok profesyonel yaklaştılar ve sorunu hızlıca tespit edip çözdüler. Teknisyenleri gerçekten işinin ehli. Fiyatları da çok makul.&rdquo;",
                  avatar: "AD",
                },
                {
                  name: "Can Özkan",
                  car: "Seat Leon Cupra",
                  rating: 5,
                  comment:
                    "&ldquo;Kaporta boyası için geldim. İşçilik kalitesi ve müşteri memnuniyeti odaklı yaklaşımları harika. Araç teslim edildiğinde sıfır gibi olmuştu. Çok memnun kaldım.&rdquo;",
                  avatar: "CÖ",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic leading-relaxed font-light text-base">
                      {testimonial.comment}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-slate-700 to-slate-800 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                        <p className="text-slate-600 font-medium">{testimonial.car}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="iletisim"
          className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-700/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-slate-600/20 to-transparent rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
              <Badge className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-slate-200 px-6 py-3 border border-slate-600/30">
                İletişim
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Hemen <span className="text-slate-300">İletişime</span> Geçin
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed font-light">
                Aracınız için ücretsiz ön değerlendirme ve detaylı bilgi almak için profesyonel ekibimizle iletişime
                geçin
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  icon: Phone,
                  title: "Telefon",
                  info: "+90 (212) 555 0123",
                  color: "from-slate-700 to-slate-800",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  info: "+90 (555) 123 4567",
                  color: "from-green-600 to-green-700",
                },
                {
                  icon: MapPin,
                  title: "Adres",
                  info: "İstanbul / Türkiye",
                  color: "from-red-600 to-red-700",
                },
                {
                  icon: Clock,
                  title: "Çalışma Saatleri",
                  info: "08:00 - 18:00",
                  color: "from-blue-600 to-blue-700",
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-slate-700/30 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div
                      className={`bg-gradient-to-br ${contact.color} w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg`}
                    >
                      <contact.icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg lg:text-xl mb-3 text-slate-100">{contact.title}</h3>
                    <p className="text-slate-300 text-sm lg:text-base font-medium">{contact.info}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 lg:mt-20 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              >
                <Calendar className="h-5 w-5 mr-3" />
                Ücretsiz Ön Değerlendirme Talep Et
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 lg:py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl blur-sm opacity-50"></div>
                <Image
                  src="/images/alkay-grup-logo.png"
                  alt="Alkay Grup Logo"
                  width={40}
                  height={40}
                  className="relative h-8 w-8 lg:h-10 lg:w-10 object-contain"
                />
              </div>
              <span className="text-2xl lg:text-3xl font-bold tracking-wide">ALKAY GRUP</span>
            </div>
            <p className="text-slate-400 mb-8 lg:mb-10 text-base lg:text-lg font-light">
              Premium Otomotiv Servisi - Yetkili Servis Kalitesinde Hizmet
            </p>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-500 text-sm lg:text-base">
                &copy; 2024 Alkay Grup Otomotiv Servisi. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full w-14 h-14 lg:w-16 lg:h-16 shadow-2xl animate-pulse hover:animate-none transform hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8" />
        </Button>
      </div>
    </div>
  )
}
