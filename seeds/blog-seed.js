const { Blog } = require("../models");

const blogData = [
	{
		title: "Learn to use C++",
		content:
			"A tutorial on how to use C++ as well as how to implenment it into your projects.",
		user_id: 4,
	},
	{
		title: "Survivng Bootcamp",
		content:
			"So you decided to enroll into bootcamp? What now? Here are three main categories that will help a student get through it. 1.Time, 2. Curiousity, 3. Drive",
		user_id: 1,
	},
	{
		title: "Es6 v Es7",
		content:
			"What are the differences between the new and older technologies? Thought about whether it will help or break your app, then this blog is for you.",
		user_id: 3,
	},
	{
		title: "How to use Node.js",
		content:
			"In this blog well go over how to install and use this backend technology",
		user_id: 5,
	},
	{
		title: "Dev Ops another mystery",
		content:
			"Dev Ops got you down? Don't worry we have you back on how to navigate the Dev Ops",
		user_id: 4,
	},
];
const seedBlogs = () => Blog.bulkCreate(blogData);
module.exports = seedBlogs;
