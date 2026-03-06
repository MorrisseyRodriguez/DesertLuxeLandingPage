import { useState } from 'react';
import { Users, Zap, Gauge, ChevronLeft, ChevronRight, ChevronDown, Car, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <OccasionsSection />
      <VehicleCardsSection />
      <FloatingTextButton />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tight">
          Desert Luxe Exotics
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">Vehicles</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">Occasions</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">About</span>
            <ChevronDown size={16} />
          </div>
          <button className="px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dnxzhyyw0/video/upload/v1756694442/5th_version_of_b_roll_jw0fvt.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}

function OccasionsSection() {
  const occasions = [
    {
      title: 'Birthday & Anniversary Surprises',
      copy: 'Make the moment unforgettable. Surprise them with the car they\'ve always dreamed of.',
      image: '/images/occassions/3d754e8fc8ab9dee74ef405dbd3a0540.jpg'
    },
    {
      title: 'Weekend Visitors',
      copy: 'In town for the weekend? Turn a normal trip into something unforgettable.',
      image: '/images/occassions/orange-mclaren-570s-rental-profile-view-mph-club.webp'
    },
    {
      title: 'Photo Shoots',
      copy: 'Luxury cars that elevate your photos, videos, and content instantly.',
      image: '/images/occassions/370b75a83014d5825bac11414d1f89a4.jpg'
    },
    {
      title: 'For the Experience',
      copy: 'Take the wheel and enjoy Arizona\'s open desert roads the way they were meant to be driven.',
      image: '/images/occassions/0x0.webp'
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        Why are you renting?
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {occasions.map((occasion, index) => (
          <div
            key={index}
            className="relative h-96 overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={occasion.image}
              alt={occasion.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                console.error('Failed to load image:', occasion.image);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {occasion.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {occasion.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VehicleCardsSection() {
  const vehicles = [
    {
      name: 'McLaren 600LT Spider',
      images: [
        '/images/McLaren/IMG_5896.webp',
        '/images/McLaren/IMG_5893.webp',
        '/images/McLaren/IMG_5901.webp',
        '/images/McLaren/IMG_5902.webp',
        '/images/McLaren/IMG_5904.webp',
        '/images/McLaren/IMG_5905.webp',
        '/images/McLaren/IMG_5906.webp',
        '/images/McLaren/IMG_5908.webp',
        '/images/McLaren/IMG_5909.webp',
        '/images/McLaren/IMG_5913.webp',
        '/images/McLaren/IMG_5917.webp'
      ],
      specs: [
        { icon: Users, label: 'Seats: 2' },
        { icon: Car, label: 'Convertible' },
        { icon: Gauge, label: 'Automatic' }
      ]
    },
    {
      name: 'Aston Martin Vantage',
      images: [
        '/images/Vantage/IMG_1403.webp',
        '/images/Vantage/IMG_1344.webp',
        '/images/Vantage/IMG_1407.webp',
        '/images/Vantage/IMG_1408.webp',
        '/images/Vantage/IMG_1412.webp',
        '/images/Vantage/IMG_1413.webp',
        '/images/Vantage/IMG_1414.webp',
        '/images/Vantage/IMG_1415.webp',
        '/images/Vantage/IMG_1416.webp'
      ],
      specs: [
        { icon: Users, label: 'Seats: 2' },
        { icon: Gauge, label: 'Automatic' },
        { icon: Zap, label: '0–60: 3.5s' }
      ]
    },
    {
      name: 'Corvette C8 Convertible',
      images: [
        '/images/Corvette/Screenshot_2026-03-05_202052.png',
        '/images/Corvette/IMG_4932.webp',
        '/images/Corvette/IMG_4933.webp',
        '/images/Corvette/IMG_4935.webp',
        '/images/Corvette/IMG_4937.webp',
        '/images/Corvette/IMG_4939.webp',
        '/images/Corvette/1252923892797238028.webp',
        '/images/Corvette/1854312982462368141.webp',
        '/images/Corvette/3064853603363049073.webp',
        '/images/Corvette/8072586000505213353.webp'
      ],
      specs: [
        { icon: Users, label: 'Seats: 2' },
        { icon: Car, label: 'Convertible' },
        { icon: Gauge, label: 'Automatic' }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rental Options
          </h2>
          <p className="text-xl text-gray-400">
            Available for Pick-up and Delivery Now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle }: { vehicle: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-red-600/20 transition-all duration-300">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={vehicle.images[currentImageIndex]}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            console.error('Failed to load vehicle image:', vehicle.images[currentImageIndex]);
          }}
        />

        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {vehicle.images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-red-600 w-6'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-4">
          {vehicle.name}
        </h3>

        <div className="space-y-2 mb-6">
          {vehicle.specs.map((spec: any, specIndex: number) => (
            <div key={specIndex} className="flex items-center gap-2 text-gray-300">
              <spec.icon size={18} className="text-red-500" />
              <span className="text-sm">{spec.label}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

function FloatingTextButton() {
  const phoneNumber = '1234567890';

  const handleTextClick = () => {
    window.open(`sms:${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleTextClick}
      className="fixed right-6 bottom-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Send us a text"
    >
      <MessageCircle size={24} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Text Us
      </span>
    </button>
  );
}

export default App;
