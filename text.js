/*old code 
not working for people less than seats

let seatingCapOfAllBuses = [];
let previousBusOneSeats = 0;
let previousBusTwoSeats = 0;
let seatBooked = 0;
let totalpeople = 100;
let totalBus = 20;
let totalNumberOFPeopleLeft = 0;
let totalSeatAllocated = 0;

function doAllocation(number_of_people,number_of_buses){
  console.log("total number of people : ",number_of_people);
  console.log("total number of buses : ",number_of_buses);
  
  for(let busNo = 0; busNo < number_of_buses; busNo++){
    console.log("\n",i+1," iteration number");
    if(busNo === 0){
      seatBooked = 1;
      seatingCapOfAllBuses.push(seatBooked);
      number_of_people -= seatBooked;
      previousBusOneSeats = 0;
      previousBusTwoSeats = seatingCapOfAllBuses[busNo];
      console.log("seats allocated : ",seatingCapOfAllBuses[busNo]);
      console.log("people left : ",number_of_people);
      console.log("previous bus one seat : ",previousBusOneSeats);
      console.log("previous bus two seat : ",previousBusTwoSeats);
    }
    else{
      seatBooked = previousBusTwoSeats + previousBusOneSeats;
      seatingCapOfAllBuses.push(seatBooked);
      number_of_people -= seatBooked;
      previousBusOneSeats = seatingCapOfAllBuses[busNo-1];
      previousBusTwoSeats = seatingCapOfAllBuses[busNo];
      console.log("seats allocated : ",seatingCapOfAllBuses[busNo]);
      console.log("people left : ",number_of_people);
      console.log("previous bus one seat : ",previousBusOneSeats);
      console.log("previous bus two seat : ",previousBusOneSeats);
    }
    console.log("seat map : ",seatingCapOfAllBuses);
  }
  totalNumberOFPeopleLeft = number_of_people;
  return seatingCapOfAllBuses;
}

console.log("\nfinal seating capacity map : ",doAllocation(totalpeople,totalBus));

seatingCapOfAllBuses.forEach(function(val){
  totalSeatAllocated += val;
})

console.log("\ntotal seats allocated : ",totalSeatAllocated);
console.log("\ntotal number of people left : ",totalNumberOFPeopleLeft);
console.log("\ntotal number of people : ",totalSeatAllocated + totalNumberOFPeopleLeft);
*/

//UI varibable

let numOfBuses = document.querySelector()


//new code
let num_of_buses = 0;
let num_of_people = 0;
let bus_seat = 0;


function do_allocation(num_of_buses,num_of_people){
  let bus_seat_map = [];
  console.log("\n################################\n");
  console.log("number of buses = ",num_of_buses);
  console.log("num_of_people = ",num_of_people);
  console.log("\n################################\n");
  
  //loop for getting seats allocated for each bus
  for(let bus_num = 0; bus_num < num_of_buses; bus_num++){
    console.log("\n",bus_num," iteration")
    //calculating bus seats for current bus 
    //checking whether its first bus than default seat = 1
    if(bus_num === 0){
      bus_seat = 1;
      console.log(`number of bus 0 seats = `,bus_seat);
    }
    else{ 
      //checking for previous bus invalid index of array for bus_num = 1
      if(bus_num === 1){
        bus_seat = bus_seat_map[bus_num - 1] + 0;
        console.log(`number of bus 1 seats = `,bus_seat);
      }
      else{
        //current bus seats =  sum of previous two buses 
        bus_seat = bus_seat_map[bus_num - 1] + bus_seat_map[bus_num - 2];
        console.log(`number of bus ${bus_num} seats = `,bus_seat);
      }
    }
    if(num_of_people >= bus_seat){
      bus_seat_map[bus_num] = bus_seat;
      console.log("bus seating map = ",bus_seat_map);
      num_of_people = num_of_people - bus_seat;
      console.log("number of people left = ",num_of_people);
    }
    else{
      if(num_of_people === 0){
        bus_seat_map[bus_num] = 0;
      }
      else{
        bus_seat_map[bus_num] = num_of_people;
        num_of_people = 0;
      }
      console.log("bus seating map = ",bus_seat_map);
      console.log("number of people left = ",num_of_people);
    }
  }
  return bus_seat_map;
}

let bus_seat_map = do_allocation(num_of_buses,num_of_people);
console.log(`final seat map : ${bus_seat_map}`);

