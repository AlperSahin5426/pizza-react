import "./SiteFooter.css";

import insta0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-5.png";

import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            Teknolojik
            <br />
            Yemekler
          </h2>

          <div className="footer-contact">
            <div className="footer-item">
              <img src={icon1} alt="Adres ikonu" />
              <span>
                341 Londonderry Road,
                <br />
                İstanbul Türkiye
              </span>
            </div>

            <div className="footer-item">
              <img src={icon2} alt="Mail ikonu" />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>

            <div className="footer-item">
              <img src={icon3} alt="Telefon ikonu" />
              <span>+90 216 123 45 67</span>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-instagram">
          <h3>Instagram</h3>

          <div className="footer-gallery">
            <img src={insta0} alt="Instagram paylaşımı 1" />
            <img src={insta1} alt="Instagram paylaşımı 2" />
            <img src={insta2} alt="Instagram paylaşımı 3" />
            <img src={insta3} alt="Instagram paylaşımı 4" />
            <img src={insta4} alt="Instagram paylaşımı 5" />
            <img src={insta5} alt="Instagram paylaşımı 6" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
        <span>𝕏</span>
      </div>
    </footer>
  );
}