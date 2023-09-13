const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let selectedDate = null;

let currenDate = new Date();

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
      } else {
        selectedDate = null;
        alert("Please choose another date.");
      }

    });
  });

}

const updateinvalidCalendar = () =>{
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

const updatevalidCalendar = () =>{
  const currenYear = currenDate.getFullYear();
  const currenMonth = currenDate.getMonth();
  
  const firstDay = new Date(currenYear,currenMonth,0);
  const lastDay = new Date(currenYear,currenMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();

  const monthYearString = currenDate.toLocaleString
  ('default',{month: 'long', year:'numeric'});
  monthYearElement.textContent = monthYearString;

  let datesHTML = '';

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

prevBtn.addEventListener('click', () =>{
  currenDate.setMonth(currenDate.getMonth() - 1);
  if(new Date().getMonth() === currenDate.getMonth()){
  updateCalendar();}
  else{
    updateinvalidCalendar();
  }

})

nextBtn.addEventListener('click', () => {
  currenDate.setMonth(currenDate.getMonth() + 1);
  if(new Date().getMonth() === currenDate.getMonth()){
    updateCalendar();}
    else if(new Date().getMonth() > currenDate.getMonth()){
      updateinvalidCalendar();
    }
    else{
      updatevalidCalendar();
    }
})

updateCalendar();