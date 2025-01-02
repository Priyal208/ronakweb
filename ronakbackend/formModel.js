const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	schoolname: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	std: {
		type: Number,
		required: true,
	},
	message: {
		type: String,
	}
});

module.exports = mongoose.model("form", formSchema);
