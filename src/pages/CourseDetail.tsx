import { useParams, Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import Header from '@/components/Header';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container px-4 py-6">
          <p>Course not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-6 md:py-8">
        <Link to="/courses" className="text-sm text-primary mb-4 inline-block">← Back to Courses</Link>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-muted-foreground mb-4">{course.overview}</p>
          <img src={course.image} alt={course.title} className="mb-6 rounded-lg" />
          {course.modules.map((m, idx) => (
            <div key={idx} className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Module {idx + 1}: {m.title}</h2>
              <ul className="list-disc list-inside space-y-1">
                {m.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </div>
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

export default CourseDetail;
