import { Header, Footer } from "@/components/shared";
import { IntroSection } from "@/components/Checkout";
import { Success } from "@/components/CheckoutFeedback";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <IntroSection />
      <Success success={false}/>
      <Footer />
    </div>
  );
};

export default page;
