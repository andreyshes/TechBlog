const { User } = require("../models");

const userData = [
	{
		username: "brad_pitt",
		twitter: "bradpitted",
		github: "bradpitt",
		email: "bradpw@gmail.com",
		password: "pa$$word1",
	},
	{
		username: "mark_cuban",
		twitter: "markcub",
		github: "markycuban1",
		email: "markC@gmail.com",
		password: "pa$$word2",
	},
	{
		username: "tom_cruise",
		twitter: "tcruise",
		github: "tomcruising",
		email: "tomcruisegmail.com",
		password: "pa$$word3",
	},
	{
		username: "elon_musk",
		twitter: "musked_elon",
		github: "emusk",
		email: "elonmusk3@gmail.com",
		password: "pa$$word4'",
	},
	{
		username: "kayne_west",
		twitter: "kaynewestern",
		github: "westKayne",
		email: "kayneW@gmail.com",
		password: "pa$$word5",
	},
	{
		username: "johnny_test",
		twitter: "jTest",
		github: "johnnyTested",
		email: "jTest@gmail.com",
		password: "pa$$word6",
	},
	{
		username: "andrew_tate",
		twitter: "drewtate",
		github: "topGtate",
		email: "tateDrew@gmail.com",
		password: "pa$$word7",
	},
	{
		username: "joe_rogan",
		twitter: "j_rogand",
		github: "joerogan",
		email: "jrog@gmail.com",
		password: "pa$$word8",
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
