const findTheOldest = (age) => {
    let findAge=age.map((people) => people.yearOfDeath-people.yearOfBirth),
        currentYear = new Date().getFullYear(),
        maxAge=0,
        index;
    
    for(let i=0;i<findAge.length;i++){
        if(isNaN(findAge[i])){
            findAge[i]=currentYear-age[i].yearOfBirth;
        }
        if(maxAge<findAge[i]){
            maxAge=findAge[i];
            index=i;
        }
    }
    return age[index];
};

// Do not edit below this line
module.exports = findTheOldest;
