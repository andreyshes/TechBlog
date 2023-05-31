const { Comment } = require("../models");

const commentData = [
	{
		user_id: 3,
		blog_id: 2,
		comment_text: "Wow thats amazing",
	},
	{
		user_id: 4,
		blog_id: 1,
		comment_text: "Thats a great point!",
	},
	{
		user_id: 5,
		blog_id: 5,
		comment_text: "I like what you have done here",
	},
	{
		user_id: 4,
		blog_id: 3,
		comment_text: "havent thought of it this way",
	},
	{
		user_id: 2,
		blog_id: 5,
		comment_text: "Very useful and helpful tip",
	},
	{
		user_id: 1,
		blog_id: 4,
		comment_text: "What tech was used for this server?",
	},
	{
		user_id: 3,
		blog_id: 3,
		comment_text: "Great strategy!",
	},
	{
		user_id: 4,
		blog_id: 4,
		comment_text: " Didnt think of it this way",
	},
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
