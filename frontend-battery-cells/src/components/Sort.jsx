import React from 'react'

const Sort = () => {





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

    const last30Dates = dates && dates.slice(-31)
    // console.log(last30Dates)


    
  return (
    <div>Sort</div>
  )
}

export default Sort