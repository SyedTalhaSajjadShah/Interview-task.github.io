import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './index.css';


const Navigation = () => {
      return (
            <>
            <div className="bg">
     <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><h1>LOGO</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex mx-auto ">

      
              
      <input className="form-control" type="search" placeholder="Search Anything" aria-label="Search"
      />
      <SearchIcon className="serchbar mt-2" /> 
      {/* <img src="search icone.png"/>
       */}
      </form>
    </div>

    <img src="notification.png" alt="image not found" className="avatars">

    </img>
    <img src="talha.png" alt="image not found" className="avatar">

    </img>
  </div>
</nav>
</div>
            </>
      );
};

export default Navigation ;