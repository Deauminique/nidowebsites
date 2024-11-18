import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, FileText, Users, Image } from 'lucide-react';

const modules = [
  {
    title: 'Portfolio Projecten',
    description: 'Beheer uw portfolio projecten',
    icon: Image,
    link: '/admin/projects'
  },
  {
    title: 'Diensten',
    description: 'Beheer uw diensten',
    icon: FileText,
    link: '/admin/services'
  },
  {
    title: 'Testimonials',
    description: 'Beheer klant testimonials',
    icon: Users,
    link: '/admin/testimonials'
  },
  {
    title: 'Instellingen',
    description: 'Beheer CMS instellingen',
    icon: Settings,
    link: '/admin/settings'
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {modules.map((module) => (
                  <Link
                    key={module.title}
                    to={module.link}
                    className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <module.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{module.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{module.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}