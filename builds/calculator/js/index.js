$(".input").click(handleButtonClick);
var string = "";
var answer = '';
$(".evaluate").click(evaluate);
$(".evaluateNeg").click(evaluateNeg);

function handleButtonClick() {

  $("#display").val($("#display").val() + $(this).val());
  string = $("#display").val();
  console.log("string " + string);
}

function evaluate() {
  console.log(" string" + string);
  answer = eval(string);
  console.log(" answer " + answer)
  $("#display").val(answer);
}

function btnclear() {
  $("#display").val("");
  string = '';
}

function evaluateNeg() {
  $("#display").val($("#display").val() + '-');
  string = $("#display").val();
}