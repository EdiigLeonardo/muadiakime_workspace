// app/about/page.tsx
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Title */}
      <h1 className="text-3xl font-bold mb-6">Our Story</h1>

      {/* First Paragraph */}
      <div className="space-y-4 mb-8">
        <p>
          Understanding the future that we are trying to create a growing
          foundation for our business and our growth in digital business, we
          will continue to work with our customers across the world. We have a
          lot of experience in our business and we can be able to help them
          better understand their impact on our business.
        </p>
        <p>
          In order to ensure that we have competitive working strengths in our
          business, we will continue to work with our customers through working,
          innovation, and sustainability.
        </p>
      </div>

      {/* Image Placeholder - Full width */}
      <div className="bg-gray-100 h-64 w-full mb-8 flex items-center justify-center">
        <span className="text-gray-500">
          [Imagem ilustrativa sobre nossa história]
        </span>
      </div>

      <Separator className="my-8" />

      {/* Stats Section - Inline with minimal spacing */}
      <div className="flex flex-wrap justify-between gap-4 mb-8">
        {["10.5k", "3.1k", "45.5k", "25k", "6"].map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl font-bold">{stat}</p>
          </div>
        ))}
      </div>

      <Separator className="my-8" />

      {/* Team Section - Simple list format */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <div className="bg-gray-100 h-40 mb-2 flex items-center justify-center">
            <span className="text-gray-500">Tom Cruise</span>
          </div>
          <p className="font-bold">Tom Cruise</p>
          <p className="text-sm">Project Culture</p>
          <p className="text-xs text-gray-500">© 2020</p>
        </div>

        <div>
          <div className="bg-gray-100 h-40 mb-2 flex items-center justify-center">
            <span className="text-gray-500">Emma Watson</span>
          </div>
          <p className="font-bold">Emma Watson</p>
          <p className="text-sm">Compliance</p>
          <p className="text-xs text-gray-500">© 2020</p>
        </div>

        <div>
          <div className="bg-gray-100 h-40 mb-2 flex items-center justify-center">
            <span className="text-gray-500">Will Smith</span>
          </div>
          <p className="font-bold">Will Smith</p>
          <p className="text-sm">Real Engine</p>
          <p className="text-xs text-gray-500">© 2020</p>
        </div>
      </div>

      <Separator className="my-8" />

      {/* FAQ Section - Simple text block */}
      <div className="mb-8">
        <div className="bg-gray-100 h-40 w-full mb-4 flex items-center justify-center">
          <span className="text-gray-500">[Imagem sobre criatividade]</span>
        </div>
        <p className="font-bold mb-2">
          What does your creativity resonate with your career?
        </p>
        <p className="italic mb-2">My&#39;s conscious service!</p>
        <p className="mb-2">How you know your career!</p>
        <p className="font-medium mb-2">Higher basic evaluations</p>
        <p>We can focus on this topic.</p>
      </div>
    </div>
  );
}
