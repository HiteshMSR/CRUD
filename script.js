var url="https://61ea3b297bc0550017bc660c.mockapi.io/users"

//HTTP GET Method (to read data)
function getData(){
    fetch(url,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((result)=>result.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error);})

}
//getData()


//HTTP Method to send the data (POST Method)

function createData(){

    let data={
        name:"Hitesh",
        email:"msrhitesh@gmail.com",

    };

    fetch(url,{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "content-Type": "application/json"
        }
    }).then((result)=>result.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error);})

}
//createData()

//HTTP method to update Data (PUT)

function updateData(){
    let data ={
        name:"Vaamsi",
        email:"vaamsi@gmail.com"
    }
    fetch(url+"/30",{
        method : "PUT",
        body: JSON.stringify(data),
        headers: {
            "content-Type": "application/json"
        }
    }).then((result)=>result.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error);})
}
updateData()

//HTTP method to Delete Data (Delete)

function deleteData(){
    fetch(url+"/3",{
        method : "DELETE",
    }).then((result)=>result.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error);})
}
//deleteData()

