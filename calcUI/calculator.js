var calculator = {
	memory : 0 ,
	number : 0 ,
	result:0,
	multiple:0.1,
	point:0,
	numberPressed : function(num) {
		console.log("number pressed: "+num) ;	
      // this.number =this.number * 10 + num ;
		if(this.point==0)	
		this.number =this.number * 10 + num ;
		else
		{
			this.number =this.number +this.multiple* num ;
			this.multiple=this.multiple*0.1;
		}
       calculator.displayResult();
		//calculatorUI.setDisplay(this.number) ;	
	},
	operatorPressed : function(operator) {
		this.memory=calculatorUI.getDisplay();
		this.point=0;
	   console.log("operator pressed: "+operator) ;	
		this.operator=operator;
		 this.number =0 ;
		//calculatorUI.setDisplay(this.number) ;	
		  calculator.displayResult();
	},
	equalPressed : function() {
		console.log("equal pressed") ;
		this.result=0;
		//m=parseInt(this.memory);
		//n=parseInt(this.number);
		m=parseFloat(this.memory);
		n=parseFloat(this.number);

		if(this.operator=="plus")
	      this.result=m+n;
		if(this.operator=="minus")
			this.result=m-n;
		if(this.operator=="multiply")
			this.result=m*n;
		if((this.operator=="divide")&&(n!=0))
			this.result=m/n;
		
		this.number=this.result;
		//calculatorUI.setDisplay(this.number) ;	
		  calculator.displayResult();
	},
	dotPressed : function() {
		console.log("dot pressed") ;	
		 this .number=this .number;
		 this.point=1;
		 this.multiple=0.1,
		 calculator.displayResult();
	
	},
	clearPressed : function() {
		console.log("clear pressed") ;
		this.number =0 ;
		calculatorUI.setDisplay(this.number) ;	
	},
	allClearPressed : function() {
		console.log("all clear pressed") ;
		 this.number =0 ;
		 this.memory=0;
		 this.result=0,
		 this.point=0;
		//calculatorUI.setDisplay(this.number) ;	
				  calculator.displayResult();
	},
	displayResult:function(){
		text=(parseFloat(this.number.toPrecision(12)));
		//text=(parseFloat(this.number));
		calculatorUI.setDisplay(text) ;	
	},
};

var calculatorUI = {
    operators : [ "plus" , "minus" , "multiply" , "divide" ] ,
	
    initialize : function() {
		for(i=0;i<10;i++) {
			hash = "#" + i ;
			$(hash).click(function() {
				calculator.numberPressed(Number($(this).attr("id"))) ;
			});
		}
		for(i=0;i<this.operators.length;i++) {
			hash = "#" + this.operators[i] ;
			$(hash).click(function() {
				calculator.operatorPressed($(this).attr("id")) ;
			}) ;
		}
		$("#equal").click(function() {
			calculator.equalPressed() ;
		});
		$("#dot").click(function() {
			calculator.dotPressed() ;
		});
		$("#C").click(function() {
			calculator.clearPressed() ;
		});
		$("#AC").click(function() {
			calculator.allClearPressed() ;
		});
	},
	
	setDisplay : function() {
	    $("#display").text(calculator.number) ; 	
	   // $("#display").text(calculator.result) ; 	
	},
	getDisplay : function() {
		return $("#display").text() ;
	}
};

$(document).ready(function() {
	calculatorUI.initialize() ;
});