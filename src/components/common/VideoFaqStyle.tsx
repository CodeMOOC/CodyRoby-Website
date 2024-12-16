import { useState } from 'react';
import { Icon } from '@iconify/react';

const VideoFaqStyle = ({ id, title, videoUrl, description, questions, diretta }) => {
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={handleOpen} className="p-2 border border-black rounded-full text-black w-full text-left px-6">
        <span className="flex items-center justify-between">
          {title}
          <Icon
            icon="tabler:chevron-down"
            className={`w-6 h-6 ml-0.5 ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
          />
        </span>
      </button>
      <div
        id={id}
        className={`px-6 mb-6 border-b border-r border-l rounded-lg transition-all duration-500 ease-in-out ${isOpen ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        {isOpen && (
          <div id={id} className="mb-8">
            <h3 className="text-2xl font-semibold not-prose pt-4">{title}</h3>

            {description && <div className="description" dangerouslySetInnerHTML={{ __html: description }} />}

            {videoUrl && (
              <div className=" mt-6">
                <div className="video-container">
                  <iframe src={videoUrl} width="560" height="314" loading="lazy" />
                </div>
              </div>
            )}
            <ul className="not-prose lg:prose-page mt-6">
              {questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoFaqStyle;
