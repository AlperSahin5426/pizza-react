import axios from "axios";
import { useHistory } from "react-router-dom";
import "./OrderPage.css";
import { useState } from "react";
import homeBanner from "../../images/iteration-2-images/pictures/form-banner.png";
import SiteFooter from "../components/SiteFooter";
export default function OrderPage({ order, setOrder, setOrderResponse }) {
  const toppings = ["zeytin", "mısır", "mantar", "sucuk", "peynir","pastirma","ananas","mozerella","html","css","js","react"];
  const history = useHistory();
  const [error , setError] = useState("");
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      if (checked) {
        setOrder({
          ...order,
          [name]: [...order[name], value],
        });
      } else {
        setOrder({
          ...order,
          [name]: order[name].filter((item) => item !== value),
        });
      }
    } else {
      setOrder({
        ...order,
        [name]: value,
      });
    }
  }

  function handleIncrease() {
    setOrder({
      ...order,
      quantity: order.quantity + 1,
    });
  }

  function handleDecrease() {
    if (order.quantity > 1) {
      setOrder({
        ...order,
        quantity: order.quantity - 1,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (!isValid) {
      return;
    }

    axios
      .post("https://reqres.in/api/pizza", order, {
        headers: {
          "x-api-key": "reqres_3703e8a4fd064bc685c71e891ff33d0b",
        },
      })
      .then((response) => {
        setOrderResponse(response.data);
        history.push("/success");
      })
      .catch((err) => { 
        setError("Sipariş gönderilirken bir hata oluştu.");
      });
  }

  const toppingsPrice = order.toppings.length * 5;
  const totalPrice = (85.5 + toppingsPrice) * order.quantity;

  const isValid =
    order.name.length >= 3 &&
    order.size !== "" &&
    order.dough !== "" &&
    order.toppings.length >= 4 &&
    order.toppings.length <= 10;

  return (
    <>
    <div className="order-page">
      <div className="order-header">
        <h1>Teknolojik Yemekler</h1>
      </div>
      <div className="pizza-hero">
        <img src={homeBanner} alt="pizza" />
      </div>
      <div className="order-container"> 
        <div className="product-info">
          <div className="breadcrumb">
            <span>Anasayfa</span>
            <span> - </span>
            <span>Sipariş Oluştur</span>
          </div>

          <h2 className="product-title">Position Absolute Acı Pizza</h2>

          <div className="product-meta">
            <span className="product-price">85.50₺</span>
            <span className="product-rating">4.9 (200)</span>
          </div>

          <p className="product-description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
            Pizza, domates, peynir ve çeşitli malzemelerle hazırlanan klasik İtalyan kökenli
            lezzetli bir yemektir.
          </p>
        </div>
        <form onSubmit={handleSubmit}>


<div className="name-group">
  <label htmlFor="name">İsim</label>
  <input
    type="text"
    id="name"
    name="name"
    value={order.name}
    onChange={handleChange}
    placeholder="isminizi giriniz"
  />

  {order.name.length > 0 && order.name.length < 3 && (
    <p>İsim en az 3 karakter olmalı</p>
  )}
</div>

<div className="selection-row">
  <div className="size-section">
    <h2>Boyut Seç</h2>
    <div className="size-options">
      <label>
        <input
          type="radio"
          name="size"
          value="küçük"
          checked={order.size === "küçük"}
          onChange={handleChange}
        />
        Küçük
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="orta"
          checked={order.size === "orta"}
          onChange={handleChange}
        />
        Orta
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="büyük"
          checked={order.size === "büyük"}
          onChange={handleChange}
        />
        Büyük
      </label>
    </div>
  </div>

  <div className="dough-section">
    <h2>Hamur Seç</h2>
    <label htmlFor="dough">Hamur Türü</label>
    <select
      name="dough"
      id="dough"
      value={order.dough}
      onChange={handleChange}
    >
      <option value="">Hamur Seçiniz</option>
      <option value="ince">İnce Hamur</option>
      <option value="orta">Orta Hamur</option>
      <option value="kalın">Kalın Hamur</option>
    </select>
  </div>
</div>

<div className="toppings-section">
  <h2>Ek Malzemeler</h2>
  <div className="toppings-grid"> 
    {toppings.map((topping) => (
      <label key={topping}>
        <input
          type="checkbox"
          name="toppings"
          value={topping}
          checked={order.toppings.includes(topping)}
          onChange={handleChange}
        />
        {topping}
      </label>
    ))}
  </div>

  {order.toppings.length > 0 && order.toppings.length < 4 && (
    <p>En az 4 malzeme seçmelisiniz</p>
  )}

  {order.toppings.length > 10 && (
    <p>En fazla 10 malzeme seçebilirsiniz</p>
  )}
</div>

<div className="note-section">
  <h2>Sipariş Notu</h2>
  <label htmlFor="note">Sipariş Notu</label>
  <textarea
    id="note"
    value={order.note}
    name="note"
    onChange={handleChange}
    placeholder="eklemek isediginiz not var mi?????"
  ></textarea>
</div>

<div className="bottom-section">
  <div className="quantity-control">
    <button type="button" onClick={handleDecrease}>
      -
    </button>
    <span>{order.quantity}</span>
    <button type="button" onClick={handleIncrease}>
      +
    </button>
  </div>

  <div className="summary-card">
    <h3>Sipariş Toplamı</h3>

    <div className="summary-row">
      <span>Seçimler</span>
      <span>{toppingsPrice.toFixed(2)}₺</span>
    </div>

    <div className="summary-row">
      <span>Toplam</span>
      <span>{totalPrice.toFixed(2)}₺</span>
    </div>
    {error && <p className="error-message">{error}</p>}
    <button type="submit" disabled={!isValid}>
      Sipariş Ver
    </button>
  </div>
</div>
</form>
</div>
   
    </div>
    <SiteFooter />

    </>
  );
  
}