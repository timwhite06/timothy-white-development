'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PricingCardFrom = ({ _package, popular }) => {
  const [showMore, setShowMore] = useState(false);

  // Split the title into the first word and the rest
  const [firstWord, ...restWords] = _package.title.match(
    new RegExp(`^${_package.highlightThis}\\b`)
  )
    ? [
        _package.highlightThis,
        ..._package.title
          .split(' ')
          .slice(_package.highlightThis.split(' ').length)
      ]
    : _package.title.split(' ');

  const restTitle = restWords.join(' ');

  // Determine the features to display
  const visibleFeatures = showMore
    ? _package.features
    : _package.features.slice(0, 5);

  return (
    <div
      className={`relative flex flex-col rounded-lg p-6 shadow-xl ${popular ? 'border-2 border-[#f4fb32]' : 'border-2 border-teal-700'} bg-[#1a4e4f]  break-words w-full h-auto`}>
      {popular && (
        <div className="absolute bg-[#f4fb32] top-0 rounded-2xl left-1/2 p-1 px-4 -translate-x-1/2 -translate-y-1/2 font-bold text-black text-sm">
          Popular
        </div>
      )}

      <div className="mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <h2 className="font-bold text-2xl sm:text-3xl text-white mt-4 mb-3 break-words overflow-wrap flex-grow flex items-center">
              <div className="bg-teal-300 rounded-md font-bold text-[#000000] p-2 mr-2">
                {firstWord}
              </div>
              {restTitle}
            </h2>
          </div>
        </div>
        <div className="flex gap-3 text-xl items-center mb-2">
          <p>Prices from: </p>
          <p className="text-2xl mb-1 text-white font-bold">
            £{_package.priceFrom}+
          </p>
        </div>
        <ul className="mb-6 ml-4 list-disc text-white">
          {visibleFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {_package.features.length > 5 && !showMore && (
            <li
              onClick={() => setShowMore(true)}
              className="text-white cursor-pointer inline font-bold text-lg">
              Show more...
            </li>
          )}
        </ul>
      </div>
      <div className="relative mt-[auto] flex items-center justify-center">
        <div className="relative flex justify-center items-center">
          {_package?.logos?.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={70}
              height={70}
              className={`${logo.invert ? 'invert-colors' : ''}`}
              style={{
                height: 'auto',
                width: '45px',
                marginLeft: index === 0 ? '0' : '10px' // Add margin between logos
              }}
            />
          ))}
        </div>
        <Link href={'/pages/enquire'} className="ml-auto">
          <button className="bg-teal-400 hover:bg-teal-500 text-black font-bold px-6 py-2 rounded">
            Enquire
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCardFrom;
