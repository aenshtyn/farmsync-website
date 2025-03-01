// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Smart Farm Management for Kenya&apos;s Future
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                FarmSync revolutionizes how farms operate with integrated technology solutions for dairy management and feed formulation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/request-demo" 
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition-colors hover:bg-blue-700"
                >
                  Request Demo
                </Link>
                <Link 
                  href="/products" 
                  className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium transition-colors hover:bg-white hover:text-green-700"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-full max-w-md md:h-80 lg:h-96">
                <Image 
                  src="/images/farm-hero.jpg" 
                  alt="Modern farming with FarmSync"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Our Agricultural Solutions
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Product Card 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 text-green-600">
                {/* Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">FarmSync Platform</h3>
              <p className="mb-4 text-gray-600">
                A complete farm management system that integrates all your agricultural operations into one platform.
              </p>
              <Link href="/products/platform" className="text-blue-600 hover:text-blue-800">
                Learn more →
              </Link>
            </div>

            {/* Product Card 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 text-green-600">
                {/* Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Dairy Management</h3>
              <p className="mb-4 text-gray-600">
                Specialized tools for dairy farms to track production, animal health, breeding, and financial performance.
              </p>
              <Link href="/products/dairy" className="text-blue-600 hover:text-blue-800">
                Learn more →
              </Link>
            </div>

            {/* Product Card 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 text-green-600">
                {/* Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Feed Formulation</h3>
              <p className="mb-4 text-gray-600">
                Advanced feed formulation tools to optimize animal nutrition while minimizing costs.
              </p>
              <Link href="/products/formulator" className="text-blue-600 hover:text-blue-800">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Why Choose FarmSync
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">Increase Productivity</h3>
                  <p className="text-gray-600">Streamline operations and reduce manual work with automated tracking and reporting.</p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">Minimize Costs</h3>
                  <p className="text-gray-600">Optimize resource usage and identify cost-saving opportunities in your operations.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">Data-Driven Decisions</h3>
                  <p className="text-gray-600">Make informed decisions based on real-time data and comprehensive analytics.</p>
                </div>
              </div>
              
              {/* Benefit 4 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">Save Time</h3>
                  <p className="text-gray-600">Reduce time spent on administrative tasks and focus on growing your agricultural business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
            What Our Customers Say
          </h2>
          
          <div className="mx-auto max-w-3xl rounded-lg bg-green-50 p-8 shadow-lg">
            <div className="mb-6 flex justify-center">
              <svg className="h-12 w-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="mb-6 text-center text-lg font-medium text-gray-700">
              "FarmSync has completely transformed how we manage our dairy farm. The milk production tracking alone has helped us increase our yield by 15%, and we've reduced feed costs by optimizing our formulations."
            </p>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">John Kamau</p>
              <p className="text-gray-600">Owner, Greenfields Dairy Farm</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-green-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Farm?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join hundreds of Kenyan farmers who are already benefiting from FarmSyncs innovative farm management solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/request-demo" 
              className="rounded-lg bg-white px-8 py-3 font-medium text-green-700 transition-colors hover:bg-gray-100"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="rounded-lg border border-white bg-transparent px-8 py-3 font-medium transition-colors hover:bg-green-600"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}