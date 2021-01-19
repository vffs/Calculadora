class CalcController{

    constructor(){
        
        this.locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl =  document.querySelector('#hora');

        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setdisplayDateTime();
     setInterval(() => {
        this.setdisplayDateTime();
     },1000);
     
    }
 
    addEventListenerAll(element,events,fn){
       
        events.split(' ').forEach(event => {
            element.addEventListener(event,fn,false);
        });
    }
  
          
    initButtonsEvents(){
        
       let buttons = document.querySelectorAll("#buttons > g, #parts > g");

       buttons.forEach( (btn, index) => {
        this.addEventListenerAll(btn, "click drag", e => {
            console.log(btn.className.baseVal.replace("btn-","")) ;
            
        });
        
        this.addEventListenerAll(btn,"mouseover mouseup mousedown", e => {
            
            btn.style.cursor = "pointer";
        });
       });
           
    }

    setdisplayDateTime(){ 
	    this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
            day:"2-digit",
            month:"long",
            year:"numeric"
        });
	
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    get displayTime(){
        return this.dateEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
       return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}
