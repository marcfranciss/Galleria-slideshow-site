interface IArtDetails {
  className?: string;
  title: string;
  artist: string;
}
export const ArtDetails = ({ className, title, artist }: IArtDetails) => {
  return (
    <dl className={className}>
      <dt>{title}</dt>
      <dd>{artist}</dd>
    </dl>
  );
};
