class Telephone {
  
    // Make Observer Class a parameter on the constructor, 
       // so that we can call the observer methods from the telephone class
     
       constructor() {
         this.phoneStorage = []
         this.Observer = []
       }
   
      
     
       addPhoneNumber(txt) {
   
         this.phoneStorage.push(txt)
           // UseObserver method to printPhoneNumber()
       }
     
       removePhoneNumber(txt) {
         let index = this.phoneStorage.indexOf(txt)
         if (index > -1) {
           this.phoneStorage.splice(index, 1)
         }
       }
     
       dialPhoneNumber(txt) {
         let index = this.phoneStorage.indexOf(txt)
         if (index > -1) {
   
   //         Call Observer.Notify() method, that’s all!
          this.notifyObserver(txt)
   
         }
         else{
             console.log(`${txt } is not a saved and can't initate call`)
   
         
         }
       
        
       }
     
       
       
       // add  observer method 
   
       addobserver(cont){
           this.Observer.push(cont)
       }
   
        // remove observer method
       removeObserver(cont){
           let obj = this.phoneStorage.indexOf(cont)
         if (obj > -1) {
           this.phoneStorage.splice(obj, 1)
         }
       }
   
   
    // notify observer method
   
   
       notifyObserver(cont){
           this.Observer.forEach(observer => observer.update(cont));
       }
   
   
       
       // notifyObserver() {
       //     for (let i = 0; i < this.Observer.length; i++) {
       //       this.Observer.update(i)
       //     }
       //   }
     }
     
     
   
   
     class Observer {
       constructor() {
           this.update = function(context) {
               // Print Out the number here 
   
             console.log(context);
   
             
               // Use Observer to PrintNowDialing()
             console.log(`Now Dialling ${context}`);    
           }
         }
      
      
     }
   
     
     const Tel = new Telephone();
     
   const observer1 = new Observer();
   
   Tel.addobserver(observer1)
   
   Tel.addPhoneNumber('2347023232');
   Tel.addPhoneNumber('12345678976543')
   
   Tel.removeObserver('2347023232')
   
   Tel.dialPhoneNumber('2347023232'); 
   Tel.dialPhoneNumber('12345678976543')
   
   
   