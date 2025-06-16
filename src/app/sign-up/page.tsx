import Image from "next/image";
import SignupForm from "@/components/SignupForm";

export default function SignUpPage() {
  return (
    <main className="flex flex-1 flex-col lg:flex-row md:flex-row p-2 relative">
      <div className="w-full relative bg-base-100 flex items-center justify-center p-8 lg:w-1/2 md:w-full">
        <Image
          src="/signup-image.jpg"
          alt="Signup Visual"
          fill
          className="max-w-full h-auto clip-custom"
        />
      </div>
      <div className="w-full flex items-center justify-center p-8 lg:w-1/2 md:w-full">
        <SignupForm />
      </div>
    </main>
  );
}
