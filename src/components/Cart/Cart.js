import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul  className={classes.items}>
        {/* {cartItems.map(item=>
          (<CartItem
          key={item.id}
          item={{ id:item.id, title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price }}
          />)  
        )} */}
        {/* vardhan */}
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
        <CartItem 
            key={1}
            item={{id: 1, title: "vardhan" , quantity : 3, total: 23,price: 24}}
        />
      </ul>
    </div>
  );
};

export default Cart;
