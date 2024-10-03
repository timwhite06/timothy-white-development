'use client';

import Image from 'next/image';

const PortfolioCard = ({ title, link }) => {
  return (
    <div
      className={`relative flex flex-col rounded-lg p-6 shadow-xl bg-cyan-400 border-2 border-[#000] break-words w-full h-auto`}>
      <div className="mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-2xl sm:text-3xl text-white mt-4 mb-3 break-words overflow-wrap flex-grow flex items-center">
              <div className="bg-cyan-600 rounded-md font-bold text-[#000000] p-2 mr-2">
                {title}
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center border border-black rounded-xl overflow-hidden">
        <Image
          src={'/images/service_and_tech_logos/wix.png'}
          alt={'website name'}
          width={70}
          height={70}
          style={{
            height: 'auto',
            width: '100%'
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
