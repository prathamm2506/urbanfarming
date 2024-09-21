import React from 'react';
import './Marketplace.css';
import img1 from '../../assets/basil.webp';
import img2 from '../../assets/bean.webp';
import img3 from '../../assets/capsicum.webp';
import img4 from '../../assets/chill.webp';
import img5 from '../../assets/chrysanthemum.webp';
import img6 from '../../assets/coriander.webp';
import img7 from '../../assets/cucumber.webp';
import img8 from '../../assets/marigold.webp';
import img9 from '../../assets/spinach.webp';
import img10 from '../../assets/support.webp';
import img11 from '../../assets/tomato.webp';
import img12 from '../../assets/tray.webp';

const Marketplace = () => {
  return (
    <div id='marketplace'>
        <h1 className='mainh1'>Featured Products</h1>
      <main className="main-content">
        <div className="product-grid">
          <div className="product-card">
            <img class="img" src={img1} alt="Basil" />
            <h2>Basil Seeds</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          
          <div className="product-card">
            <img  class="img" src={img3} alt="Capsicum" />
            <h2>Capsicum Seeds</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img4} alt="Chilli" />
            <h2>Green Chilli</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img class="img" src={img5} alt="chrysanthemum" />
            <h2>Chrysanthemum</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img6} alt="Coriander" />
            <h2>Coriander</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img7} alt="Cucumber" />
            <h2>Cucumber</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img8} alt="Marigold" />
            <h2>Marigold Seeds</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img9} alt="Spinach" />
            <h2>Spinach Seeds</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img10} alt="Support" />
            <h2>Plant support</h2>
            <p>₹550</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img11} alt="Tomato" />
            <h2>Tomato Seeds</h2>
            <p>₹50</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
          <div className="product-card">
            <img  class="img" src={img12} alt="Trayr" />
            <h2>Seedling Tray</h2>
            <p>₹250</p>
            <button className="btn">
              <i className="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
