export interface PublicNews {
  id: string;
  slug: string;
  articleTitle: string;
  category: string;
  source: string;
  coverImage: string;
  publishedDate: string | null;
  status: string;
}

export interface PublicNewsRelated {
  id: string;
  slug: string;
  articleTitle: string;
  category: string;
  coverImage: string;
  publishedDate: string | null;
}

export interface PublicNewsDetail extends PublicNews {
  articleTitleAr: string;
  language: string;
  content: string;
  author: string;
  editorialTeam: string;
  organization: string;
  moc: string;
  city: string;
  emirate: string;
  updatedDate: string | null;
  resources: unknown[];
  shareUrl: string;
  showArticleInfo: boolean;
  showRelatedResources: boolean;
  showShare: boolean;
  showRelatedStories: boolean;
  relatedStories: PublicNewsRelated[];
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api';

export async function getPublishedNews(
  params: Record<string, string> = {},
): Promise<PublicNews[]> {
  const qs = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API_URL}/news${qs ? `?${qs}` : ''}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed to load news (${res.status})`);
    const json = await res.json();
    if (Array.isArray(json)) return json;
    return (json?.data as PublicNews[]) ?? [];
  } catch (e) {
    console.warn('[news] Falling back to empty list:', e);
    return [];
  }
}

export async function getNewsBySlug(slug: string): Promise<PublicNewsDetail | null> {
  try {
    const res = await fetch(`${API_URL}/news/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to load news (${res.status})`);
    }
    return res.json();
  } catch (e) {
    console.warn(`[news] Failed to fetch article "${slug}":`, e);
    return null;
  }
}
