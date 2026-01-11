
import React from 'react';
import { VideoData } from '../types';

interface VideoCardProps {
  video: VideoData;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:scale-[1.01] mb-12 last:mb-0 max-w-3xl mx-auto">
      <div className="relative aspect-video bg-gray-900">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-8 text-right">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {video.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
