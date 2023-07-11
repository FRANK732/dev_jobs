
const Header = ({color,logo,company,website}) => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (


    <div className="container">
        <div className="row">
        <div className="col-8 middle">
            <p className="middle-text">{company}</p>
            <p className="middle-low-text">{website}</p>
        </div>
        
  
        </div>
        <div className="scoot-box col-2" >
            <div className="scoot-name-orange" style={{backgroundColor:color}}>
                <img className="header_svg" alt="logo" src ={logo}/>
            </div>
        </div>
        <button className="btn-primary" onClick={website}>
        Company Site
      </button>
        {/* <button className="btn-primary" onClick={website}><p className="button_text">Company Site</p></button> */}
        
        
    </div>
  )
}

export default Header;