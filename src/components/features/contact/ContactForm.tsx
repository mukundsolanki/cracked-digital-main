'use client';

import { 
  AcademicCapIcon,
  MicrophoneIcon,
  UserGroupIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const contactOptions = [
  {
    icon: AcademicCapIcon,
    title: "Mentors",
    description: "Share your expertise and guide aspiring developers on their journey.",
    email: "mentors@cracked.digital",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700"
  },
  {
    icon: MicrophoneIcon,
    title: "Speakers",
    description: "Inspire our community with your knowledge and experiences.",
    email: "speakers@cracked.digital",
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700"
  },
  {
    icon: UserGroupIcon,
    title: "Partners & Collaborators",
    description: "Join us in building the future of developer education.",
    email: "partners@cracked.digital",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700"
  }
];

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "General Inquiries",
    value: "hello@cracked.digital",
    href: "mailto:hello@cracked.digital"
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "India",
    href: null
  },
  {
    icon: PhoneIcon,
    label: "Business Hours",
    value: "Mon - Fri, 9AM - 6PM IST",
    href: null
  }
];

export default function ContactForm() {
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Contact Options */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-left">
            How Can You Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleEmailClick(option.email)}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {option.description}
                </p>

                {/* Email Button */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${option.hoverColor}`}>
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>Contact Us</span>
                </div>

                {/* Email Display */}
                <p className="text-sm text-gray-500 mt-4 font-mono">
                  {option.email}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${option.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* General Contact Info */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-left">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our mission to empower developers worldwide. Whether you're a mentor, speaker, 
              or passionate about developer education, we'd love to hear from you.
            </p>
            <button
              onClick={() => handleEmailClick('hello@cracked.digital')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
