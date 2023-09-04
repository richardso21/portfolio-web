import { asDate } from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';

const getDateString = (date: `${number}-${number}-${number}`) => {
  return asDate(date).toLocaleDateString('default', {
    month: 'long',
    year: 'numeric',
  });
};

const ExperienceItem = ({ data }: { data: any }): JSX.Element => {
  return (
    <li className="mb-20 ml-10 sm:ml-20">
      <span className="absolute w-12 sm:w-20 h-12 sm:h-16 -left-6 sm:-left-10 scale-125">
        <Image
          src={data.orgLogo.url}
          height={data.orgLogo.dimensions.height}
          width={data.orgLogo.dimensions.width}
          layout="responsive"
          alt={data.orgLogo.alt}
        />
      </span>
      <time className="mb-1 text-lg sm:text-xl font-light leading-none text-gray-400 italic">
        {getDateString(data.start)} - {getDateString(data.end)}
      </time>
      <h3 className="mb-2 text-3xl sm:text-5xl font-semibold text-white">
        {data.orgName}
      </h3>
      <h6 className="text-blue-300 text-2xl sm:text-4xl mb-3">{data.role}</h6>
      <div className="mb-4 text-xl sm:text-2xl font-normal text-gray-300 child:list-disc leading-relaxed [&_li]:py-2">
        <PrismicRichText field={data.details} />
      </div>
    </li>
  );
};

export default ExperienceItem;
