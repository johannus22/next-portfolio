import { AboutSection } from "@/components/about";
import { HomeSection } from "@/components/home";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 relative z-10" id="home">
      <div className="space-y-16">
        <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
          <div className="relative z-10 w-full flex items-center justify-center">
            <HomeSection />
          </div>
        </section>

        <section
          id="about"
          className="min-h-[60vh] flex items-center justify-center"
        >
          <AboutSection />
        </section>

        <section
          id="projects"
          className="min-h-[50vh] flex-1 relative justify-center"
        >
          <Projects />
        </section>

        {/* <section
          id="testimonials"
          className="min-h-[50vh] flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </section> */}
      </div>
    </main>
  );
}
