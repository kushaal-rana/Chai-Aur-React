import React from "react";

function Card(props) {
  const { titleArr, descriptionArr } = props;

  return (
    <>
      {titleArr.map((title, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 p-8 m-4"
        >
          <video
            className="w-full"
            controls
            autoPlay
            muted
            loop
            onError={(e) => console.log("Video error:", e)}
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white no-underline">
              {title}
            </div>
            <p className="text-gray-300 text-base no-underline">
              {descriptionArr[index]}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
