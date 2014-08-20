exports.getData = function(siteId, org){
	var data;
	var iterator = 1;
	
    var orgs = new Array();
	var org2;
	orgs.push("HLSC");
	orgs.push("TCS");
	orgs.push("RM");
	for(var i=0; i<orgs.length; i++){
		if(org == orgs[i]){
			org2 = "org"+(i+1);
		}
	}	
	
	
	for(var j = 1; j<=orgs.length;j++){
		for(var k = 1; k<4;k++){
			if(siteId == 10+k && org2 === "org"+j)
			{
				data = 
				[
					{
						"_id": "53965d9df0ccd69ac5dd1394",
						"SiteId": 10+k,
						"Org": org
					}
				];
				for(var i = 1;i<7;i++){
					var newFieldName = 'S'+i;
					var newFieldValue = {};
					newFieldValue["G"] = Math.round(Math.random()*150*(iterator))+((iterator-1)*150);
					newFieldValue["R"] = Math.round(Math.random()*150*(iterator))+((iterator-1)*150);
					data[0][newFieldName] = newFieldValue;					
				}
				
				data = JSON.stringify(data);
			}
			iterator++;
		}
	}
		
	
	if(data === undefined)
	{
		data = "Site " + siteId + " does not exist for " + org;
	}

	return data;
};