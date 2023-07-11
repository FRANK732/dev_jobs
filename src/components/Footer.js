// Footer to display at the bottom 
export const Footer = ({position,company}) => {
  return (
<div className="footer_container" >
  <div className="footer_rectangle">
      <div className="footer_role">
           {position}
      </div>
      <div className="footer_company">
            {company}
      </div>
      <button className="footer_button">
        <p className="footer_button_text">Apply Now
        </p>
      </button>
  </div>
</div>


    
  )
}

export default Footer;