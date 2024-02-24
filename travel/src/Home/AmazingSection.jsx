import "./AmazingSection.css"

export default function AmazingSec()

{
    return(
        <div className="container-fluid">
            <div className="row">
            <div className="ama-head-con">
            <span className="hrline mt-4">|</span>
                <h1 className="Amazing-head"> <span className="amazing-head-span"> Amazing Tours </span> And 
                <br/>Fun <span className="amazing-head-span">  Adventures  Waiting</span> For You</h1>
            </div>
              <div className="d-flex flex-wrap">
              <div className="Places-home-bg maldives-img m-2  mt-5">
                  <h1 className="maldives-name">Maldives</h1>
                  <p className="maldives-price">$4999</p>
              </div>
              <div className="Places-home-bg m-2 bora-img  mt-5">
                  <h1 className="maldives-name">Bora Bora</h1>
                  <p className="maldives-price">$2999</p>
              </div>
              <div className="Places-home-bg m-2 pammukkle mt-5">
                  <h1 className="maldives-name">Pamukkale</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              <div className="Places-home-bg m-2 Keukenhof mt-5">
                  <h1 className="maldives-name">Pamukkale</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              <div className="Places-home-bg m-2 DeadSea mt-5">
                  <h1 className="maldives-name">Dead Sea</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              <div className="Places-home-bg m-2 NewYork mt-5">
                  <h1 className="maldives-name">NewYork</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              <div className="Places-home-bg m-2 switzerland mt-5">
                  <h1 className="maldives-name">Switzerland</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              <div className="Places-home-bg m-2 Tokyo mt-5">
                  <h1 className="maldives-name">Tokyo</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              <div className="Places-home-bg m-2 Madrid mt-5">
                  <h1 className="maldives-name">Madrid</h1>
                  <p className="maldives-price">$3999</p>
              </div>
              </div>
            </div>
        </div>
    )
}