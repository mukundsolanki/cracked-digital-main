import { useEffect, useState } from 'react';

/**
 * Custom hook for generating and managing shareable URLs
 * Provides utilities for URL generation, encoding, and sharing functionality
 */
export function useShareableUrl() {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  /**
   * Generate a shareable URL with optional UTM parameters
   * @param path - Optional path to append to base URL
   * @param utmParams - Optional UTM parameters for tracking
   * @returns Formatted URL with parameters
   */
  const generateShareUrl = (
    path?: string,
    utmParams?: {
      source?: string;
      medium?: string;
      campaign?: string;
      content?: string;
    }
  ): string => {
    if (!isClient) return '';

    const baseUrl = window.location.origin;
    const fullPath = path ? `${baseUrl}${path}` : currentUrl;
    
    if (!utmParams) return fullPath;

    const url = new URL(fullPath);
    
    if (utmParams.source) url.searchParams.set('utm_source', utmParams.source);
    if (utmParams.medium) url.searchParams.set('utm_medium', utmParams.medium);
    if (utmParams.campaign) url.searchParams.set('utm_campaign', utmParams.campaign);
    if (utmParams.content) url.searchParams.set('utm_content', utmParams.content);

    return url.toString();
  };

  /**
   * Generate social media specific URLs with tracking
   * @param platform - Social media platform
   * @param path - Optional path
   * @returns URL with platform-specific UTM parameters
   */
  const generateSocialUrl = (
    platform: 'twitter' | 'linkedin' | 'facebook',
    path?: string
  ): string => {
    return generateShareUrl(path, {
      source: platform,
      medium: 'social',
      campaign: 'community_sharing',
      content: platform === 'twitter' ? 'tweet' : platform === 'linkedin' ? 'post' : 'share'
    });
  };

  /**
   * Encode text for URL sharing
   * @param text - Text to encode
   * @returns URL encoded text
   */
  const encodeForUrl = (text: string): string => {
    return encodeURIComponent(text);
  };

  /**
   * Generate social media share URLs
   * @param platform - Social platform
   * @param shareData - Data to share
   * @returns Formatted share URL for the platform
   */
  const getShareUrl = (
    platform: 'twitter' | 'linkedin' | 'facebook',
    shareData: {
      url?: string;
      title?: string;
      description?: string;
      hashtags?: string[];
    }
  ): string => {
    const shareUrl = shareData.url || generateSocialUrl(platform);
    const encodedUrl = encodeForUrl(shareUrl);
    const encodedTitle = encodeForUrl(shareData.title || '');
    const encodedDescription = encodeForUrl(shareData.description || '');

    switch (platform) {
      case 'twitter':
        const hashtags = shareData.hashtags?.map(tag => `#${tag}`).join(' ') || '';
        const encodedHashtags = encodeForUrl(hashtags);
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%20${encodedHashtags}`;
      
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
      
      default:
        return shareUrl;
    }
  };

  /**
   * Copy URL to clipboard
   * @param url - URL to copy (defaults to current URL)
   * @returns Promise<boolean> - Success status
   */
  const copyToClipboard = async (url?: string): Promise<boolean> => {
    if (!isClient || !navigator.clipboard) return false;

    try {
      await navigator.clipboard.writeText(url || currentUrl);
      return true;
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
      return false;
    }
  };

  /**
   * Open share URL in new window
   * @param url - URL to open
   * @param platform - Platform being shared to (for window sizing)
   */
  const openShareWindow = (url: string, platform?: string): void => {
    if (!isClient) return;

    const windowFeatures = platform === 'twitter' || platform === 'facebook'
      ? 'width=600,height=400,scrollbars=yes,resizable=yes'
      : 'width=600,height=600,scrollbars=yes,resizable=yes';

    window.open(url, '_blank', windowFeatures);
  };

  return {
    currentUrl,
    isClient,
    generateShareUrl,
    generateSocialUrl,
    encodeForUrl,
    getShareUrl,
    copyToClipboard,
    openShareWindow,
  };
}
