interface SectionHeadingProps {
  kicker: string;
  title: string;
  lead?: string;
}

export function SectionHeading({ kicker, title, lead }: SectionHeadingProps) {
  return (
    <div>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
