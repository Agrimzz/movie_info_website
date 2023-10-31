import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Card from "../../components/Card"
import "./search.css"

const Search = (props) => {
  const { searchQuery } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=a212d2a534451bb967da7b23e8a592c1`
      )
      .then((response) => {
        setData(response.data.results)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [searchQuery])
  console.log(data)
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <h2 className="search-textt">
          Search Results for :{" "}
          <span className="search-query">{searchQuery}</span>
        </h2>
        <div className="search-results">
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                <Link to={`/movie/${item.id}`} key={index}>
                  <Card
                    title={item.title}
                    date={item.release_date}
                    image={item.poster_path}
                    rating={item.vote_average}
                  />
                </Link>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Search
