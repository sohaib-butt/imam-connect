import { Header, Footer } from "@/components/shared";
import { IntroSection, PaymentForm } from "@/components/Checkout";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <PaymentForm />
      <Footer />
    </div>
  );
};

export default page;
