import { Link } from "react-router-dom";
import "./HomePage.css";
import SiteFooter from "../components/SiteFooter";

import homeBanner from "../../images/iteration-1-images/home-banner.png";

import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";

import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";

import card1 from "../../images/iteration-2-images/cta/kart-1.png";
import card2 from "../../images/iteration-2-images/cta/kart-2.png";
import card3 from "../../images/iteration-2-images/cta/kart-3.png";

export default function HomePage() {
  const categories = [
    { id: 1, icon: icon1, label: "YENİ! Kore", alt: "kore yemekleri" },
    { id: 2, icon: icon2, label: "Pizza", alt: "pizza" },
    { id: 3, icon: icon3, label: "Burger", alt: "burger" },
    { id: 4, icon: icon4, label: "Kızartmalar", alt: "kızartmalar" },
    { id: 5, icon: icon5, label: "Fast food", alt: "fast food" },
    { id: 6, icon: icon6, label: "Gazlı İçecek", alt: "içecek" },
  ];

  const tabs = [
    "Ramen",
    "Pizza",
    "Burger",
    "French fries",
    "Fast food",
    "Soft drinks",
  ];

  const products = [
    {
      id: 1,
      image: food1,
      title: "Terminal Pizza",
      rating: "4.9",
      reviews: "(200)",
      price: "60₺",
    },
    {
      id: 2,
      image: food2,
      title: "Position Absolute Acı Pizza",
      rating: "4.9",
      reviews: "(200)",
      price: "60₺",
    },
    {
      id: 3,
      image: food3,
      title: "useEffect Tavuklu Burger",
      rating: "4.9",
      reviews: "(200)",
      price: "60₺",
    },
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="brand">
          <h2>Workintech Pizzaları</h2>
        </div>

        <div className="hero">
          <div className="hero-content">
            <p className="hero-top-text">fırsatı kaçırma</p>
            <h1>Sıcacık Pizzanı Hemen Oluştur</h1>
            <p>Lezzetli pizzanı hemen sipariş ver.</p>

            <Link to="/order" className="cta">
              Sipariş Ver
            </Link>
          </div>

          <div className="hero-image">
            <img src={homeBanner} alt="pizza" />
          </div>
        </div>
      </div>

      <div className="home-content">
        <section className="category-bar">
          <div className="category-list">
            {categories.map((category) => (
              <div className="category-item" key={category.id}>
                <img src={category.icon} alt={category.alt} />
                <p>{category.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="promo-section">
        <div
  className="promo-left"
  style={{ backgroundImage: `url(${card1})` }}
>
  <div className="promo-content">
    <h3>Özel Lezzetus</h3>
    <p>Position:Absolute Acı Burger</p>
    <Link to="/order" className="promo-button">
  SİPARİŞ VER
</Link>
  </div>
</div>

          <div className="promo-right">
          <div
  className="promo-card promo-dark"
  style={{ backgroundImage: `url(${card2})` }}
>
  <div className="promo-card-content">
    <h3>Hackathlon Burger Menü</h3>
    <Link to="/order" className="promo-button">
  SİPARİŞ VER
</Link>
  </div>
</div>

<div
  className="promo-card promo-light"
  style={{ backgroundImage: `url(${card3})` }}
>
  <div className="promo-card-content">
    <h3>Çoooook hızlı npm gibi kurye</h3>
    <Link to="/order" className="promo-button">
  SİPARİŞ VER
</Link> 
 </div>
</div>
          </div>
        </section>

        <section className="menu-heading">
          <p className="menu-subtitle">en çok paketlenen menüler</p>
          <h2 className="menu-title">Acıktıran Kodlara Doyuran Lezzetler</h2>
        </section>

        <section className="menu-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`menu-tab ${tab === "Pizza" ? "active" : ""}`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </section>

        <section className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>

              <div className="product-meta-row">
                <div className="product-rating">
                  <span>{product.rating}</span>
                  <span>{product.reviews}</span>
                </div>
                <strong>{product.price}</strong>
              </div>
            </div>
          ))}
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}