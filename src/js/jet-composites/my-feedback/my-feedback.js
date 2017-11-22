define(['knockout'], 
function(ko) {
    function feedbackModel() {

        self.feedbackArray =  ko.observableArray([{companyName: 'Steltix', feedback: 'succesfull', questions: 'Do you like enterprise'}]);
        self.datasource = new oj.ArrayTableDataSource(self.feedbackArray, {idAttribute: 'companyName'});
  
        self.value = ko.observable("");
        self.feedback = ko.observable("");
        self.questions = ko.observable("");
  
        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function(event){
            self.clickedButton(self.feedbackArray.push({companyName: self.value(), feedback: self.feedback(), questions: self.questions()}));
            console.log(self.feedbackArray())
            return true;
        }

        
    }
    return feedbackModel;
}
);

