import { TSpacingSizeTypes } from 'mobile-styles';

interface ISpacing {
  mt: TSpacingSizeTypes;
  mb: TSpacingSizeTypes;
  pt: TSpacingSizeTypes;
  pb: TSpacingSizeTypes;
  pr: TSpacingSizeTypes;
  pl: TSpacingSizeTypes;
}

export interface ITextSkeleton {
  width: number;
  height: number;
  pt?: TSpacingSizeTypes;
}

export interface IFullWidthCardSkeleton {
  title: ITextSkeleton;
  subtitle: ITextSkeleton;
  spacing: ISpacing;
}

export interface ICardLinksSkeleton {
  title: ITextSkeleton;
  ml: TSpacingSizeTypes;
  pt: TSpacingSizeTypes;
  pb: TSpacingSizeTypes;
}
