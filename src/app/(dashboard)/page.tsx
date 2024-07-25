import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/courses/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.action";

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    email_address: "trananhtuan400@gmail.com",
    username: "evondev",
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
};

export default page;