const express = require('express');
const cors=require('cors');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'your password here',
  database : 'books',
  insecureAuth:true
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/books', function(req, res) {
    connection.getConnection(function(err, connection) {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            res.status(500).send('Internal server error');
            return;
        }

        // Executing the MySQL query (select all data from the 'bookitems' table).
        connection.query('SELECT * FROM bookitems', function(error, results, fields) {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error executing MySQL query:', error);
                res.status(500).send('Internal server error');
                return;
            }

            // Sending the results to the client
            res.json(results);
        });
    });
});

app.post('/submit', (req, res) => {
    const { title, author, body } = req.body;
    if (!title || !author || !body) {
        return res.status(400).json({ error: 'Please provide all the details of the poem' });
    }

    connection.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            return res.status(500).send('Internal server error');
        }

        connection.query('INSERT INTO poems (title, author, body) VALUES (?, ?, ?)', [title, author, body], (error, data) => {
            connection.release();
            if (error) {
                console.error('Error executing MySQL query:', error);
                return res.status(500).send('Internal server error');
            }
            return res.status(200).json({ message: 'Poem submitted successfully' });
        });
    });
});

app.listen(3001, () => {
    console.log('Server is listening at http://localhost:3001');
});
