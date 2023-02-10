import flayerImg from '../assets/img/flayer_polla.jpeg'
function HomeLayout() {
  return (
    <div className="w-full h-full sm:grid sm:place-content-center sm:p-4">
      <picture>
        <img className="w-96" src={flayerImg} alt="flayer polla" />
      </picture>
    </div>
  )
}

export default HomeLayout
