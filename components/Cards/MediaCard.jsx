import Image from "next/image";


const MediaCard = ({ url, multiple, mediaType }) => {
  return (
    <div className="flex justify-center items-center bg-black relative">
      <Image
        className="aspect-square w-full"
        src={url}
        alt="image"
        height={270}
        width={270}
      />
      {multiple && mediaType == "image" && (
        <div className="absolute w-full flex justify-end h-fit top-0 p-4">
          <Image src="/svgs/multiimgs.svg" width={28} height={28} />
        </div>
      )}
      {mediaType == "video" && (
        <div className="absolute w-full flex justify-end h-fit top-0 p-4">
          <Image src="/svgs/video.svg" width={28} height={28} />
        </div>
      )}
    </div>
  );
};

export default MediaCard;
