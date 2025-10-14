'use client';

import { FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { FiShare2, FiCopy } from 'react-icons/fi';
import { useState } from 'react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  hashtags?: string[];
  className?: string;
  showCopyButton?: boolean;
  variant?: 'horizontal' | 'vertical' | 'dropdown';
}

export default function SocialShare({
  url,
  title = 'CRACKED - Technical Community',
  description = 'Join the ultimate technical community for developers, engineers, and tech enthusiasts.',
  hashtags = ['CrackedCommunity', 'TechCommunity', 'Developers'],
  className = '',
  showCopyButton = true,
  variant = 'horizontal',
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Get current URL if not provided
  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');

  // Encode URL and text for sharing
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.map(tag => `#${tag}`).join(' ');
  const encodedHashtags = encodeURIComponent(hashtagString);

  // Social media share URLs
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%20${encodedDescription}%20${encodedHashtags}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}%20${encodedDescription}`,
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    window.open(
      link,
      '_blank',
      'width=600,height=400,scrollbars=yes,resizable=yes'
    );
    setShowDropdown(false);
  };

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium'
          aria-label='Share this page'
          aria-expanded={showDropdown}
          aria-haspopup='true'
        >
          <FiShare2 className='w-4 h-4' />
          Share
        </button>

        {showDropdown && (
          <div className='absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50 min-w-[200px]'>
            <div className='space-y-1'>
              <button
                onClick={() => handleShare('twitter')}
                className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200'
                aria-label='Share on Twitter'
              >
                <FaTwitter className='w-4 h-4 text-blue-500' />
                <span className='text-gray-700'>Twitter</span>
              </button>

              <button
                onClick={() => handleShare('linkedin')}
                className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200'
                aria-label='Share on LinkedIn'
              >
                <FaLinkedin className='w-4 h-4 text-blue-700' />
                <span className='text-gray-700'>LinkedIn</span>
              </button>

              <button
                onClick={() => handleShare('facebook')}
                className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200'
                aria-label='Share on Facebook'
              >
                <FaFacebookF className='w-4 h-4 text-blue-600' />
                <span className='text-gray-700'>Facebook</span>
              </button>

              {showCopyButton && (
                <button
                  onClick={handleCopyUrl}
                  className='flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200'
                  aria-label='Copy link to clipboard'
                >
                  <FiCopy className='w-4 h-4 text-gray-600' />
                  <span className='text-gray-700'>
                    {copied ? 'Copied!' : 'Copy Link'}
                  </span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <button
          onClick={() => handleShare('twitter')}
          className='flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200'
          aria-label='Share on Twitter'
        >
          <FaTwitter className='w-5 h-5' />
        </button>

        <button
          onClick={() => handleShare('linkedin')}
          className='flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200'
          aria-label='Share on LinkedIn'
        >
          <FaLinkedin className='w-5 h-5' />
        </button>

        <button
          onClick={() => handleShare('facebook')}
          className='flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200'
          aria-label='Share on Facebook'
        >
          <FaFacebookF className='w-5 h-5' />
        </button>

        {showCopyButton && (
          <button
            onClick={handleCopyUrl}
            className='flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200'
            aria-label='Copy link to clipboard'
          >
            <FiCopy className='w-5 h-5' />
          </button>
        )}
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className='text-sm font-medium text-gray-600'>Share:</span>

      <button
        onClick={() => handleShare('twitter')}
        className='flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200'
        aria-label='Share on Twitter'
      >
        <FaTwitter className='w-4 h-4' />
      </button>

      <button
        onClick={() => handleShare('linkedin')}
        className='flex items-center justify-center w-8 h-8 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-200'
        aria-label='Share on LinkedIn'
      >
        <FaLinkedin className='w-4 h-4' />
      </button>

      <button
        onClick={() => handleShare('facebook')}
        className='flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200'
        aria-label='Share on Facebook'
      >
        <FaFacebookF className='w-4 h-4' />
      </button>

      {showCopyButton && (
        <button
          onClick={handleCopyUrl}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          aria-label='Copy link to clipboard'
        >
          <FiCopy className='w-4 h-4' />
        </button>
      )}
    </div>
  );
}
