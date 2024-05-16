import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";


const ImagesVideosSection = () => {
  return (
    <div className="flex flex-col gap-2 pt-8">
      <p className="px-2 font-medium">Upload Picture or video</p>
      <div className="w-full py-10 border border-dashed rounded-xl flex justify-center items-center">
        <button className="border border-[rgba(0,0,0,0.1)] text-xs font-bold text-thememutedtext px-5 py-2 rounded">
          Upload Image Video
        </button>
      </div>
      <p className="px-2 font-medium">Description</p>
      <textarea
        className="w-full border rounded-xl outline-none px-3 py-2 text-sm"
        name="post"
        id="post"
        placeholder="Write Something"
        rows={3}
      ></textarea>
      <div className="flex gap-1 w-full px-3 py-2 border rounded-full">
        <Image src="/svgs/location.svg" width={12} height={16} />
        <input
          type="text"
          name="location"
          id="location"
          className="outline-none text-sm"
          placeholder="Location"
        />
      </div>
      <div className="flex gap-5 mt-10">
        <button className="py-3 border border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.5)] w-full rounded-full font-semibold">
          Cancel
        </button>
        <button className="bg-primary py-3 text-white w-full rounded-full font-medium">
          Post
        </button>
      </div>
    </div>
  );
};

export default ImagesVideosSection;
