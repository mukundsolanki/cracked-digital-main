'use client';

import { useEffect, useState } from 'react';

const stats = [
  {
    number: '10,000+',
    label: 'Active Members',
    description: 'Developers from around the world',
    color: 'blue'
  },
  {
    number: '500+',
    label: 'Technical Articles',
    description: 'In-depth guides and tutorials',
    color: 'purple'
  },
  {
    number: '50+',
    label: 'Expert Mentors',
    description: 'Industry professionals ready to help',
    color: 'green'
  },
  {
    number: '1,000+',
    label: 'Projects Completed',
    description: 'Collaborative coding projects',
    color: 'orange'
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600'
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export default function CommunityStats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of developers who are already part of the CRACKED community and advancing their careers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Stat Number */}
              <div className="relative mb-4">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${getColorClasses(stat.color)} bg-clip-text text-transparent transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
                     style={{ animationDelay: `${index * 100}ms` }}>
                  {stat.number}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(stat.color)} opacity-10 rounded-lg blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>

              {/* Stat Label */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>

              {/* Stat Description */}
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Movement
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Be part of a community that's shaping the future of technology. 
              Whether you're a beginner or an expert, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Join Now
              </a>
              <a
                href="/about"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
