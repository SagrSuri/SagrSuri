// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaThumbsUp, FaThumbsDown, FaComment } from "react-icons/fa";
import ToggleDark from '../../OwnedComponents/ToggleDark'
import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";
import Back from '../Loaders/Rippling/RipplingBack'

// eslint-disable-next-line react/prop-types
const YouTubeVideos = ({ channelName }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;

      try {
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${channelName}&key=${API_KEY}`
        );
        const channelId = channelResponse.data.items[0].id.channelId;

        const playlistResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
        );
        const uploadsPlaylistId =
          playlistResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=5&key=${API_KEY}`
        );

        const videoDetailsPromises = videosResponse.data.items.map(async (item) => {
          const videoId = item.snippet.resourceId.videoId;
          const videoDetailResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
          );
          return videoDetailResponse.data.items[0];
        });

        const videos = await Promise.all(videoDetailsPromises);
        setVideos(videos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos data:", error);
        setLoading(false);
      }
    };

    fetchChannelVideos();
  }, [channelName]);

  if (loading) {
    return <div className=" w-1/3 flex justify-center items-center align-middle gap-1 mx-auto text-red-600 font-bold py-2 min-h-screen text-3xl">Loading...<GrYoutube /></div>;
  }

  if (videos.length === 0) {
    return <div className="text-center mt-10 text-lg">No videos found</div>;
  }

  return (
    <div className="max-w-4xl min-h-screen mx-auto p-4 bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg">
       <div className='flex justify-center items-center align-middle'>
      <Back/>
      </div>
      <div className="py-3">
      <Link><ToggleDark/></Link>
      </div>
      {videos.map((video) => {
        const { snippet, statistics } = video;
        const { title, description, thumbnails } = snippet;
        const { likeCount, dislikeCount, viewCount } = statistics;

        return (
          <div key={video.id} className="mb-10">
            {/* Video Container with Thumbnail */}
            <div className="relative w-full pb-[56.25%] mb-6">
              <img
                src={thumbnails.high.url}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                style={{ opacity: 0.6 }}
              />
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-gray-300 dark:border-gray-600 shadow-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6">
              {/* Video Info Section */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{title}</h2>
                <div className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {viewCount} views
                </div>
                <p className="text-gray-800 dark:text-gray-400 mb-4">{description}</p>

                {/* Like/Dislike Section */}
                <div className="flex space-x-6 items-center mb-4">
                  <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <FaThumbsUp className="text-lg" />
                    <span>{likeCount}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <FaThumbsDown className="text-lg" />
                    <span>{dislikeCount}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2 dark:text-white">
                <FaComment className="text-lg" />
                <span>Comments</span>
              </h3>
              {/* Display comments here */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YouTubeVideos;
