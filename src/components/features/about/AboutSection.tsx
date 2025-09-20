import { 
  LightBulbIcon, 
  HeartIcon, 
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    description: "We believe in pushing the boundaries of what's possible in technology and education, constantly evolving to meet the needs of tomorrow's developers."
  },
  {
    icon: HeartIcon,
    title: "Community Driven",
    description: "Our strength lies in our community. Every member contributes to making CRACKED a better place for learning, growing, and succeeding together."
  },
  {
    icon: RocketLaunchIcon,
    title: "Growth Focused",
    description: "We're committed to accelerating your career growth through practical resources, expert mentorship, and real-world project experiences."
  },
  {
    icon: GlobeAltIcon,
    title: "Global Impact",
    description: "Building a worldwide network of skilled developers who are shaping the future of technology across industries and continents."
  }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-black rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header - Left Aligned */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-left">
            Our
            <span className="text-yellow-600"> Story</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed text-left">
            Founded with a vision to democratize technical education and create a supportive ecosystem for developers worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To empower developers of all levels with the knowledge, tools, and community support they need to excel in their careers and contribute meaningfully to the tech industry.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that great software is built by great developers, and great developers are nurtured in great communities.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-black mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To become the world's leading platform for technical education and developer community, where anyone can learn, grow, and achieve their full potential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where technology education is accessible, practical, and driven by real-world applications.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-yellow-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
