import "./banner.css"

const Banner = ({ image, title }) => {
  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }

  return (
    <div className="app__banner" style={bannerStyle}>
      <h2>{title}</h2>
    </div>
  )
}

export default Banner
