import HotelList from "@/app/componensts/hotel/HotelList";
import Filter from "@/app/componensts/search/Filter";
import Search from "@/app/componensts/search/Search";
export default function HotelListPage() {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12">
          <Search fromList={true} />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList/>
        </div>
      </section>
    </>
  );
}
