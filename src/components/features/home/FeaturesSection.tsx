import {
  CodeBracketIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CodeBracketIcon,
    title: "Technical Resources",
    description:
      "Access comprehensive tutorials, code examples, and best practices from industry experts.",
    gradient: "from-blue-500 to-blue-600",
    stats: "500+ Articles",
  },
  {
    icon: UserGroupIcon,
    title: "Expert Community",
    description:
      "Connect with experienced developers, get mentorship, and collaborate on projects.",
    gradient: "from-purple-500 to-purple-600",
    stats: "10K+ Members",
  },
  {
    icon: AcademicCapIcon,
    title: "Learning Paths",
    description:
      "Structured learning journeys designed to take you from beginner to advanced levels.",
    gradient: "from-green-500 to-green-600",
    stats: "50+ Courses",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CRACKED
            </span>{" "}
            ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive resources, expert guidance, and a
            supportive community to accelerate your technical career and
            personal growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-gray-300 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="relative flex items-center justify-between">
                <span className="text-blue-400 font-medium text-sm">
                  {feature.stats}
                </span>
                <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
