
var table1;
table1="<table border='1'  width='300'  cellspacing='10' cellpadding='10'>";
for (var i=0;i<=9;i++) {

	table1= table1 + "<tr>";
		for (var j=0;j<=9;j++) {
		
		table1= table1+ "<td>" + i+j + "</td>";
		
		}
		table1=table1+ "</tr>";
		
}
table1=table1+ "</table>";
document.write(table1);




