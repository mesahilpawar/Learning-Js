const Countries = ['India', 'Iceland', 'America', 'French']
const newCountries = Countries.map(function (country){
    return country.toLocaleUpperCase()
})
console.log(newCountries)