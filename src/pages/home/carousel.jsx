import { Carousel } from "../../components/carousel";

export function Hero() {
  return (
    <>
      <div className="h-[500px] relative">
        <Carousel
          list={[
            { img: "https://i.pravatar.cc/?u=1", title: "", description: "" },
            { img: "https://i.pravatar.cc/?u=2", title: "", description: "" },
            { img: "https://i.pravatar.cc/?u=3", title: "", description: "" },
            { img: "https://i.pravatar.cc/?u=4", title: "", description: "" },
          ]}
          title="Product name"
          description="Product description ...."
        />

        <img
          src="/bg-carousel.png"
          className="w-full absolute bottom-0 right-0 left-o -z-10"
        />
      </div>
    </>
  );
}
