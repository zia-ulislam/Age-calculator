document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    let dob = new Date(document.getElementById('dob').value);
    let today = new Date();

 
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

  
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

 
    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }


    let timeDiff = nextBirthday.getTime() - today.getTime();
    let daysUntilNextBirthday = Math.ceil(timeDiff / (1000 * 3600 * 24));
    

    document.getElementById('result').textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    document.getElementById('result1').innerHTML = `<img src="birthdaycake.png" alt="Birthday Cake" style="width: 100px; height: auto;"><br>`;
    document.getElementById('result2').textContent = `Your next birthday is in ${daysUntilNextBirthday} days`
});
