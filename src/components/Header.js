import React,{Fragment} from 'react';
import classes from './Header.module.css';
import logoImg from '../assets/logo.jpg';
import Options from './Options';

const Header = (props) => {
    // const []=useState(false);

    return (
      <Fragment>
        <header className={classes.header}>
        <div className={classes['logo-title']}>
        <div className={classes['logo-div']}>
            <img src={logoImg} alt='logo'/>
        </div>
        <div className={classes['box-in-header']}>
            <h1 className={classes['title-nam']}>AbhiRoop Herbals</h1>
        </div>
        </div>
        <div className={classes.dropdown}>
          {/* <div className={classes['dropdown-menu']}>
              Menu
          </div> */}
          <div className={classes.options}>
            <Options/>
          </div>
        </div>
        </header>
      </Fragment>
    );
  };
  
export default Header;
