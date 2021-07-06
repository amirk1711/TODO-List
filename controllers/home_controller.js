const TaskList = require("../models/tasks");

module.exports.home = function (req, res) {
	TaskList.find({}, function (err, todoList) {
		if (err) {
			console.log("Error in fetching todo list");
			return;
		}

		return res.render("home", {
			todo_list: todoList,
		});
	});
};

module.exports.addTask = function (req, res) {
    console.log('req.body', req.body);
	TaskList.create(req.body, function (err, todoList) {
		if (err) {
			console.log("Error in creating Task List");
			return;
		}

		return res.redirect("back");
	});
};

module.exports.completeTask = function (req, res) {
	TaskList.findById(req.query._id, function (err, task) {
		if (err) {
			console.log("Error in finding task");
			return;
		}
        task.isCompleted = !task.isCompleted;
        task.save();
		return res.redirect("back");
	});
};

module.exports.deleteTask = function (req, res) {
	TaskList.findByIdAndDelete(req.query._id, function (err) {
		if (err) {
			console.log("Error in deleting list");
			return;
		}

		return res.redirect("back");
	});
};
