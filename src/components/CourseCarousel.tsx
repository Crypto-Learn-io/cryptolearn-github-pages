import { useEffect, useState } from 'react';
import { courses } from '@/data/courses';
import { Link } from 'react-router-dom';

const CourseCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % courses.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const visible = courses.slice(index, index + 3);
  if (visible.length < 3) {
    visible.push(...courses.slice(0, 3 - visible.length));
  }

  return (
    <div className="overflow-hidden">
      <div className="flex transition-all" style={{ transform: 'translateX(0)' }}>
        {visible.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`} className="crypto-card mr-4 w-72 flex-shrink-0">
            <img src={course.image} alt={course.title} className="h-32 w-full object-cover" />
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">{course.title}</h3>
              <p className="text-xs text-muted-foreground">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCarousel;
