import React from 'react';
import { Billboard as BillboardTypes } from '@/types';
interface BillboardProps {
  data: BillboardTypes;
}
const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 relative rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
      >
        <div className="bg-black/30 absolute top-0 h-full z-0 w-full" />
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl z-20 text-center text-white lg:text-6xl sm:max-w-xl max-w-xs">
                {data.label}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
