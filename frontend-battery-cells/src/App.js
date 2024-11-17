import axios from 'axios';
import './App.css';
import BatteryTable from './components/BatteryTable';
import BatteryTableInMongoDB from './components/BatteryTableInMongoDB';
import { useEffect, useState } from 'react';
// import OneBatteryUpdate from './components/OneBatteryUpdate';
import LineChart from './components/LineChart';


import Sort from './components/Sort';



function App() {
  const [battery, setBattery] = useState({})
  const [batteryInMongo, setBatteryInMongo] = useState({})

  useEffect(() => {

    const batteryExam = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/battery/6655bc9a6c27f3cd66fcffe0")
        //console.log(response.data.data)
        const bat = response.data.data
        // console.log(response)
        setBattery(bat)

      }
      catch (err) {
        console.log(err)
      }

    }

    batteryExam()

  }, [])


  useEffect(() => {

    const batteryExamInMongo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/batteryInMongoDB/6655be206c27f3cd66fd001b")
        //console.log(response.data.data)
        const bat = response.data.data
        // console.log(response)
        setBatteryInMongo(bat)

      }
      catch (err) {
        console.log(err)
      }

    }

    batteryExamInMongo()

  }, [])




  //   useEffect(() => {
  //     // This useEffect will run whenever the `battery` state changes
  //     console.log(battery);
  // }, [battery]);

  return (
    <div >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <div>
        <h1>Battery in MongoDB</h1>
          <BatteryTableInMongoDB battery={batteryInMongo}/>
        </div>
        <div>
          <h1>Battery in SQL</h1>
          <BatteryTable battery={battery} />
        </div>
      </div>
      <div style={{marginLeft:"450px",marginRight:"450px",marginTop:"200px",marginBottom:"200px",}}>
        <LineChart/>






      </div>

      <Sort/>

    </div>
  );
}

export default App;
