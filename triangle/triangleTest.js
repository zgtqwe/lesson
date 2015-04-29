QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(5,5,5),true,"5,5,5 is equilateral") ;
	assert.equal(triangle.isEquilateral(0,4,4),false,"0,4,4 is not equilateral") ;
	assert.equal(triangle.isEquilateral(-1,2,2),false,"-1,2,2 is not equilateral") ;
});
QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(5,4,2),true,"5,4,2 is isosceles") ;
	assert.equal(triangle.isIsosceles(1,5,5),true,"1,5,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(5,5,5),true,"5,5,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(1,1,11),false,"1,1,11 is not isosceles") ;
	assert.equal(triangle.isIsosceles(0,0,1),false,"0,0,1 is not isosceles") ;
	assert.equal(triangle.isIsosceles(-1,2,5),false,"-1,2,5 is not isosceles") ;
	
	
	
});
QUnit.test("scalene triangle has three different sides", function( assert ) {
	assert.equal(triangle.isScalene(3,2,4),true,"3,2,4 is scalene") ;
	assert.equal(triangle.isScalene(0,2,1),false,"0,2,1 is not scalene") ;
	assert.equal(triangle.isScalene(-1,1,4),false,"-1,1,4 is not scalene") ;
	assert.equal(triangle.isScalene(3,3,4),false,"3,3,4 is not scalene") ;
	assert.equal(triangle.isScalene(5,5,5),false,"5,5,5 is not scalene") ;
	
});