import "./skills.scss";

export default function Testimonials() {
  return (
    <div className='skills' id="skills">
      <h1>Skills & Education</h1>

      <div className="container">
        
        <div className="left">

          <div className="inside-left">

            <div className="skillBox">
              <img src="skills/javascript.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/bootstrap.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/html.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/css.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/php.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/react.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/sass.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/node.png" alt="" />
            </div>
            <div className="skillBox">
              <img src="skills/express.png" alt="" />
            </div>
            
            
           
          </div>

        </div>
        

        <div className="right">
          <div className="container">

            <div className="edu">
              <h3>Bachelor of Computer Application</h3>
              <p><span>Indira Gandhi National Open University - 68%</span></p>
              <p><span>2018-2021</span></p>
            </div>
            <div className="edu">
              <h3>AISSCE, CBSE, Class XII</h3>
              <p><span>Bharat Mata Saraswati Bal Mandir - 76%</span></p>
              <p><span>2016-2018</span></p>
            </div>
            <div className="edu">
              <h3>AISSCE, CBSE, Class X</h3>
              <p><span>Bharat Mata Saraswati Bal Mandir - 9.6cgpa</span></p>
              <p><span>2014-2016</span></p>
            </div>

          </div>
        
        </div>

      </div>
    </div>
  )
}
