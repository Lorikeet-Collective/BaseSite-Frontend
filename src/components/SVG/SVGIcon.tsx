interface SVGIconProps {
  icon: React.ReactElement<React.SVGProps<SVGElement>>;
  interaction: () => void | null;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  interaction,
}): React.ReactElement => {
  return <div onClick={interaction}>{icon}</div>;
};

export default SVGIcon;
