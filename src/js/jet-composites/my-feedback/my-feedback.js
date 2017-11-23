define(['knockout','ojs/ojcore','ojs/ojinputtext','ojs/ojtable'],
function(ko) {
    function feedbackModel() {

        self.feedbackArray =  ko.observableArray([{Name: 'Mponeng', feedback: 'excellent', questions: 'Please increase the duration of the books'}]);
        self.datasource = new oj.ArrayTableDataSource(self.feedbackArray, {idAttribute: 'Name'});

        self.value = ko.observable("");
        self.feedback = ko.observable("");
        self.questions = ko.observable("");

        self.clickedButton = ko.observable("(None clicked yet)");
        self.buttonClick = function(event){
            self.clickedButton(self.feedbackArray.push({Name: self.value(), feedback: self.feedback(), questions: self.questions()}));
            console.log(self.feedbackArray())
            return true;
        }


    }
    return feedbackModel;
}
);
