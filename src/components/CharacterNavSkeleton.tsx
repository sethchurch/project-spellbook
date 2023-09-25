import { Container, Skeleton } from '@mantine/core';

interface CharacterNavSkeletonProps {
  count?: number;
}

const CharacterNavSkeleton = ({ count = 15 }: CharacterNavSkeletonProps) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Container key={index} className="flex w-full flex-row flex-nowrap items-center justify-between gap-3" p={0}>
            <Skeleton circle animate={false} className="shrink-0" h={28} w={28} />
            <Skeleton animate={false} h={28} />
          </Container>
        ))}
    </>
  );
};

export { CharacterNavSkeleton };
