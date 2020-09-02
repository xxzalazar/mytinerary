import React, {useState} from "react"

const Itinerary = (props) => {
  const money = (cant) => {
    var x = []
    for (let i = 0; i < cant; i++) {
      x.push(i)
    }
    return x
  }
  const [view, setView] = useState(false)
  return (
    <>
      <div
        className="itinerarios"
        style={{display: "flex", flexDirection: "row", alignItems: "center"}}
      >
        <div
          style={{
            backgroundImage: `url(${props.itinerary.profilePhoto})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "13%",
            height: "7vw",
            boxShadow: " 0vw 1.1vh 1.1vh rgb(0, 0, 0, 0.5)",
            border: "0.3vw solid black",
            borderRadius: "50%",
            marginLeft: "9%",
            marginTop: "3%",
            marginBottom: "5%",
          }}
        ></div>
        <div style={{width: "100%", marginLeft: "2%"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <p style={{fontFamily: "DatalegreyaDot", fontSize: "2.5vw"}}>
                  {props.itinerary.title}
                </p>
                <i class="small material-icons">access_alarm</i>
                {props.itinerary.duration} hs
              </div>
              <p>
                <i class="small material-icons">favorite</i>
                {props.itinerary.rating}
              </p>
              <div style={{display: "flex", flexDirection: "row"}}>
                {money(props.itinerary.price).map(() => (
                  <p>$</p>
                ))}
                <p>
                  {props.itinerary.hashtag.map((ht) => (
                    <p>{ht}</p>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="botones"
              style={{
                height: "3vw",
                alignSelf: "center",
                borderRadius: "25px",
                padding: "0.5vw",
                fontStyle: "oblique",
              }}
              onClick={() => {
                setView(!view)
              }}
            >
              {" "}
              {view ? "View less" : "View more"}
            </button>
            {view && (
              <div>
                <p>contenido oculto</p>
              </div>
            )}
          </div>
        </div>{" "}
      </div>
    </>
  )
}
export default Itinerary
