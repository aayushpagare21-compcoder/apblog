import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="space-y-6">
      <Image src="/test-image.avif" alt="Hero Image" width={1000} height={1000} />
    </section>
  );
}
