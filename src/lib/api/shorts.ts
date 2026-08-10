export interface PublicShort {
  id: string;
  videoTitle: string;
  videoTitleAr: string;
  slug: string;
  category: string;
  organization: string;
  maritalStage: string;
  duration: string;
  coverImage: string;
  views: number;
  publishedAt: string | null;
  status: string;
}

export interface PublicShortDetail extends PublicShort {
  family: string;
  language: string;
  videoUrl: string;
  speaker: string;
  description: string;
  keyTopics: string[];
  resources: unknown[];
  shareUrl: string;
  lastUpdated: string | null;
  showKeyTopics: boolean;
  showResources: boolean;
  showShare: boolean;
  showSpeaker: boolean;
  showViews: boolean;
  showRelated: boolean;
  relatedVideos: PublicShort[];
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api';

export async function getPublishedShorts(
  params: Record<string, string> = {},
): Promise<PublicShort[]> {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${API_URL}/shorts${qs ? `?${qs}` : ''}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to load shorts (${res.status})`);
  return res.json();
}

export async function getShortBySlug(slug: string): Promise<PublicShortDetail> {
  const res = await fetch(`${API_URL}/shorts/${slug}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to load short (${res.status})`);
  return res.json();
}