import React from 'react';
import { Grid, List } from 'mobile-styles';
import { Dimensions } from 'react-native';

import {
  ICardLinksSkeleton,
  IFullWidthCardSkeleton,
  ITextSkeleton,
} from './interface';
import { LinkContainer } from './styles';

const skeletonDefaultProps = {
  skeleton: true,
  skeletonShimmerColors: ['#F5F5F5', '#E0E0E0', '#F5F5F5'],
};

const TextSkeleton = ({ width, height, pt }: ITextSkeleton) => (
  <Grid
    {...skeletonDefaultProps}
    pt={pt}
    skeletonWidth={width}
    skeletonHeight={height}
  />
);

const FullWidthCardSkeleton = ({
  title,
  subtitle,
  spacing,
}: IFullWidthCardSkeleton) => (
  <Grid
    borderWidth="width1px"
    borderRadius="small"
    borderColor="neutral4"
    mt={spacing.mt}
    mb={spacing.mb}
    pt={spacing.pt}
    pb={spacing.pb}
    pr={spacing.pr}
    pl={spacing.pl}
    flex={1}
    flexDirection="row"
    alignItems="center"
    justifyContent="flex-start">
    <Grid flex={1}>
      <TextSkeleton width={title.width} height={title.height} />
      <TextSkeleton
        width={subtitle.width}
        height={subtitle.height}
        pt={subtitle.pt}
      />
    </Grid>
  </Grid>
);

export const CardLinksSkeleton = ({
  ml,
  pt,
  pb,
  title,
}: ICardLinksSkeleton) => (
  <LinkContainer>
    <Grid
      flex={1}
      flexDirection="row"
      alignContent="center"
      ml={ml}
      pt={pt}
      pb={pb}>
      <TextSkeleton width={title.width} height={title.height} />
    </Grid>
  </LinkContainer>
);

export const HomeSkeleton = () => {
  return (
    <List scrollEnabled={false}>
      <Grid
        flex={1}
        pl="spacing24px"
        pr="spacing24px"
        testID="home-skeleton-id">
        <Grid pt={'spacing40px'} pb={'spacing40px'}>
          <Grid>
            <TextSkeleton
              width={(Dimensions.get('window').width - 150) / 2}
              height={15}
            />
            <TextSkeleton width={50} height={15} pt="spacing16px" />
          </Grid>
        </Grid>
        <FullWidthCardSkeleton
          title={{
            width: 150,
            height: 15,
          }}
          subtitle={{
            width: 150,
            height: 15,
            pt: 'spacing16px',
          }}
          spacing={{
            mt: 'spacing16px',
            pt: 'spacing80px',
            pb: 'spacing80px',
            pr: 'spacing20px',
            pl: 'spacing20px',
            mb: 'spacing0px',
          }}
        />
        <FullWidthCardSkeleton
          title={{
            width: 150,
            height: 15,
          }}
          subtitle={{
            width: 150,
            height: 15,
            pt: 'spacing16px',
          }}
          spacing={{
            mt: 'spacing16px',
            pt: 'spacing80px',
            pb: 'spacing80px',
            pr: 'spacing20px',
            pl: 'spacing20px',
            mb: 'spacing0px',
          }}
        />
        <CardLinksSkeleton
          ml="spacing8px"
          pt="spacing20px"
          pb="spacing16px"
          title={{
            width: 150,
            height: 15,
          }}
        />
        <FullWidthCardSkeleton
          title={{
            width: 150,
            height: 15,
          }}
          subtitle={{
            width: 150,
            height: 15,
            pt: 'spacing16px',
          }}
          spacing={{
            mt: 'spacing16px',
            mb: 'spacing32px',
            pt: 'spacing32px',
            pb: 'spacing32px',
            pr: 'spacing20px',
            pl: 'spacing20px',
          }}
        />
      </Grid>
    </List>
  );
};
