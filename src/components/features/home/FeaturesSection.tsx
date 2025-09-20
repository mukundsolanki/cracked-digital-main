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
  },
  {
    icon: UserGroupIcon,
    title: "Expert Community",
    description:
      "Connect with experienced developers, get mentorship, and collaborate on projects.",
  },
  {
    icon: AcademicCapIcon,
    title: "Learning Paths",
    description:
      "Structured learning journeys designed to take you from beginner to advanced levels.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header - Left Aligned */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-left">
            Why Choose{" "}
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              CRACKED
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed text-left">
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
              className="group relative bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
