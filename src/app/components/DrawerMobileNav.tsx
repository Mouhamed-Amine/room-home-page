import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/style.module.css'


interface MobileDrawerProps {
    isOpen: boolean;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
  }


const  MobileDrawer: React.FC<MobileDrawerProps>= ({ isOpen, onClose })=>{
    return (
      <div
        className={`fixed ${styles.drawerbackground} flex flex-row justify-center top-0 z-20 left-0 h-full w-full text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        <button className="absolute top-4 left-4" onClick={onClose}>
          <FontAwesomeIcon className="text-2xl text-black" icon={faXmark} />
        </button>
    
        <ul className="flex flex-row justify-end items-start mt-2 p-5 bg-white w-full h-24">
          
          <li className="text-lg text-black hover:underline hover:font-medium mr-4 ">
            <Link href="/" className={styles.family} >home</Link>
          </li>
          
        <li className="text-lg text-black hover:underline hover:font-medium  mr-4">
        <Link className={styles.family}  href="/">shop</Link>
        </li>
      <li className=" text-lg text-black hover:underline hover:font-medium   mr-4">
        <Link className={styles.family}  href="/">about</Link>
      </li>
      <li className=" text-lg text-black hover:underline hover:font-medium">
      <Link className={styles.family}  href="/">contact</Link>
      </li>
        </ul>
      </div>
    );
  }

export default MobileDrawer;
