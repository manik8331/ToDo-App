const express = require('express');
const app = express();
//Adding port number for local host
const port = 4000;

app.use(express.urlencoded());

// Add css and js file
app.use(express.static('assets'));

//set up view engine
app.set('view engine', 'ejs');

app.set('views', './views');


//setup database to store local data
const db = require('./config/mongoose');

//require Schema from mongoose
const TodoList = require('./models/todo');

//post request for search box
var Search = "";
app.post('/search', (req, res) => {
    Search = req.body.searchCategory;
    return res.redirect('back');
});



//Render the data from database
app.get('/', (req, res) => {
    if (Search !== "") {
        TodoList.find({ category: Search }, (err, tasks) => {
            if (err) {
                console.log('Error form fetching data from databse');
                return;
            }
            return res.render('home', {
                Todo_list: tasks
            });
        })
    }
    else{
        TodoList.find({}, (err, tasks) => {
            if (err) {
                console.log('Error form fetching data from databse');
                return;
            }
            return res.render('home', {
                Todo_list: tasks
            });
        })

    }
});



//post request for add task
app.post('/', (req, res) => {
    TodoList.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date,

    }, (err, newTask) => {
        if (err) {
            console.log('error is creating a contact');
            return;
        }
        return res.redirect('back');
    });
});

//get request for delete the task from datbase

app.get('/delete-task', (req, res) => {
    let id = req.query.id;
    TodoList.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('Error from deleting data from database');
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port, (err) => {
    if (err) {
        console.error();
        return;
    }
    console.log('Successful running on port ' + port);
})