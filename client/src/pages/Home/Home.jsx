import { Helmet } from "react-helmet-async"
import Categories from "../../components/CategorIes/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </div>
  )
}

export default Home
