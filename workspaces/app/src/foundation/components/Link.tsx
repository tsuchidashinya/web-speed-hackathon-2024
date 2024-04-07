import { useNavigate } from 'react-router-dom';
type Props = {
  children: React.ReactNode;
  href?: string;
  to?: string;
} & JSX.IntrinsicElements['a'];

export const Link: React.FC<Props> = ({ children, href, to, ...rest }) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (to) {
      navigate(to);
    }
  };
  return (
    <a href={href} onClick={onClick} style={{ cursor: 'pointer' }} {...rest}>
      {children}
    </a>
  );
};
