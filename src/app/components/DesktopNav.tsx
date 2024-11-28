import Link from 'next/link';
import styles from '../styles/style.module.css'
import Image from 'next/image';

function DesktopNavLinks() {
  return (
    <ul className=" absolute left-0 flex flex-row items-center space-x-6">
        <ul>
        <li className='mr-10'>
        <Image src="/images/logo.svg" alt='Logo' width={70} height={70}></Image>
        </li>
        </ul>
      <li className=" hover:underline hover:font-medium">
        <Link className={styles.font} href="/">home</Link>
      </li>
      <li className=" hover:underline hover:font-medium">
        <Link className={styles.font}  href="/">shop</Link>
      </li>
      <li className=" hover:underline hover:font-medium">
        <Link className={styles.font}  href="/">about</Link>
      </li>
      <li className='hover:underline hover:font-medium'>
      <Link className={styles.font}  href="/">contact</Link>
      </li>
    </ul>
  );
}
export default DesktopNavLinks;