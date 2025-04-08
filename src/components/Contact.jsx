import AnimatedTitle from "../components/AnimatedTitle";
import {Button} from "../components/Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          
          <img
            src="/img/wukong_text.png"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 mt-50"
          />
        </div>

        <div className="absolute -top-40  items-center left-14 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">

          <img
            src="/img/vk2.webp"
            className=" md:scale-160 md:pr-10"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join the <b className="text-red-700 font-extrabold text-sm">W</b>ukong
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;