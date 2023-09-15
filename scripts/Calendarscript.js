const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let selectedDate = null;


let currenDate = new Date();
let YearCounter = currenDate.getMonth() + 1;
let yearcompare = new Date().getFullYear();

const updateCalendar = () =>{
  const currenYear = currenDate.getFullYear();
  const currenMonth = currenDate.getMonth();
  
  const firstDay = new Date(currenYear,currenMonth,0);
  const lastDay = new Date(currenYear,currenMonth + 1, 0);
  const currenDay = new Date();
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const invalidDayIndex =  currenDay.getDate() + 3;
  const lastDayIndex = lastDay.getDay();

  const monthYearString = currenDate.toLocaleString
  ('default',{month: 'long', year:'numeric'});
  monthYearElement.textContent = monthYearString;

  let datesHTML = '';

  if(new Date().getMonth() == currenMonth && new Date().getFullYear() == yearcompare){
  for(let i = firstDayIndex; i > 0; i--){
    const prevDate =new Date(currenYear,currenMonth,0-i+1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }

  for(let i = 0; i < invalidDayIndex; i++){
    const prevDate =new Date(currenYear,currenMonth,30-(30-i)+1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }

  for(let i = invalidDayIndex+1; i <= totalDays;i++){
    const date = new Date(currenYear,currenMonth,i);
    datesHTML += `<div class="date active">${i}</div>`;

  }
  
  for(let i= 1; i<= 7 - lastDayIndex;i++){
    const nextDate = new Date(currenYear,currenMonth + 1,i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;

  }
  
  datesElement.innerHTML = datesHTML;

  const dateElements = document.querySelectorAll(".active");
  
  dateElements.forEach((dateElement) => {
    dateElement.addEventListener('click', () => {
      // Capture the selected date when a date is clicked
      
       selectedDate = new Date(currenYear, currenMonth, parseInt(dateElement.textContent));
      // Store the selected date in a variable or do something with it
      console.log(selectedDate);
      const confirmation = confirm(`You selected the date: ${selectedDate}. Do you want to confirm this date?`);
    
      if (confirmation) {
        // User confirmed, do something with the selected date
        console.log(`Confirmed date: ${selectedDate}`);
        alert(`Date confirmed: ${selectedDate}`);
        const storedate = selectedDate; // Example date

        // Extract year, month, and day
        const storeyear = String(storedate.getFullYear());
        const storemonth = String(storedate.getMonth() + 1).padStart(2, '0'); // Add 1 to month because it's zero-based
        const storeday = String(storedate.getDate()).padStart(2, '0');
        
        // Create a formatted date string
        const formattedDate = storeyear + "-" + storemonth + "-" + storeday;

        currentUser.receivedate = formattedDate;
            localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
      } else {
        selectedDate = null;
        alert("Please choose another date.");
      }

    });
  });

}
else if(new Date().getMonth() > currenDate.getMonth() && new Date().getFullYear() == yearcompare){
  for(let i = firstDayIndex; i > 0; i--){
      const prevDate =new Date(currenYear,currenMonth,0-i+1);
      datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }
  
    for(let i = 0; i < totalDays; i++){
      const prevDate =new Date(currenYear,currenMonth,30-(30-i)+1);
      datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }
  
    
    for(let i= 1; i<= 7 - lastDayIndex;i++){
      const nextDate = new Date(currenYear,currenMonth + 1,i);
      datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  
    }
  
    datesElement.innerHTML = datesHTML;
}

else if(new Date().getMonth() < currenDate.getMonth() || new Date().getFullYear() < yearcompare ){
  for(let i = firstDayIndex; i > 0; i--){
      const prevDate =new Date(currenYear,currenMonth,0-i+1);
      datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }
  
    for(let i = 1; i <= totalDays;i++){
      const date = new Date(currenYear,currenMonth,i);
      datesHTML += `<div class="date active">${i}</div>`;
  
    }
    
    for(let i= 1; i<= 7 - lastDayIndex;i++){
      const nextDate = new Date(currenYear,currenMonth + 1,i);
      datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  
    }
  
    datesElement.innerHTML = datesHTML;
  
    
    const dateElements = document.querySelectorAll(".active");
    
    dateElements.forEach((dateElement) => {
      dateElement.addEventListener('click', () => {
        // Capture the selected date when a date is clicked
        
         selectedDate = new Date(currenYear, currenMonth, parseInt(dateElement.textContent));
        // Store the selected date in a variable or do something with it
        console.log(selectedDate);
        const confirmation = confirm(`You selected the date: ${selectedDate}. Do you want to confirm this date?`);
      
        if (confirmation) {
          // User confirmed, do something with the selected date
          console.log(`Confirmed date: ${selectedDate}`);
          alert(`Date confirmed: ${selectedDate}`);
        } else {
          selectedDate = null;
          alert("Please choose another date.");
        }
  
      });
    });
}
}

prevBtn.addEventListener('click', () =>{
  YearCounter--;
  if(YearCounter == 0){
    yearcompare --;
    YearCounter = 12;
  }
  currenDate.setMonth(currenDate.getMonth() - 1);
updateCalendar();
})

nextBtn.addEventListener('click', () => {
  YearCounter++;
  if(YearCounter == 13){
    yearcompare ++;
    YearCounter = 1;
  }
  currenDate.setMonth(currenDate.getMonth() + 1);
  updateCalendar();
})

updateCalendar();