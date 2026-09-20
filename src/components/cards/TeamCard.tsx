import type { TeamMember } from '@/types';

/** Reference `.team-card`: 360px rounded card, gradient caption, corner frame grows on hover. */
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} loading="lazy" width={1228} height={1650} />
      <div className="team-card-hover" aria-hidden="true">
        <div className="team-card-corner corner-tl" />
        <div className="team-card-corner corner-tr" />
        <div className="team-card-corner corner-bl" />
        <div className="team-card-corner corner-br" />
      </div>
      <div className="team-card-bottom">
        <div className="text-[16px] font-extrabold text-white uppercase tracking-[0.3px] mb-1">{member.name}</div>
        <div className="text-[11px] font-semibold text-white uppercase tracking-[1.5px]">{member.role}</div>
      </div>
    </div>
  );
}
