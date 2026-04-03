import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Extrai imagens com segurança para evitar crash no servidor
const images = (data && (data as any).placeholderImages) || [];

export const PlaceHolderImages: ImagePlaceholder[] = images;
