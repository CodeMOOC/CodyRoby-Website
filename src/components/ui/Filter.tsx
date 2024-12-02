export interface Props {
  name: string;
  color: string;
}

const Filter = (props: Props) => {
  console.log('props ', props.color);
  return (
    <div
      className="border border-black not-prose rounded-full px-2 py-1"
      style={{ border: `1px solid ${props.color}` }}
    >
      <p style={{ color: `${props.color}` }}>{props.name}</p>
    </div>
  );
};

export default Filter;
