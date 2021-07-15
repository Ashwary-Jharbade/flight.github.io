// Dummy dataset
var dataset = [{
    flightName : "AI-201",
    origin : "Pune",
    ocode : "PNQ",
    arrive : "10:00 AM",
    destination : "Delhi",
    dcode : "DEL",
    depart : "12:00 PM",
    date : "2021-07-15",
    image:"https://images.unsplash.com/photo-1512289984044-071903207f5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    price:3500.00
},
{
    flightName : "AI-202",
    origin : "Pune",
    ocode : "PNQ",
    arrive : "12:00 PM",
    destination : "Delhi",
    dcode : "DEL",
    depart : "02:00 PM",
    date : "2021-07-15",
    image:"https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    price:4000.00
},
{
    flightName : "AI-203",
    origin : "Pune",
    ocode : "PNQ",
    arrive : "06:00 PM",
    destination : "Delhi",
    dcode : "DEL",
    depart : "08:00 PM",
    date : "2021-07-15",
    image:"https://images.unsplash.com/photo-1513540213998-8166856c3f45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBsYW5lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    price:5500.00
},
{
    flightName : "AI-204",
    origin : "Delhi",
    ocode : "DEL",
    arrive : "06:00 PM",
    destination : "Pune",
    dcode : "PNQ",
    depart : "08:00 PM",
    date : "2021-07-16",
    image:"https://images.unsplash.com/photo-1513540213998-8166856c3f45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBsYW5lfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    price:2500.00
},
{
    flightName : "AI-205",
    origin : "Delhi",
    ocode : "DEL",
    arrive : "06:00 PM",
    destination : "Pune",
    dcode : "PNQ",
    depart : "08:00 PM",
    date : "2021-07-16",
    image:"https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    price:3000.00
},
{
    flightName : "AI-206",
    origin : "Pune",
    ocode : "PNQ",
    arrive : "06:00 PM",
    destination : "Delhi",
    dcode : "DEL",
    depart : "08:00 PM",
    date : "2021-07-14",
    image:"https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    price:4000.00
},
{
    flightName : "AI-207",
    origin : "Delhi",
    ocode : "DEL",
    arrive : "06:00 AM",
    destination : "Pune",
    dcode : "PNQ",
    depart : "08:00 AM",
    date : "2021-07-15",
    image:"https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    price:3500.00
},
]

// Global Variables
var origin;
var destination;
var depart;
var return_date;
var passenger;
var price;

// on page load function
window.onload = (event) => {
    document.getElementById('price_meter').innerHTML = 5000;
    document.getElementById('timeDetails').style.display = "none";
};

// function display flight cards on the page
function showlist(garr){
    document.getElementById('showlist').innerHTML = '';
    let mainnode = document.getElementById('showlist');
    let inode;
    let submainnode;
    let parentnode;
    let creationnode;

    if(garr.length)
    {
        for(let i=0;i<garr.length;i++)
        {
            // dom for booking details
            creationnode = document.createElement('div')
            creationnode.classList.add('oneway')
            parentnode = creationnode
            creationnode = document.createElement('small')
            creationnode.innerHTML = garr[i][0].flightName;
            parentnode.append(creationnode)
            creationnode = document.createElement('p')
            creationnode.innerHTML = garr[i][0].ocode + " > " + garr[i][0].dcode;
            parentnode.append(creationnode)
            creationnode = document.createElement('p')
            creationnode.innerHTML = "Depart: "+garr[i][0].depart
            parentnode.append(creationnode)
            creationnode = document.createElement('p')
            creationnode.innerHTML = "Arrive: "+garr[i][0].arrive
            parentnode.append(creationnode)
            submainnode = document.createElement('div')
            submainnode.classList.add('booking_details') 
            submainnode.append(parentnode)

            if(return_date){
                creationnode = document.createElement('div')
                creationnode.classList.add('twoway')
                parentnode = creationnode
                creationnode = document.createElement('small')
                creationnode.innerHTML = garr[i][1].flightName;
                parentnode.append(creationnode)
                creationnode = document.createElement('p')
                creationnode.innerHTML = garr[i][1].ocode + " > " + garr[i][1].dcode;
                parentnode.append(creationnode)
                creationnode = document.createElement('p')
                creationnode.innerHTML = "Depart: "+garr[i][1].depart
                parentnode.append(creationnode)
                creationnode = document.createElement('p')
                creationnode.innerHTML = "Arrive: "+garr[i][1].arrive
            }
            else{
                creationnode = document.createElement('div')
                creationnode.classList.add('twoway')
                parentnode = creationnode
                creationnode = document.createElement('small')
                creationnode.innerHTML = "N/A";
                parentnode.append(creationnode)
                creationnode = document.createElement('p')
                creationnode.innerHTML = "N/A";
                parentnode.append(creationnode)
                creationnode = document.createElement('p')
                creationnode.innerHTML = "Depart: "+"N/A"
                parentnode.append(creationnode)
                creationnode = document.createElement('p')
                creationnode.innerHTML = "Arrive: "+"N/A"
            }

            parentnode.append(creationnode)
            submainnode.append(parentnode)

            // dom for price-box
            creationnode = document.createElement('h2')
            if(return_date){
                creationnode.innerHTML = "Rs. "+ (garr[i][0].price + garr[i][1].price)
            }
            else{
                creationnode.innerHTML = "Rs. "+ garr[i][0].price
            }
            parentnode = document.createElement('div')
            parentnode.classList.add('price-box')
            parentnode.append(creationnode)

            // dom for left-content
            creationnode = document.createElement('div');
            creationnode.classList.add('left-content')
            creationnode.append(parentnode)
            parentnode = creationnode
            parentnode.append(submainnode)

            // left-content entire dom
            submainnode = parentnode

            // dom for right-content
            creationnode = document.createElement('img')
            creationnode.src= garr[i][0].image;
            creationnode.alt = garr[i][0].flightName;
            inode = creationnode
            creationnode = document.createElement('div')
            creationnode.append(inode)
            parentnode = document.createElement('div')
            parentnode.classList.add('right-content')
            parentnode.append(creationnode)
            creationnode = document.createElement('button')
            creationnode.classList.add('book-flight')
            creationnode.type = 'button'
            inode = creationnode
            creationnode = document.createElement('span')
            creationnode.innerHTML = "Book "
            inode.append(creationnode)
            creationnode = document.createElement('span')
            creationnode.classList.add('button-content')
            creationnode.innerHTML = "this flight"
            inode.append(creationnode)
            creationnode = document.createElement('span')
            creationnode.classList.add('button-icon')
            creationnode.innerHTML = "&#9992;"
            inode.append(creationnode)
            creationnode = document.createElement('div')
            creationnode.append(inode)
            parentnode.append(creationnode)

            // dom for card_container
            creationnode = document.createElement('div')
            creationnode.classList.add('card_container')
            creationnode.append(submainnode)
            creationnode.append(parentnode)
            parentnode = creationnode

            // flight_card dom
            submainnode = document.createElement('div')
            submainnode.classList.add('flight_cards')
            submainnode.append(parentnode)

            // Full flight card dom
            mainnode.append(submainnode)
        }
    }
    else
    {
        document.getElementById('showlist').innerHTML = "<div align='center' class='emptyResult'><h1>No Flights</h1></div>"
    }

}

// function convert simple data format into specified
function convertDate(value){
    let arr = value.split('-')
    let month = {1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}
    let result = '';
    let k = parseInt(arr[2])
    if(k == 1 || k == 31){
        result = k+"st "
    }
    else if(k == 2){
        result = k+"nd "
    }
    else if(k == 3){
        result = k+"rd "
    }
    else{
        result = k+"th "
    }
    return result+month[parseInt(arr[1])]+" "+arr[0]
}

// filters dataset on the basis of search type
function fetchdata(){
    let garr = []
    let rarr = []
    let farr = []
    for(let i = 0; i<dataset.length;i++)
    {
        if(return_date)
        {   
            if(dataset[i].origin == destination  && dataset[i].destination == origin && dataset[i].date == return_date){
                rarr.push(dataset[i])
            }
        }
           
        if(dataset[i].price <= price && dataset[i].origin == origin && dataset[i].destination == destination && dataset[i].date == depart){
                garr.push([dataset[i],{}])
        }    
    }
    for(let i=0;i<rarr.length;i++)
    {
        for(let j=0;j<garr.length;j++)
        {
            if( (garr[j][0].price + rarr[i].price ) <= price)
            {
                farr.push([garr[j][0],rarr[i]])
            }
        }
    }
    
    if(return_date){
        showlist(farr)
    }
    else{
        showlist(garr) 
    }
    
}

// function get called on oneway menu button click
function oneway(){
    let obj =  document.getElementById('returnid')
    obj.disabled = true;
    obj.style.display = 'none'
    document.getElementById('onebut').style.background = 'white';
    document.getElementById('onebut').style.color = "#0150ab";
    document.getElementById('twobut').style.background = '#0150ab';
    document.getElementById('twobut').style.color = "white";
}

// function get called on return menu button click
function twoway(){
    let obj =  document.getElementById('returnid')
    obj.disabled = false;
    obj.style.borderColor = "#0150ab";
    obj.placeholder = "Return Date";
    obj.style.display = 'block'
    document.getElementById('onebut').style.background = '#0150ab';
    document.getElementById('onebut').style.color = "white";
    document.getElementById('twobut').style.background = 'white';
    document.getElementById('twobut').style.color = "#0150ab";
}

// function capitalize first letter of city searched
function capitalize(value){
    let arr = value.split(' ');
    let result ='';
    for(let i=0;i<arr.length;i++){
        result = result + arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()+" ";
    }
    return result.substring(0, result.length - 1)
}

// function varies flight cards on price change 
function priceChange(ele){
    document.getElementById('price_meter').innerHTML = ele.value;
    price = ele.value;
    if(destination){
        fetchdata();
    }
}

// function collect data from form store them globally
function flightSearch(event){
    event.preventDefault()
    document.getElementById('timeDetails').style.display = "Block";
    try{
        document.getElementById('proxy_image').style.display = 'None'
    }
    catch(err){

    }
    origin = capitalize(document.forms["form"]["origin"].value);
    destination = capitalize(document.forms["form"]["destination"].value);
    depart = document.forms["form"]["departure_date"].value;
    return_date = document.forms["form"]["return_date"].value;
    passenger = document.forms["form"]["passenger"].value;
    price = document.getElementById("sliderId").value;
    if(return_date){
        document.getElementById('locations').innerHTML = origin + " > " +destination + " > " + origin
        document.getElementById('return').innerHTML = "Return: " + convertDate(return_date)
    }
    else{
        document.getElementById('locations').innerHTML = origin + " > " +destination
        document.getElementById('return').innerHTML = "Return:" + " N/A"
    }
    document.getElementById('depart').innerHTML = "Depart: " + convertDate(depart)
    document.forms["form"]["origin"].value = '';
    document.forms["form"]["destination"].value = '';
    document.forms["form"]["departure_date"].value = '';
    document.forms["form"]["return_date"].value = '';
    document.forms["form"]["passenger"].value = '';
    fetchdata();
}

