"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Wrench,
  Zap,
  Palette,
  Settings,
  Shield,
  Users,
  Phone,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
  ArrowRight,
  Quote,
  TrendingUp,
  Sparkles,
  CloudLightningIcon as Lightning,
  Heart,
  ThumbsUp,
  Camera,
  ChevronDown,
  Globe,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Volkswagen Golf Sahibi",
      content:
        'DSG şanzıman problemimi çok profesyonel şekilde çözdüler. Artık aracım ilk günkü gibi çalışıyor. Kesinlikle tavsiye ederim!',
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Elif Kaya",
      role: "Audi A3 Sahibi",
      content: "Elektrik sistemindeki arızayı hemen tespit ettiler. Hem hızlı hem de uygun fiyatlı. Çok memnun kaldım.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mehmet Demir",
      role: "Seat Leon Sahibi",
      content: "Kaporta ve boya işlemi mükemmeldi. Aracım showroom'dan yeni çıkmış gibi oldu. Profesyonel ekip!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const faqs = [
    {
      question: "Randevu almak için ne yapmam gerekiyor?",
      answer:
        "Telefon, WhatsApp veya web sitemizden kolayca randevu alabilirsiniz. Acil durumlar için 7/24 hizmet veriyoruz.",
    },
    {
      question: "Orjinal parça garantisi veriyor musunuz?",
      answer:
        "Evet, tüm orjinal parçalarımız için 2 yıl garanti veriyoruz. Yan sanayi parçalar için de 1 yıl garanti mevcuttur.",
    },
    {
      question: "DSG şanzıman bakımı ne kadar sürer?",
      answer: "DSG şanzıman bakımı genellikle 2-3 saat sürmektedir. Onarım durumunda süre değişkenlik gösterebilir.",
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Nakit, kredi kartı, banka kartı ve havale/EFT ile ödeme kabul ediyoruz. Taksit imkanları mevcuttur.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg border-b shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AutoExpert
              </span>
              <p className="text-xs text-gray-500 -mt-1">Premium Servis</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#hizmetler"
              className="text-sm font-medium hover:text-blue-600 transition-colors relative group"
            >
              Hizmetler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#markalar" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
              Markalar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#hakkimizda"
              className="text-sm font-medium hover:text-blue-600 transition-colors relative group"
            >
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#galeri" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
              Galeri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#yorumlar" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
              Yorumlar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#iletisim" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
              <Phone className="h-4 w-4 mr-2" />
              Hemen Ara
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

          <div className="container px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                      Premium Otomotiv Servisi
                    </Badge>
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Aracınız
                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                      Güvenli Ellerde
                    </span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                    15+ yıllık deneyimimiz ve son teknoloji ekipmanlarımızla Volkswagen, Seat, Skoda, Audi ve Fiat
                    markalarında <span className="text-yellow-400 font-semibold">premium hizmet</span> sunuyoruz.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold shadow-2xl transform hover:scale-105 transition-all"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Randevu Al
                  </Button>
                  <Button size="lg" variant="outline">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Hakkımızda
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">1000+</div>
                    <div className="text-sm text-blue-200">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">15+</div>
                    <div className="text-sm text-blue-200">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">%98</div>
                    <div className="text-sm text-blue-200">Memnuniyet</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=700"
                    alt="Premium otomotiv servisi"
                    width={700}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                  />

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Orjinal Parça</p>
                        <p className="text-sm text-gray-600">2 Yıl Garanti</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-xl text-white">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <Lightning className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold">Hızlı Servis</p>
                        <p className="text-sm text-blue-100">Aynı Gün Teslimat</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-lg px-6 py-2">
                Premium Hizmetlerimiz
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Kapsamlı Otomotiv Çözümleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Son teknoloji ekipmanlarımız ve uzman ekibimizle aracınızın tüm ihtiyaçları için
                <span className="text-blue-600 font-semibold"> tek adres</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Wrench,
                  title: "Mekanik Onarım",
                  description: "Motor, fren, süspansiyon ve tüm mekanik sistemlerde uzman onarım hizmeti",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  features: ["Motor Revizyonu", "Fren Sistemi", "Süspansiyon", "Egzoz Sistemi"],
                },
                {
                  icon: Zap,
                  title: "Elektrik Sistemleri",
                  description: "Araç elektrik sistemleri, ECU programlama ve elektronik arıza tespiti",
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "bg-yellow-50",
                  features: ["ECU Programlama", "Kablo Tesisatı", "Sensör Değişimi", "Arıza Tespiti"],
                },
                {
                  icon: Palette,
                  title: "Kaporta & Boya",
                  description: "Profesyonel kaporta onarımı ve fırın boya uygulaması",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "bg-purple-50",
                  features: ["Fırın Boya", "Kaporta Onarımı", "Çizik Giderme", "Tampon Onarımı"],
                },
                {
                  icon: Settings,
                  title: "DSG Şanzıman",
                  description: "DSG şanzıman bakım, onarım ve yazılım güncellemeleri",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-green-50",
                  features: ["DSG Bakımı", "Yazılım Güncelleme", "Kavrama Değişimi", "Yağ Değişimi"],
                },
                {
                  icon: Shield,
                  title: "Orjinal Parça",
                  description: "Orjinal ve yan sanayi yedek parça tedariki",
                  color: "from-red-500 to-rose-500",
                  bgColor: "bg-red-50",
                  features: ["Orjinal Parça", "Yan Sanayi", "Hızlı Tedarik", "Garanti"],
                },
                {
                  icon: Users,
                  title: "Uzman Ekip",
                  description: "Sertifikalı teknisyen ve tekniker kadromuz",
                  color: "from-indigo-500 to-blue-500",
                  bgColor: "bg-indigo-50",
                  features: ["Sertifikalı Ekip", "Sürekli Eğitim", "Deneyimli Kadro", "Profesyonel Hizmet"],
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardHeader className={`${service.bgColor} rounded-t-xl`}>
                    <div
                      className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black">
                      Detaylı Bilgi
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="markalar" className="py-24 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
          <div className="container px-4">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg px-6 py-2">
                Uzman Olduğumuz Markalar
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold">
              Avrupa&apos;nın<span className="text-yellow-400">Önde Gelen</span> Markaları
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Volkswagen Group ve Fiat markalarında uzmanlaşmış ekibimizle her marka için özel hizmet
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: "Volkswagen", specialty: "Golf, Passat, Polo" },
                { name: "Seat", specialty: "Leon, Ibiza, Ateca" },
                { name: "Škoda", specialty: "Octavia, Fabia, Superb" },
                { name: "Audi", specialty: "A3, A4, Q3, Q5" },
                { name: "Fiat", specialty: "Egea, Punto, 500" },
              ].map((brand, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=120"
                      alt={brand.name}
                      width={120}
                      height={80}
                      className="mx-auto mb-4 filter brightness-0 invert"
                    />
                    <h3 className="font-bold text-xl mb-2">{brand.name}</h3>
                    <p className="text-sm text-gray-300">{brand.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
                  <div className="text-gray-300">Premium Marka</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-300">Model Desteği</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-300">Orjinal Parça</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">Destek Hattı</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-white">
          <div className="container px-4">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-lg px-6 py-2">
                Hakkımızda
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Biz <span className="text-blue-600">Kimiz?</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">15+ Yıllık Deneyim</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  2008 yılından bu yana otomotiv sektöründe faaliyet gösteren AutoExpert, Volkswagen Group ve Fiat
                  markalarında uzmanlaşmış bir ekiple hizmet vermektedir. Müşteri memnuniyetini ön planda tutan
                  yaklaşımımız ve kaliteli hizmet anlayışımızla sektörde öncü konumdayız.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Son teknoloji ekipmanlarımız, orjinal parça garantimiz ve sürekli kendini geliştiren uzman kadromuzla
                  aracınızın tüm ihtiyaçlarına çözüm üretiyoruz.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-gray-600">Başarılı Onarım</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">%98</div>
                    <div className="text-gray-600">Müşteri Memnuniyeti</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="AutoExpert Servis Ekibi"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Yıl Deneyim</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Misyonumuz</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Otomotiv sektöründe en yüksek kalite standartlarında hizmet sunarak, müşterilerimizin araçlarının
                    güvenliğini ve performansını maksimum düzeyde tutmak. Sürekli gelişim ve yenilikçi yaklaşımlarla
                    sektörde öncü olmaya devam etmek.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Vizyonumuz</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Türkiye&apos; en güvenilir ve tercih edilen premium otomotiv servis merkezi olmak. Teknolojik
                    gelişmeleri yakından takip ederek, müşterilerimize her zaman en iyi hizmeti sunmak ve otomotiv
                    sektöründe kalite standardını belirleyen marka olmak.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h3>
                <p className="text-lg text-gray-600">Çalışma prensiplerimizi oluşturan temel değerler</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Güvenilirlik</h4>
                  <p className="text-gray-600 text-sm">
                    Sözümüzün arkasında durur, verdiğimiz garantileri yerine getiririz
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Kalite</h4>
                  <p className="text-gray-600 text-sm">
                    Her işimizde mükemmellik arayışı ve en yüksek kalite standartları
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Müşteri Odaklılık</h4>
                  <p className="text-gray-600 text-sm">Müşteri memnuniyeti bizim için her şeyden önce gelir</p>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Lightning className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Yenilikçilik</h4>
                  <p className="text-gray-600 text-sm">Sürekli gelişim ve teknolojik yenilikleri takip etme</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="py-24 bg-white">
          <div className="container px-4">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-lg px-6 py-2">
                Çalışmalarımız
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Öncesi & <span className="text-purple-600">Sonrası</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Yaptığımız işlerin kalitesini gözlerinizle görün
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={`Çalışma ${item}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-semibold">Kaporta & Boya</p>
                        <p className="text-sm">Volkswagen Golf</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Tüm Galeriyi Görüntüle
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="yorumlar" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container px-4">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-lg px-6 py-2">
                Müşteri Yorumları
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Müşterilerimiz <span className="text-blue-600">Ne Diyor?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Binlerce mutlu müşterimizden bazılarının deneyimleri
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-12">
                  <div className="text-center space-y-6">
                    <Quote className="h-16 w-16 text-blue-600 mx-auto opacity-50" />

                    <div className="space-y-4">
                      <p className="text-2xl text-gray-700 leading-relaxed italic">
                        "{testimonials[activeTestimonial].content}"
                      </p>

                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <p className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</p>
                        <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? "bg-blue-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-20">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <ThumbsUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">%98</div>
                  <div className="text-gray-600">Memnuniyet Oranı</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
                  <div className="text-gray-600">Google Puanı</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">%95</div>
                  <div className="text-gray-600">Tekrar Tercih</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container px-4">
            <div className="text-center space-y-6 mb-20">
              <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-lg px-6 py-2">
                Sıkça Sorulan Sorular
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Merak <span className="text-orange-600">Ettikleriniz</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                  <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="iletisim"
          className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>

          <div className="container px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg px-6 py-2">
                    İletişim
                  </Badge>
                  <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Hemen <span className="text-yellow-400">İletişime</span> Geçin
                  </h2>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Aracınızın bakım ve onarım ihtiyaçları için uzman ekibimizle iletişime geçin.
                    <span className="text-yellow-400 font-semibold"> Ücretsiz ön değerlendirme</span> ve detaylı bilgi
                    için bizi arayın.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <Phone className="h-8 w-8 text-yellow-400 mb-4" />
                      <h3 className="font-bold text-lg mb-2">Telefon</h3>
                      <p className="text-blue-100">+90 (212) 555 0123</p>
                      <p className="text-sm text-gray-300 mt-1">7/24 Acil Servis</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <MessageCircle className="h-8 w-8 text-green-400 mb-4" />
                      <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                      <p className="text-blue-100">+90 (555) 123 4567</p>
                      <p className="text-sm text-gray-300 mt-1">Anında Yanıt</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-red-400 mb-4" />
                      <h3 className="font-bold text-lg mb-2">Adres</h3>
                      <p className="text-blue-100">Örnek Mahallesi</p>
                      <p className="text-blue-100">Otomotiv Caddesi No:123</p>
                      <p className="text-blue-100">İstanbul</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <Clock className="h-8 w-8 text-blue-400 mb-4" />
                      <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
                      <p className="text-blue-100">Pazartesi - Cumartesi</p>
                      <p className="text-blue-100">08:00 - 18:00</p>
                      <p className="text-sm text-gray-300 mt-1">Pazar Kapalı</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader className="text-center pb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Premium Randevu</h3>
                  <p className="text-gray-600">Özel hizmet için randevunuzu alın</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Araç Markası *</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                          <option>Marka seçiniz</option>
                          <option>Volkswagen</option>
                          <option>Seat</option>
                          <option>Škoda</option>
                          <option>Audi</option>
                          <option>Fiat</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Hizmet Türü *</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                          <option>Hizmet türü seçiniz</option>
                          <option>Mekanik Onarım</option>
                          <option>Elektrik Sistemleri</option>
                          <option>Kaporta & Boya</option>
                          <option>DSG Şanzıman</option>
                          <option>Parça Temini</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tercih Edilen Tarih</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Detaylı Açıklama</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Aracınızın durumu ve ihtiyaçlarınız hakkında detay veriniz..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg">
                      <Calendar className="h-5 w-5 mr-2" />
                      Premium Randevu Al
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AutoExpert
                  </span>
                  <p className="text-xs text-gray-400 -mt-1">Premium Servis</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                15+ yıllık deneyimimiz ve son teknoloji ekipmanlarımızla Volkswagen, Seat, Skoda, Audi ve Fiat
                markalarında premium otomotiv servisi sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  <Smartphone className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Hizmetlerimiz</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Mekanik Onarım</li>
                <li className="hover:text-white transition-colors cursor-pointer">Elektrik Sistemleri</li>
                <li className="hover:text-white transition-colors cursor-pointer">Kaporta & Boya</li>
                <li className="hover:text-white transition-colors cursor-pointer">DSG Şanzıman</li>
                <li className="hover:text-white transition-colors cursor-pointer">Orjinal Parça</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Markalar</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Volkswagen</li>
                <li className="hover:text-white transition-colors cursor-pointer">Seat</li>
                <li className="hover:text-white transition-colors cursor-pointer">Škoda</li>
                <li className="hover:text-white transition-colors cursor-pointer">Audi</li>
                <li className="hover:text-white transition-colors cursor-pointer">Fiat</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">İletişim</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+90 (212) 555 0123</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@autoexpert.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    Örnek Mah. Otomotiv Cad. No:123
                    <br />
                    İstanbul, Türkiye
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">&copy; 2024 AutoExpert Premium Servis. Tüm hakları saklıdır.</p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Kullanım Şartları
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Çerez Politikası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-2xl animate-pulse">
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
