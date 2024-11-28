import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface MobileMenuButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
    
    return (
    
      <button className="absolute z-10 left-2 top-1 p-2 " onClick={onClick}>
        <FontAwesomeIcon className="text-xl " icon={faBars} />
      </button>
    );
  };
  
export default MobileMenuButton;