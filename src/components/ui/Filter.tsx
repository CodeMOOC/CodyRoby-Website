export interface Props {
  name: string;
  color: string;
}

const Filter = (props: Props) => {
  return (
    <div
      className="border border-black not-prose rounded-full px-2 py-1"
      style={{ border: `1px solid ${props.color}` }}
    >
      <p className="text-slate-700 text-xs">{props.name}</p>
    </div>
  );
};

export default Filter;
