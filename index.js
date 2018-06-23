const fs = require('fs');

let roomID = 1;
let bookingID = 1;

const randomizeNumber = (min, max) => Math.floor(Math.random() * Math.floor(max)) + min;

const randomRoomSub = (start, end) => {  
  let data = [];
  let roomsCSV = '';
  let bookingsCSV = '';
  for (let i = start; i < end; i++) {
    const hotelReservation = {
      _id: (i).toString(),
      rooms: [],
    };
    let rooms = 2;
    while (rooms > 0) {
      let bookings = 12;
      let currentRoom = {};
      let roomArr = [];
      roomArr.push(roomID);
      roomArr.push(i);
      const price = randomizeNumber(5, 15);
      currentRoom.price = price;
      roomArr.push(price);
      const beds = randomizeNumber(1, 4);
      currentRoom.beds = beds;
      roomArr.push(beds);
      currentRoom.bookings = [];
      for (let j = 0; j < bookings; j++) {
        let bookingArr = [];
        bookingArr.push(bookingID++);
        let bookStart = randomizeNumber(0, 90);
        let bookEnd = bookStart + randomizeNumber(1, 5);
        currentRoom.bookings.push([bookStart, bookEnd]);
        bookingArr.push(roomID);
        bookingArr.push(bookStart);
        bookingArr.push(bookEnd);
        bookingsCSV += bookingArr.join(',') + '\n';
      }
      currentRoom.id = roomID++;
      hotelReservation.rooms.push(currentRoom);
      rooms -= 1;
      roomsCSV += roomArr.join(',') + '\n';
    }
    data.push(JSON.stringify(hotelReservation));
  }
  let str = data.join('\n');
  str = '\n' + str;
  fs.appendFile(`./data/data.json`, str, (err) => {
    if (err) throw err;
    if (end < 10000000) {
      fs.appendFile('./data/rooms.csv', roomsCSV, (err) => {
        if(err) throw err;
        fs.appendFile('./data/bookings.csv', bookingsCSV, (err) => {
          if(err) throw err;
          console.log('The file has been saved!', end);
          randomRoomSub(start + 1000, end + 1000);
        })    
      })
    } else {
      console.timeEnd();
    }
  });
}

const randomRoom = () => {
  console.time();
  randomRoomSub(1, 1001);
};

randomRoom();
