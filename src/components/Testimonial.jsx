import bannerFood from "../assets/BannerFood.jpeg";
import icon_1 from "../assets/icon_1.jpeg";
const Testimonial = () => {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 md:mb-6 text-center">
        Comentários
      </h2>

      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="space-y-5 lg:max-w-[400px]">
            <p className="text-xl font-serif relative z-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              earum nisi iure, facilis id inventore minus eaque cum quaerat
              pariatur nemo natus, vero nulla, numquam magnam est officiis
              provident eveniet?
            </p>
            <div className="flex items-center gap-3">
              <img
                src={icon_1}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">Lukeni Miguel</h2>
                <p className="text-sm">Designation</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={bannerFood}
              alt=""
              className="relative z-10 w-full lg:max-w-[280px] img-shadow rounded-full"
            />
            <div
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[400px] w-[400px] 
            bg-yellow-200 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
