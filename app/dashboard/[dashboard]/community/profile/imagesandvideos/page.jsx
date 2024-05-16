import MediaCard from "@/components/Cards/MediaCard";


const VideosAndImagesPage = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-8 px-5 pb-10">
      <MediaCard url="/imgs/prop-6.png" mediaType="image" multiple={true} />
      <MediaCard url="/imgs/prop-6.png" mediaType="video" multiple={true} />
      <MediaCard url="/imgs/prop-6.png" mediaType="image" />
      <MediaCard url="/imgs/prop-6.png" mediaType="video" multiple={true} />
      <MediaCard url="/imgs/prop-6.png" mediaType="image" multiple={true} />
      <MediaCard url="/imgs/prop-6.png" mediaType="image" />
      <MediaCard url="/imgs/prop-6.png" mediaType="video" multiple={true} />
      <MediaCard url="/imgs/prop-6.png" mediaType="image" multiple={true} />
      <MediaCard url="/imgs/prop-6.png" mediaType="image" multiple={true} />
    </div>
  );
};

export default VideosAndImagesPage;
