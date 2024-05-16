import CommunityPost from "@/components/Sections/Community/Post";


const MyBlogPage = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <CommunityPost isBlog />
      <CommunityPost isBlog />
      <CommunityPost isBlog />
    </div>
  );
};

export default MyBlogPage;
