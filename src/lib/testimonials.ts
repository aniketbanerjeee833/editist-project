import fs from 'fs';
import path from 'path';

const testimonialsDirectory = path.join(process.cwd(), 'src/content/testimonials');

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

export function getTestimonials(): Testimonial[] {
  const fileNames = fs.readdirSync(testimonialsDirectory);
  const allTestimonialsData = fileNames.map((fileName) => {
    const fullPath = path.join(testimonialsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const testimonial = JSON.parse(fileContents) as Testimonial;
    return testimonial;
  });
  return allTestimonialsData;
}
