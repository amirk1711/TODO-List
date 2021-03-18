const TaskList = require('../models/tasks');

module.exports.home = function(req, res){
    TaskList.find({}, function(err, todoList){
        if(err){
            console.log("Error in fetching todo list");
            return;
        }

        return res.render('home', {
            todo_list: todoList
        });
    });
}

module.exports.addTask = function(req, res){
    TaskList.create(req.body, function(err, todoList){
        if(err){
            console.log("Error in creating Task List")
            return;
        }
        // console.log("New Task Added in TaskList: ", todoList);

        return res.redirect('back');
    });
}

module.exports.completeTask = function(req, res){
    // console.log(req.query._id);
    // TODO 
    return res.redirect('back');
}

module.exports.deleteTask = function(req, res){
    TaskList.findByIdAndDelete(req.query._id, function(err){
        if(err){
            console.log("Error in deleting list");
            return;
        }

        return res.redirect('back');
    });
}