import React from "react";
import classes from './Content.module.css'
import { FaInstagramSquare ,FaWhatsappSquare, MdOutlineEmail} from 'react-icons/fa';


// className={classes.}

const Content = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.innercontainer}>
                <div className={classes.upper}>
                    <h3>Abhiroop Herbals - Natural Products You Need For Your Natural Skin</h3>
                    <h4>Let's Take Care Of Your Skin Together</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                </div>
               <hr></hr>
                <div className={classes.lower}>
                    <h4 className={classes.contact}>Contact Us</h4>
                    <div className={classes.stickers}>
                        <a href="https://www.instagram.com/abhiroopherbals/" target="_blank"><FaInstagramSquare /></a>
                        <a href="https://wa.me/918010510288" target="_blank"><FaWhatsappSquare /></a>
                        {/* <p></p>
                        <p></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;