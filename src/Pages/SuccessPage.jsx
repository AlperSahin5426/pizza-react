import { Link } from "react-router-dom";
import "./SuccessPage.css";
import SiteFooter from "../components/SiteFooter";

export default function SuccessPage({ orderResponse, order }) {
  if (!orderResponse) {
    return <div>Henüz bir sipariş bulunamadı.</div>;
  }

  const toppingsPrice = order.toppings.length * 5;
  const totalPrice = (85.5 + toppingsPrice) * order.quantity;

  return (
    <>
      <div className="success-page">
        <div className="success-content">
          <h1 className="success-logo">Teknolojik Yemekler</h1>

          <p className="success-top-text">lezzetin yolda</p>

          <h2 className="success-title">SİPARİŞ ALINDI</h2>

          <div className="success-line"></div>

          <h3 className="success-product-name">Position Absolute Acı Pizza</h3>

          <div className="success-details">
            <p><strong>İsim:</strong> {order.name}</p>
            <p><strong>Boyut:</strong> {order.size}</p>
            <p><strong>Hamur:</strong> {order.dough}</p>
            <p><strong>Ek Malzemeler:</strong> {order.toppings.join(", ")}</p>
            {order.note && <p><strong>Not:</strong> {order.note}</p>}
            <p><strong>Adet:</strong> {order.quantity}</p>
            <p><strong>Sipariş ID:</strong> {orderResponse.id}</p>
            <p><strong>Oluşturulma Tarihi:</strong> {orderResponse.createdAt}</p>
          </div>

          <div className="success-summary-card">
            <h3>Sipariş Toplamı</h3>

            <div className="success-summary-row">
              <span>Seçimler</span>
              <span>{toppingsPrice.toFixed(2)}₺</span>
            </div>

            <div className="success-summary-row">
              <span>Toplam</span>
              <span>{totalPrice.toFixed(2)}₺</span>
            </div>
          </div>

          <div className="success-actions">
            <Link to="/">Anasayfaya Dön</Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}