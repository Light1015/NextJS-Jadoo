'use client';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo + tagline */}
        <div className={styles.column}>
          <h2 className={styles.logo}>Jadoo.</h2>
          <p className={styles.tagline}>
            Book your trip in minute, get full <br />
            control for much longer.
          </p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Mobile</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Link href="#">Help/FAQ</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Affilates</Link></li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li><Link href="#">Airlinefees</Link></li>
              <li><Link href="#">Airline</Link></li>
              <li><Link href="#">Low fare tips</Link></li>
            </ul>
          </div>
        </div>

        {/* Social + Apps */}
        <div className={styles.social}>
          <div className={styles.icons}>
            <Link href="#"><Image src="/images/icons/fb.png" alt="Facebook" width={32} height={32} /></Link>
            <Link href="#"><Image src="/images/icons/ig.png" alt="Instagram" width={32} height={32} /></Link>
            <Link href="#"><Image src="/images/icons/tw.png" alt="Twitter" width={32} height={32} /></Link>
          </div>
          <p className={styles.downloadLabel}>Discover our app</p>
          <div className={styles.appButtons}>
            <div className={styles.storeBtn}>
              <div className={styles.iconWrapper}>
                <Image src="/images/icons/google-play.png" alt="Google Play" width={16} height={16} />
              </div>
              <div className={styles.text}>
                <span className={styles.top}>GET IT ON</span>
                <span className={styles.bottom}>Google Play</span>
              </div>
            </div>

            <div className={styles.storeBtn}>
              <div className={styles.iconWrapper}>
                <Image src="/images/icons/apple-store.png" alt="App Store" width={16} height={16} />
              </div>
              <div className={styles.text}>
                <span className={styles.top}>Download on the</span>
                <span className={styles.bottom}>App Store</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.copyright}>
        ©UTA Dev Team 2023. All Rights Reserved
      </div>
    </footer>
  );
}
