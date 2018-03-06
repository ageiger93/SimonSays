var counties = ["Alachua", "Baker", "Bay", "Bradford", "Brevard", "Broward",
"Calhoun", "Charlotte", "Citrus", "Clay", "Collier", "Columbia", "DeSoto", 
"Dixie", "Duval", "Escambia", "Flagler", "Franklin", "Gadsden", "Gilchrist",
"Glades", "Gulf", "Hamilton", "Hardee", "Hendry", "Hernando" , "Highlands", 
"Hillsborough", "Holmes", "Indian River", "Jackson", "Jefferson", "Lafayette",
"Lake", "Lee", "Leon", "Levy", "Liberty", "Madison", "Manatee", "Marion",
"Martin", "Miama-Dade", "Monroe", "Nassau", "Okaloosa", "Okeechobee", 
"Orange", "Osceola", "Palm Beach", "Pasco", "Pinellas", "Polk", "Putnam",
"Santa Rosa", "Sarasota", "Seminole", "St. Johns", "St. Lucie", "Sumter",
"Suwannee", "Taylor", "Union", "Volusia", "Wakulla", "Walton", "Washinton"];

var pickedCounty;
function pickCounty (arr) {
	var num = Math.floor(Math.random() * arr.length)
	pickCounty = arr[num]
	console.log(pickedCounty);
}

pickCounty(counties);