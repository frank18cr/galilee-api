var Bill = require('../models/bill');
var common = require('../common');

//Controller for Bill entity
var billController = {
	//Creates a new bill on the db
	createBill: function(billObj, callback){
		new Bill({
				period: billObj.period,
				provider: billObj.provider,
				consumption: billObj.consumption,
				cost: billObj.cost,
				comments: billObj.comments,
				consumptionUnit: billObj.consumptionUnit,
				consumptionType: billObj.consumptionType,
				consumptionFee: billObj.consumptionFee,
				productionUnit1: billObj.productionUnit1,
				productionQuantity1: billObj.productionQuantity1,
				productionUnit2: billObj.productionUnit2,
				productionQuantity2: billObj.productionQuantity2,
				biomassType: billObj.biomassType
			}).save(function(error){
				//If there's an error, raises it to the caller of this function.
				if(error){
					log.info(common.messages.POST_ERROR + ": " +error);
					callback(error);
				}
				else{
					callback();
				}				
			});
	},
	//Retrieves all the bills stored on the db
	getBills: function(callback){
		 Bill.find({}, function(error, bills) {
		 	//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(bills, error);
		 	}
		 	else{
		 		if(callback){
		 			callback(bills);
		 		}
		 	}

    	});
	},
	deleteBill: function(billId, callback){
		 Bill.findByIdAndRemove(billId, function(error, bills) {
		 	//If there's an error, raises it to the caller of this function.
		 	if(error){
		 		log.info(common.messages.GET_ERROR + ": " +error);
		 		callback(error);
		 	}
		 	else{
		 		if(callback){
		 			callback();
		 		}
		 	}

    	});
	}
}

module.exports = billController;