import { useState } from "react";
import { Icon } from "@ui";
import { Carousel } from "@Carousel";

const SLIDER_BUTTONS = [
    { name: "ArrowLeft", side: "left" },
    { name: "ArrowRight", side: "right" },
];

const IMAGES = [
    "/src/assets/images/hero image 1.png",
    "/src/assets/images/hero image 2.png",
    "/src/assets/images/hero image 3.png",
    "/src/assets/images/hero image 4.png",
];

const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    const handleNav = (side) => {
        setIndex((prev) =>
            side === "left"
                ? Math.max(prev - 1, 0)
                : Math.min(prev + 1, images.length - 1)
        );
    };

    return (
        <section
            data-title='Hero Slider'
            className="
            pb-10 
            flex flex-col gap-8"
        >
            {/* Images Slider */}
            <div
                data-id="slider"
                className="
                relative
                w-full h-[304px] 2xl:h-[536px] 
                overflow-hidden"
            >
                <Carousel
                    index={index}
                    onChange={setIndex}
                >
                    {IMAGES.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            className="
                            w-full h-full
                            flex-shrink-0
                            object-cover object-[55%_100%] 2xl:object-bottom-right"
                        />
                    ))}
                </Carousel>

                {SLIDER_BUTTONS.map((button, i) => (
                    <button
                        key={i}
                        onClick={() => handleNav(button.side)}
                        className={`
                        absolute top-[238px] ${button.side === 'left' ? 'left-6' : 'right-6'}
                        size-13 rounded-full
                        hidden 2xl:flex items-center justify-center 
                        bg-white
                        cursor-pointer `}
                    >
                        <Icon
                            name={button.name}
                            className="w-4.5 h-4"
                        />
                    </button>
                ))}

                <div
                    className="
                    absolute bottom-7.25 2xl:bottom-9.25 left-1/2 -translate-x-1/2 
                    flex gap-4"
                >
                    {IMAGES.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`
                            size-2 rounded-full
                            bg-[var(--neutral-1-100)]
                            transiton-all duration-500
                            cursor-pointer
                            ${i === index
                                    ? "w-7.5"
                                    : ""}`}
                        />
                    ))}
                </div>
            </div>

            {/* Slider Caption */}
            <div
                data-id="sliderCaption"
                className="
                flex flex-col 2xl:flex-row 2xl:items-center gap-4 2xl:gap-6"
            >
                <h4 className="
                2xl:w-[643px]
                text-(--neutral-7-100) 2xl:text-[72px] 2xl:leading-[76px] 2xl:tracking-[2px]"
                >
                    Simply Unique<span className="text-(--neutral-4-100)">/</span><br />
                    Simply Better<span className="text-(--neutral-4-100)">.</span>
                </h4>
                <p className="
                2xl:w-[424px]
                caption-1 2xl:body-2 text-(--neutral-4-100)"
                >
                    <span className="caption-1-semi neutral-5-100">3legant </span>
                    is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nemo explicabo ipsam voluptatum excepturi atque in rem nesciunt saepe vitae perspiciatis corporis voluptatem iure nostrum eaque voluptate harum mollitia ab, iusto quas totam placeat. Quas optio, reiciendis repudiandae ullam delectus pariatur assumenda corrupti animi tempore? Facere incidunt odit commodi dolorem, consequatur autem vitae, sapiente ipsam quis recusandae aspernatur voluptatum. Eligendi nemo, sunt in minima, illo autem sint quas vero quasi corporis magnam. Culpa ex nisi, quibusdam odio, tempora recusandae ab fugiat libero, molestias facere inventore. Cupiditate, repellat inventore quae soluta et error. Placeat at delectus aliquam maxime optio cupiditate, culpa quaerat ea. Saepe deserunt rem, animi repellendus illo dolore eveniet culpa reprehenderit dicta tempora debitis vitae praesentium libero voluptatem eius, natus atque. Facere rerum non eius obcaecati sed optio dicta harum placeat facilis dignissimos fugit, eaque quam, repudiandae necessitatibus consequuntur incidunt rem omnis quia neque quasi excepturi, vero autem. Ipsam quibusdam animi voluptas nemo quod distinctio quis officia vel perspiciatis non deserunt, repellat earum architecto minus consequatur necessitatibus est laborum cupiditate cumque, rem tempora dolorum doloribus in. Voluptatum cum sit consectetur nostrum laudantium nobis beatae quibusdam? Distinctio cumque impedit, dolorum qui fugit maxime repellendus quaerat dolore eveniet, natus adipisci fugiat commodi non porro id dolorem suscipit, eaque perspiciatis quo delectus laudantium enim? Vel velit commodi voluptatibus ducimus dignissimos deleniti quis rerum amet ad sit praesentium neque, nemo reprehenderit expedita quas aperiam, cumque cupiditate molestiae aut provident rem placeat? Nobis odit sunt eaque vero dignissimos optio voluptas, maiores laborum sit. Modi distinctio consectetur aspernatur fugit quam deleniti, temporibus eum dicta at, velit, vero delectus. Temporibus, facere dolores. Blanditiis praesentium eligendi eaque omnis odit! Harum veniam molestiae ea placeat rem velit quia quidem tenetur doloribus, eveniet, consequatur consectetur quisquam ratione quos, aliquam id optio vitae sit dolore facilis saepe consequuntur! Tenetur error nam voluptas architecto! Et blanditiis adipisci ea natus, quisquam recusandae praesentium, dicta ipsum suscipit, cumque itaque minus magni? Est fugit praesentium ducimus! Quas voluptatum nihil modi expedita animi facere inventore quo quidem minima, accusantium ullam, corrupti, velit quae veritatis quos unde explicabo aliquam doloribus! Natus quia incidunt hic modi voluptates consequuntur optio! Iure est, tempora excepturi corrupti facere veritatis quis illum eum possimus, nostrum id voluptatibus eaque cupiditate dolore reprehenderit ad ratione consectetur praesentium adipisci eligendi modi. Aut aliquam repellat explicabo nam nemo, eos a iste illum at deserunt quaerat ut consequuntur sint rem corrupti, quo beatae error neque voluptate temporibus eum rerum? Porro totam maxime fuga esse non, autem officia maiores hic laboriosam similique temporibus aliquam harum facere cupiditate asperiores mollitia placeat ipsa consectetur dolore vel magnam libero, quia dignissimos. Est assumenda provident cupiditate enim blanditiis voluptatum alias aut, libero iste quae atque! Accusantium, nam quia voluptates, doloribus, exercitationem corporis ipsa tempora voluptas officiis doloremque ea repellendus aut in tempore. Aliquid repellendus quis facere assumenda minima quidem necessitatibus beatae at placeat inventore nobis, ipsa similique suscipit soluta praesentium dolorem reprehenderit reiciendis totam quo incidunt expedita. Nostrum beatae voluptatibus architecto accusantium laudantium numquam, culpa exercitationem earum, quae doloremque, eius corrupti! Officia nisi excepturi maxime quod nostrum consectetur quas voluptatibus delectus consequuntur incidunt tenetur dolores natus nam, ab optio necessitatibus asperiores veniam laudantium aliquam tempore ut quaerat. Odio ratione corrupti suscipit saepe rem blanditiis voluptate. Quaerat amet ut tempore nisi maiores in reprehenderit eius alias sequi tempora commodi placeat aspernatur eligendi corporis cum laborum, ad quas! Mollitia explicabo fugit quasi beatae provident amet quo quaerat nobis rem corporis quis temporibus veritatis reprehenderit, porro distinctio doloribus itaque aperiam ex modi expedita labore quas? Inventore cum aliquam consequatur, quaerat ratione itaque omnis labore minus porro sint quas asperiores pariatur, earum illo fuga perferendis, quam repellendus deleniti non ipsum. Voluptate iste eius assumenda repellendus? Eius aspernatur dolores cupiditate adipisci perferendis fugit nihil quae esse et, dolorem vel, velit ipsam consectetur excepturi voluptas porro reprehenderit explicabo aliquam ducimus, aut harum. Deserunt ipsum doloribus distinctio voluptatem commodi officia suscipit veritatis, illo architecto nemo quam dignissimos qui quo quis? Ullam atque aliquam ducimus consectetur eligendi quibusdam molestias, velit itaque veritatis iusto possimus, cumque ad incidunt ipsa ipsam numquam aut? Illum error atque facilis animi earum a nesciunt minus laborum, delectus eius, rerum et inventore. Expedita cum tempore, molestias dolores voluptate aliquid, tenetur et sequi fugiat, aspernatur eaque ratione praesentium commodi quasi rem exercitationem assumenda harum. Harum, fugiat! Ex eius ducimus tempore inventore laborum voluptatum blanditiis facilis. Ipsa inventore nihil, ut ex necessitatibus incidunt at tenetur ipsam distinctio sapiente quasi, fugiat similique dolor. Id vel voluptatum culpa corrupti consequuntur tempora quos, error optio, a quas hic autem! Eius, explicabo. Nam, molestias! Nemo, perspiciatis eaque dolore commodi perferendis soluta libero eos sint obcaecati natus consequatur distinctio sunt unde repudiandae, tenetur quia. Exercitationem expedita, quae aut ut tempora architecto nisi reiciendis sed dignissimos aliquid dolorum nulla doloribus tempore. Voluptas possimus magni sapiente? Numquam magni ipsa nostrum possimus? Sapiente doloribus magnam, sint enim nulla est sed quas! Dolorem eveniet, maiores modi ut rerum magnam eius qui voluptate voluptates ullam quis in nemo consequatur porro voluptatum nobis corrupti nihil! Eos tenetur doloribus magnam nihil necessitatibus ex? Harum veritatis, error ab quas repudiandae ipsam vero accusamus aperiam voluptatibus dolorum assumenda. Distinctio molestias perferendis beatae minus magni autem consectetur illo, sequi quos nostrum quod veniam assumenda? Architecto ex dignissimos quibusdam qui molestias officiis, in hic ducimus facere temporibus voluptatibus quam commodi porro perferendis voluptatum voluptates! Quas atque laborum voluptatem cumque dignissimos dolor iste! Est voluptates doloremque sint aliquam odio quo sequi. Omnis corporis maiores praesentium vel! Veniam, nulla! At sint nisi in a perferendis assumenda aliquam quasi tempore fugit iusto itaque, quo ex corrupti quisquam. Illum expedita voluptas, reiciendis autem, consectetur debitis nisi vero eos voluptates cupiditate quo aliquam ad! Iste corporis consequatur perferendis inventore error aperiam eos facere ex? Vitae quae cumque quas sit natus sed aut architecto illum laborum odit eum voluptas, harum porro ipsa perspiciatis eos earum, inventore sapiente in repudiandae labore laboriosam commodi fuga quidem? Exercitationem blanditiis laboriosam non assumenda, quae vel incidunt odit quaerat nemo necessitatibus, dolorem sint voluptas mollitia soluta dignissimos culpa deleniti? Consequatur quaerat tempora veritatis omnis?
                </p>
            </div>
        </section>
    );
};

export default HeroSlider;
