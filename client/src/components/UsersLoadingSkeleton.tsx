import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const UsersLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-32">
      {Array.from({ length: 10 }).map((e, index) => {
        return (
          <Box
            className="flex flex-col justify-center items-center relative"
            key={index}
            height={250}
            width={250}
            borderRadius="2xl"
          >
            <Skeleton height="full" width="full" borderRadius="2xl" />
            <SkeletonCircle
              width={150}
              height={150}
              className="translate-y-[-5rem] absolute"
            />
          </Box>
        );
      })}
    </div>
  );
};

export default UsersLoadingSkeleton;
