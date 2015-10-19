// test timeout
var timeout = 20000;

MochaWeb.testOnly(function(){    
    describe("web3 connectivity", function(){
        it("should connect to web3", function(done){
            web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
            done();
        });

        it("should provide valid gas price", function(done){
            web3.eth.getGasPrice(function(err, result){
                chai.assert.isNull(err, null);
                chai.assert.property(result, 'toNumber');
                chai.assert.isNumber(result.toNumber(10));
                done();
            });
        });
    });

    // Construct Multiply Contract Object and contract instance
    var contractInstance,
        transactionObject = {
            data: MultiplyContract.bytecode, 
            gasPrice: web3.eth.gasPrice,
            gas: 500000,
            from: web3.eth.accounts[0]
        };

    describe("MultiplyContract unit tests", function(){
        it("should deploy a new MultiplyContract", function(done){
            this.timeout(timeout);
            
            MultiplyContract.new(transactionObject, 
                                 function(err, contract){
                chai.assert.isNull(err);

                if(contract.address) {
                    contractInstance = contract;
                    done();
                }
            });
        });
            
        it("should multiply 0 * 7 to equal 0", function(done){
            this.timeout(timeout);
            
            contractInstance.multiply.call(0, function(err, result){
                chai.assert.isNull(err);
                chai.assert.equal(result.toNumber(10), 0);
                done();
            });
        });
        
        it("should multiply 7 * 7 to equal 49", function(done){
            this.timeout(timeout);
            
            contractInstance.multiply.call(7, function(err, result){
                chai.assert.isNull(err);
                chai.assert.equal(result.toNumber(10), (7 * 7));
                done();
            });
        });
        
        it("should multiply 4 * 7 to equal 28", function(done){
            this.timeout(timeout);
            
            contractInstance.multiply.call(4, function(err, result){
                chai.assert.isNull(err);
                chai.assert.equal(result.toNumber(10), (4 * 7));
                done();
            });
        });
    });

});