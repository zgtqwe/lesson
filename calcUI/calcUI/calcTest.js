QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#2').click();
	$('#3').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 123 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#1').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
    $('#AC').click();
});

QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#plus').click();
	$('#1').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
     $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#dot').click();
	$('#5').click();
	$('#plus').click();
	$('#1').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3.5 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#5').click();
	$('#dot').click();
	$('#5').click();
	$('#minus').click();
	$('#1').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 4.5 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#4').click();
	$('#dot').click();
	$('#5').click();
	$('#multiply').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 9, "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#3').click();
	$('#dot').click();
	$('#6').click();
	$('#9').click();
	$('#divide').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 1.23, "Passed!" );
});