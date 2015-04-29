var triangle = {
    isEquilateral : function(a,b,c) {
	    if (a<=0) return false;
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    		return true ;
	
    },
    isIsosceles : function(a,b,c) {
    	if (((a+b)<=c) ||((a+c)<=b)||((b+c)<=a)) return false;
    	   if (a<=0||b<=0||c<=0) return false;
    	   if (a==b||b==c||a==c)  return true ;
    	   //return true;
    },
    isScalene :function(a,b,c){
    	if (((a+b)<=c) ||((a+c)<=b)||((b+c)<=a)) return false;
    	if (a==b||b==c||a==c)  return false ;
 	    return true;
    }
};