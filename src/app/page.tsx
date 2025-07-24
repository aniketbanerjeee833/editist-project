import { getTestimonials } from "@/lib/testimonials";
import HomeClient from "./home-client";

export default function HomePage() {
  const testimonials = getTestimonials();

  return <HomeClient testimonials={testimonials} />;
}
