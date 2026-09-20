import type { FeatureItem } from '@/types';

/** Home "Manufacturer" feature column: 100px icon, 24px brand heading, paragraph. */
export function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 text-center px-4">
      <img src={item.icon} alt={item.title} height={100} width={100} className="inline-block h-[100px] w-auto" />
      <h3 className="pt-4 text-[24px] font-bold text-center text-brand">{item.title}</h3>
      {item.extraBreak && <br />}
      <p dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
}
