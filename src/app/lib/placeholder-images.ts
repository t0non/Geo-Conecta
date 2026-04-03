import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Extrai imagens com segurança para evitar crash caso o JSON esteja malformado ou ausente
const images = (data && (data as any).placeholderImages) || [];

export const PlaceHolderImages: ImagePlaceholder[] = images;
