const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "roombooking",
});

app.post("/login", (req, res) => {
  const sql =
    "SELECT id, email, password FROM customer WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json(err);
    } else if (data.length > 0) {
      return res.json(data);
    } else if (data.length == 0) {
      return res.json("Login Failed");
    }
  });
});

app.get("/:roomType", (req, res) => {
  const currentDate = new Date();
  const startDate = currentDate;
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 5);

  const roomCounts = [];
  const roomType = req.params.roomType;
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  function getRoomCounts(currentDate) {
    const currentDateFormatted = formatDate(currentDate);

    const sql = `
      SELECT COUNT(*) as roomCount
      FROM booking_dates
      WHERE date = ? AND type = ?
    `;

    db.query(sql, [currentDateFormatted, roomType], (error, results) => {
      if (error) {
        console.error("Error executing the query: ", error);
        res
          .status(500)
          .send("An error occurred while retrieving room availability.");
      } else {
        const roomCount = results[0] ? results[0].roomCount : 0;
        roomCounts.push({ date: currentDateFormatted, roomCount });

        if (currentDate >= endDate) {
          res.json(roomCounts);
        } else {
          currentDate.setDate(currentDate.getDate() + 1);
          getRoomCounts(currentDate);
        }
      }
    });
  }

  getRoomCounts(startDate);
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO customer (fname, lname, phoneno, email, password) VALUES(?,?,?,?,?)";
  db.query(
    sql,
    [
      req.body.fname,
      req.body.lname,
      req.body.phoneno,
      req.body.email,
      req.body.password,
    ],
    (err) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(1);
      }
    }
  );
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO customer (fname, lname, phoneno, email, password) VALUES(?,?,?,?,?)";
  db.query(
    sql,
    [
      req.body.fname,
      req.body.lname,
      req.body.phoneno,
      req.body.email,
      req.body.password,
    ],
    (err) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(1);
      }
    }
  );
});

app.post("/customerbooking", (req, res) => {
  const ty = req.body.type;
  const dd = req.body.diffdate;
  const rooms = req.body.rooms;
  let amt = 1;
  if (ty === "Delux") {
    amt = 3000 * dd * rooms;
  } else if (ty === "Premier") {
    amt = 8000 * dd * rooms;
  } else if (ty === "Club") {
    amt = 15000 * dd * rooms;
  }
  const sql =
    "INSERT INTO customer_booking (booking_id, bdate, cindate, coutdate, type, noofdays,cid,amt,noofrooms) VALUES(?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      req.body.bid,
      req.body.currentDate,
      req.body.cin,
      req.body.cout,
      req.body.type,
      req.body.diffdate,
      req.body.custid,
      amt,
      req.body.rooms,
    ],
    (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(1);
      }
    }
  );
});

app.post("/roombooking", (req, res) => {
  const sql =
    "INSERT INTO booking_dates (date, type, cid, noofroom) VALUES(?,?,?,?)";
  const startDate = new Date(req.body.cin);
  const endDate = new Date(req.body.cout);
  let currentDay = new Date(startDate);

  function insertDataForDate(date) {
    db.query(
      sql,
      [
        date.toISOString().split("T")[0],
        req.body.type,
        "HFS" + String(req.body.custid).padStart(4, "0"),
        req.body.rooms,
      ],
      (err) => {
        if (err) {
          return res.json(err);
        }
      }
    );
  }

  const insertNextDate = () => {
    if (currentDay <= endDate) {
      insertDataForDate(currentDay);
      currentDay.setDate(currentDay.getDate() + 1);
      insertNextDate();
    } else {
      res.json(1);
    }
  };

  insertNextDate();
});

app.post("/paymentdata", (req, res) => {
  const query =
    "SELECT cb.booking_id,DATE_FORMAT(cb.cindate, '%d-%m-%Y') AS cindatenew,DATE_FORMAT(cb.coutdate, '%d-%m-%Y') AS coutdatenew, c.fname, c.lname, cb.amt, cb.noofdays, c.phoneno, c.email, cb.type, cb.noofrooms, DATE_FORMAT(cb.bdate, '%d-%m-%Y') AS bdatenew FROM customer_booking AS cb INNER JOIN customer AS c on c.id = cb.cid WHERE cb.booking_id = ?";
  db.query(query, [req.body.bid], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    } else if (results.length === 0) {
      res.status(404).json({ error: "Row not found" });
      return;
    }
    console.log(results);
    res.json(results[0]);
  });
});

app.listen(8081, () => {
  console.log("Connected");
});
