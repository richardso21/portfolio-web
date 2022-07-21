import { asDate } from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';

const ExperienceItem = ({ data }: { data: any }): JSX.Element => {
  return (
    <li className="mb-10 ml-10 sm:ml-20">
      <span className="absolute w-12 sm:w-20 h-12 sm:h-16 -left-6 sm:-left-10">
        <Image
          src={data.orgLogo.url}
          height={data.orgLogo.dimensions.height}
          width={data.orgLogo.dimensions.width}
          layout="responsive"
          alt={data.orgLogo.alt}
        />
      </span>
      <time className="mb-1 font-light leading-none text-gray-400 italic">
        May 2022 - August 2022
      </time>
      <h3 className="text-3xl sm:text-4xl font-semibold text-white">
        {data.orgName}
      </h3>
      <h6 className="text-blue-300 text-2xl sm:text-3xl mb-3">{data.role}</h6>
      <div className="mb-4 text-xl font-normal text-gray-300 child:list-disc pl-5 leading-relaxed">
        <PrismicRichText field={data.details} />
      </div>
    </li>
  );
};

export default ExperienceItem;
