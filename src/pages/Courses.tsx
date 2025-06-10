import { Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import Header from '@/components/Header';

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-6 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Course Catalog</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <Link key={course.id} to={`/courses/${course.id}`} className="crypto-card block overflow-hidden">
              <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-1">{course.title}</h2>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="border-t border-border py-6">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Fintech Learn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
