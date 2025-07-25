import Facture from "./components/Facture";
import ProductInfo from "./components/ProductInfo";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto relative px-5 max-w-[1280px]">
        <div className="grid grid-cols-12  gap-5 2xl:mt-10  mt-[90px] ">
          <ProductInfo />
          <Facture />
        </div>
      </div>
    </>
  );
}
