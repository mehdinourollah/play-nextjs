import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp max-w-[780px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Open-source SaaS Starter Kit and Boilerplate for Next.js
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Next.js SaaS Boilerplate and Starter Kit designed and built
                  for SaaS startups. It comes with all necessary integrations,
                  pages, and components you need to launch a feature-rich SaaS
                  websites.
                </p>
               
              
              </div>
            </div>

            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  {/* <Image
                    src="/images/hero/hero-image.jpg"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={316}
                  /> */}
                </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
