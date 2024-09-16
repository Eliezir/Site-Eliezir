const getAge = () => {
    const myBirthDay = '2004-02-18'; 
    const birthDate = new Date(myBirthDay);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };


  const ageSpan = document.getElementById('age');
 ageSpan.innerHTML = getAge();