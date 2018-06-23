CREATE TABLE IF NOT EXISTS rooms(
  id SERIAL PRIMARY KEY,
  hostel_id  INTEGER,
  price INTEGER,
  beds INTEGER
);

CREATE TABLE IF NOT EXISTS bookings(
  id SERIAL PRIMARY KEY,
  room_id  INTEGER,
  startdate INTEGER,
  enddate INTEGER
);

