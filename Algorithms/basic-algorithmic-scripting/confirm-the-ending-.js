

/*
Confirm the Ending 
Check if a string (first argument, str) ends with the given target string (second argument, target).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr()

*/



function end(str1, str2) {
	const str1Sub = str1.substr(-str2.length);
	
	return str1Sub === str2 ? true : false;


}

end("Bastian", "n");
end("Connor", "n");
end("Walking on water and developing software from a specification are easy if both are frozen", "specification");
end("He has to give me a new name", "name");
end("He has to give me a new name", "me");
end("He has to give me a new name", "na");
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");



