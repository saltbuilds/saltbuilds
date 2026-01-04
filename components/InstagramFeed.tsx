import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';

// Interface for Instagram API Response
interface InstagramPost {
    id: string;
    caption?: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
}

const PLACEHOLDER_POSTS = [
    { id: '1', media_type: 'IMAGE', color: '#81C7D4', media_url: '', permalink: 'https://instagram.com' },
    { id: '2', media_type: 'VIDEO', color: '#A7DEEB', media_url: '', permalink: 'https://instagram.com' },
    { id: '3', media_type: 'IMAGE', color: '#5FB8CC', media_url: '', permalink: 'https://instagram.com' },
    { id: '4', media_type: 'CAROUSEL_ALBUM', color: '#9DD9E5', media_url: '', permalink: 'https://instagram.com' },
];

const InstagramFeed: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);

    // You need to set VITE_INSTAGRAM_ACCESS_TOKEN and VITE_INSTAGRAM_USER_ID in your .env file
    // See: https://developers.facebook.com/docs/instagram-api
    const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const instagramUserId = import.meta.env.VITE_INSTAGRAM_USER_ID;

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            if (!accessToken || !instagramUserId) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://graph.facebook.com/v21.0/${instagramUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=4`
                );

                if (!response.ok) throw new Error('Failed to fetch instagram posts');

                const data = await response.json();
                setPosts(data.data.slice(0, 4));
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
                // Fallback to empty to show placeholders
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, [accessToken, instagramUserId]);

    const displayPosts = posts.length > 0 ? posts : PLACEHOLDER_POSTS;

    return (
        <div className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements - reused from App/Hero to maintain theme */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#81C7D4]/10 to-transparent rounded-full blur-[80px]" />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8306 4.17761 21.2235 4.77353 21.475 5.425C21.722 6.063 21.89 6.787 21.94 7.852C21.99 8.918 22 9.258 22 11.976C22 14.694 21.99 15.034 21.94 16.1C21.89 17.165 21.722 17.89 21.475 18.528C21.2235 19.1795 20.8306 19.7754 20.322 20.275C19.766 20.83 19.209 21.175 18.55 21.422C17.912 21.67 17.187 21.837 16.122 21.887C15.056 21.937 14.717 21.947 12 21.947C9.283 21.947 8.944 21.937 7.878 21.887C6.813 21.837 6.088 21.67 5.45 21.422C4.79093 21.1683 4.19507 20.7754 3.696 20.275C3.18739 19.7663 2.79447 19.1705 2.542 18.51C2.294 17.872 2.127 17.147 2.077 16.082C2.027 15.016 2.017 14.677 2.017 11.959C2.017 9.241 2.027 8.902 2.077 7.836C2.127 6.771 2.294 6.046 2.542 5.408C2.79447 4.74751 3.18739 4.15165 3.696 3.643C4.20459 3.13439 4.80045 2.74147 5.461 2.489C6.099 2.241 6.823 2.074 7.889 2.024C8.955 1.974 9.294 1.964 12.012 1.964L12 2ZM12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12C17 9.239 14.761 7 12 7ZM12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15ZM16.964 5.864C16.964 5.23 16.452 4.717 15.818 4.717C15.184 4.717 14.67 5.23 14.67 5.864C14.67 6.498 15.184 7.01 15.818 7.01C16.452 7.01 16.964 6.498 16.964 5.864Z" fill={COLORS.NAVY} />
                            </svg>
                            <div className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.AQUA }}>
                                @SALT.BUILDS
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: COLORS.NAVY }}>
                            OFFICIAL INSTAGRAM
                        </h2>
                    </div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all hover:gap-4 group"
                        style={{ color: COLORS.NAVY }}
                    >
                        Follow Us
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {displayPosts.map((post, index) => {
                        // Fallback color logic if real images aren't loaded or placeholders are used
                        const fallbackColor = PLACEHOLDER_POSTS[index % PLACEHOLDER_POSTS.length].color;
                        const isPlaceholder = !post.media_url;

                        return (
                            <a
                                key={post.id}
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer block"
                            >
                                {/* Background/Image */}
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
                                    style={{
                                        backgroundColor: fallbackColor,
                                        backgroundImage: post.media_type === 'VIDEO' ? `url(${post.thumbnail_url})` : `url(${post.media_url})`
                                    }}
                                >
                                    {isPlaceholder && <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    {post.media_type === 'VIDEO' ? (
                                        <svg className="w-8 h-8 text-white drop-shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-8 h-8 text-white drop-shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    )}
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default InstagramFeed;
