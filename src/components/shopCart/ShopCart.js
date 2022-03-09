import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import CoursesInCart from './CoursesInCart';
//style
import styles from "./ShopCart.module.css"
//context
import { CartContext } from '../../context/CartContextProvider';
const ShopCart = () => {
    const cart = useContext(CartContext)
    console.log(cart.state.selectedItem)
    const itemLength = cart.state.selectedItem.length
    const result = cart.state.selectedItem.reduce(function(accumulator, currentValue) {
        console.log(accumulator)
        console.log(currentValue.value)
        return accumulator + currentValue.value;
    }, 0)
    console.log(result)
      return (
        <div>
            {itemLength === 0 ? <div className={styles.emptyContainer}>
                <div>
                    <i class="fal fa-box-open"></i>
                    <p>سبد خرید شما در حال حاضر خالی است</p>
                    <Link to="/courses"><h4>بازگشت به فروشگاه</h4></Link>
                </div>
            </div> : <div className={styles.container}>
                <div className={styles.checkout}>
                    <h3>جمع کل سبد خرید</h3>
                    <div>
                        <p>جمع جزء</p>
                        <p className={styles.price}>{result.toLocaleString()}</p>
                    </div>
                    <div>
                        <p>مجموع</p>
                        <p className={styles.price}>{result.toLocaleString()}</p>
                    </div>
                    <button>ادامه جهت تسویه حساب</button>
                </div>
                <div className={styles.cart}>
                    <div className={styles.titles}>
                            <p>محصول</p>
                            <p className={styles.priceCart}>قیمت</p>
                    </div>
                    {cart.state.selectedItem.map(item => <CoursesInCart img={item.image} title={item.name} course={item} price={item.value}/>)}
                    <div className={styles.discount}>
                        <p className={styles.comeBack}>برگشت به فروشگاه</p>
                        <div>
                            <input type="text" placeholder="کد تخفیف"/>
                            <p>اجرای کوپن</p>
                        </div>
                    </div>
                </div>
            </div>}
            
        </div>
    );
};

export default ShopCart;