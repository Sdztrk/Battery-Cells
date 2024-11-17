import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import ToolTip from "./ToolTip";
import {CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, plugins} from 'chart.js/auto';
import axios from "axios";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

function LineChart() {

  const [tooltipModel, setTooltipModel] = useState({});
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({});
  const [batteryInSQL, setBatteryInSQL] = useState({})
  const [batteryInMongo, setBatteryInMongo] = useState({})

  useEffect(() => {

    const batteryExamInSQL = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/battery/6655bc9a6c27f3cd66fcffe0")
        //console.log(response.data.data)
        const bat = response.data.data
        // console.log(response)
        setBatteryInSQL(bat)
      }
      catch (err) {
        console.log(err)
      }
    }

    batteryExamInSQL()

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

  // console.log(battery)
  // console.log(batteryInMongo)

  const energyDates = batteryInSQL.energy && batteryInSQL.energy.map(record => {
    const [datePart] = record.date.split(' '); // Split the date-time string on space and take the date part
    const [year, month, day] = datePart.split('-'); // Split the date part on hyphen
    return `${month}.${day}`;
  });

  // Output the array of month/day
  //  console.log(Array.isArray(energyDates) );
  //  console.log(energyDates)

  //  const last30Days =energyDates && energyDates.reverse()
  //  console.log(last30Days)


  //converting the correct format the data from SQL
  const energyDataInSQL = batteryInSQL.energy && batteryInSQL.energy.map( (every) => every.totalEnergy )

  //converting the correct format the data from MongoDB

  const energyDataInMongoDG = batteryInMongo.energy && batteryInMongo.energy.map((every) => {
    return every.totalEnergy
  })
  // console.log(energyDataInMongoDG)



  function extendDates(dates, endDateStr) {
    // Helper function to parse date strings in the format "dd.mm"
    function parseDate(dateStr, year) {
        const [day, month] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day); // Month is zero-based
    }

    // Helper function to format dates back to "dd.mm"
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        return `${day}.${month}`;
    }

    // Parse the end date
    const [endDay, endMonth, endYear] = endDateStr.split('.').map(Number);
    const endDate = new Date(endYear, endMonth - 1, endDay); // Month is zero-based

    // Extend the dates until the end date
    let lastDate = parseDate(dates[dates.length - 1], new Date().getFullYear());
    while (lastDate <= endDate) {
        lastDate.setDate(lastDate.getDate() + 1);
        dates.push(formatDate(lastDate));
    }

    return dates;
}

function filterTheDateFunction(dates, startDateStr, endDateStr) {
    // Helper function to parse date strings in the format "dd.mm"
    function parseDate(dateStr, year) {
        const [day, month] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day); // Month is zero-based
    }

    // Parse the start and end dates assuming the current year
    const currentYear = new Date().getFullYear();
    const startDate = parseDate(startDateStr, currentYear);
    const endDate = parseDate(endDateStr, currentYear);

    // Filter the dates between start and end dates
    const filteredDates = dates.filter(dateStr => {
        const date = parseDate(dateStr, currentYear);
        return date >= startDate && date <= endDate;
    });

    return filteredDates;
}

// Example usage
let dates = ["23.05", "24.05", "25.05", "26.05", "27.05", "28.05", "29.05", "30.05", "31.05", "01.06", "02.06", "03.06", "04.06", "05.06", "06.06", "07.06", "08.06", "09.06", "10.06", "11.06", "12.06", "13.06", "14.06", "15.06"];
dates = extendDates(dates, "01.04.2025");
//  console.log(dates)
//  const reversedDates = dates && dates.reverse()
//  console.log(reversedDates)

const lastOneMonth = dates && dates.slice(-30)
const lastThreeMonths = dates && dates.slice(-90)
const lastSixMonths = dates && dates.slice(-180)





  const data = {
    // labels:filteredDates,
    labels: energyDates,
    //I converted the energydata to correct format
    //labels: ["23.05", "24.05", "25.05", "26.05", "27.05", "28.05", "29.05", "30.05", "31.05", "01.06", "02.06", "03.06", "04.06", "05.06", "06.06", "07.06", "08.06", "09.06", "10.06", "11.06", "12.06", "13.06", "14.06", "15.06", "16.06"],
    datasets: [
      {
        color: "#fff",
        label: "Energy Data In SQL",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#7A77FF",
        borderColor: "#2a2c30",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "#7A77FF",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#7A77FF",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointRadius: 5,
        pointHitRadius: 5,
        data: energyDataInSQL,
        //the data format has been converted to array of numbers
        //data: [0, 14, 21, 9, 35, 31, 36]
        lineTension:0.3,
      },
      {
        color: "#000",
        label: "Energy Data in MongoDB",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#f84c1e",
        borderColor: "#4CAF50",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "#f84c1e",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#f84c1e",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointRadius: 5,
        pointHitRadius: 5,
        data: energyDataInMongoDG,
        //data: [20, 39, 10, 11, 16, 2, 40]
        lineTension:0.3,

      },
    ]
  };

  const options = {
    // plugins:{
    //   Legend:true
    // },
    scales: {
      y:{
         min:0,
        // max:20,
      },
      
    },
  };

  return (
    <div>
      <h2>Multi Line Chart</h2>
      <Line options={options} data={data} />
    
    </div>
  );
}

export default LineChart;