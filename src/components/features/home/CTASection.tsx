import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const benefits = [
  'Access to exclusive technical resources',
  'Connect with industry experts',
  'Join collaborative projects',
  'Get personalized mentorship',
  'Advance your career faster',
  'Build a strong professional network'
];

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-white/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Level Up
            </span>
            <br />
            Your Career?
          </h2>
          
          {/* Enhanced Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Join thousands of developers who are already advancing their careers with CRACKED. 
            Your journey to technical excellence starts here.
          </p>

          {/* Enhanced Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-100 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/join"
              className="group relative bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                Join CRACKED Community
                <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
