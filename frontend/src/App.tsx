import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import DataCountries from './models/dataCountries'
import Card from './components/Card'
import InputArea from './components/InputArea'

function App() {
  const [data, setData] = useState<Partial<DataCountries[]>>([])

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/dataCountries').then((res) => setData(res.data.data))

    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="bg-light-background dark:bg-dark-background">
      <Navbar />
      <InputArea />
      <div className='grid lg:grid-cols-4 container mx-auto lg:gap-16 mt-12 place-content-center lg:px-16'>

        {data.map((item: any, index) => {
          return <Card {...item} key={index} />
        })}


      </div>

    </div>
  )
}

export default App
