import template1 from "../assets/email-template1.png";
import template2 from "../assets/email-template2.png";

const EmailTemplates = () => {
  return (
    <div className="py-6">
      <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-l from-green-800 to-green-400 text-[1.7rem] sm:text-6xl font-bold select-none">
        Browse templates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-8 px-4 lg:px-[250px] grid-rows-[420px] mt-8">
        <div className="rounded-3xl outline outline-2 outline-transparent hover:outline-green-400 p-2 cursor-pointer shadow-2xl overflow-hidden">
          <img src={template1} alt="template" className="w-full h-full object-contain" />
        </div>
        <div className="rounded-3xl outline outline-2 outline-transparent hover:outline-green-400 p-2 cursor-pointer shadow-2xl overflow-hidden">
          <img src={template2} alt="template" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;
