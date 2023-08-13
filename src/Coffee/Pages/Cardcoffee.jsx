import React from 'react'
import './Cardcoffee.css'

const Cardcoffee = () => {
  const handlesubmit=()=>
  {
    alert('Order placed successfully!!!!!')
  }
  return (
    <div className='container'>
      <section >
        <div className="paddings innerWidth r-container">
          <div >
            <h1 className='last'>Enjoy a new blend of coffee style</h1>
          </div>

          <div className="coffees-tittle"><p className="coffees-p">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p></div>
          
          <div class="row">
            <div class="col-sm-3">
              <div class="card">
              <img class="card-img-top" src="./Cappuccino.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-name">Cappuccino</h5>
                  <p class="card-des">Coffee 50% | Milk 50%</p>
                  <p class="card-price">$8.50</p>
                  <button class="btn btn-warning" onClick={handlesubmit}>Order Now</button>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
              <img class="card-img-top" src="./Chai Latte.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-name">Chai Latte</h5>
                  <p class="card-des">Coffee 50% | Milk 50%</p>
                  <p class="card-price">$8.50</p>
                  <button class="btn btn-warning" onClick={handlesubmit}>Order Now</button>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
              <img class="card-img-top" src="./Macchiato.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-name">Macchiato</h5>
                  <p class="card-des">Coffee 50% | Milk 50%</p>
                  <p class="card-price">$8.50</p>
                  <button class="btn btn-warning" onClick={handlesubmit}>Order Now</button>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
              <img class="card-img-top" src="./Expresso.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-name">Expresso</h5>
                  <p class="card-des">Coffee 50% | Milk 50%</p>
                  <p class="card-price">$8.50</p>
                  <button class="btn btn-warning" onClick={handlesubmit}>Order Now</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <br />
      <br />

    </div>

  )
}

export default Cardcoffee


