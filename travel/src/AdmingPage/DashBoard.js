import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './index.css'

const DashBoard = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}$`
    }
    return number.toString()
  }
  const {vaccinationCoverageDetails} = props

  const[bookdata,setData]=useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3001/dashboard");
        setData(res.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="vaccination-by-coverage-container">
      
      <BarChart className='bar-chart'
        width={600}
        height={400}
        data={bookdata}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="time"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
         paddingTop={20}
          dataKey="price"
          name="Price"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
        {/* <Bar
          dataKey=""
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
          barSize="20%"
        /> */}
      </BarChart>
    </div>
  )
}

export default DashBoard