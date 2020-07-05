class person{

    constructor(){
        this.talk_speed = 100;
    }

    greeting(text) {
        var greeting_input = ['hello','hi','whats up','hi','uzzi']
        var greeting_responce = ['hey there','hello','hey sir']
        var word;
        for(word in text.split(" ")){
            if(word.toLowerCase() in greeting_input){
                return greeting_responce[Math.floor(Math.random()*3)];
            }
        }
        return "";
    }

    getNowDate(){
        var d = new Date();
        var year = d.getFullYear();
        var month_num = d.getMonth();
        var day_num = d.getDate();
        var day_of_week = d.getDay();

        var  month_list = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Satuday'];
        var day_list = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12',
                '13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd',
                '24th','25th','26th','27th','28th','29th','30th','31st'];

        return 'Today is '+weekday[day_of_week]+' '+month_list[month_num-1]+' the '+day_list[day_num-1]+' year '+year+'.'; 

    }

    getTime(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var time = 'am';
        if(m < 10){
            m = '0'+m;
        }
        if(s < 10){
            s="0"+s;
        }

        if(h>12){
            h = h-12;
            time = 'pm';
        }

        return "the time is "+h+':'+m+':'+s+' '+time;
    }

    about_site(){
        return "The purpose of this web page is to showcase a demo of a web assistance, more like pesonal assistace except it tell you information related to a partcular business. when you ask.";
    }

    updates(){
        return 'some update to this page on next release will include '+
        'Recording all unknow question to database so answer may be add and improve the infor on the system '+
        'make page so it is able is get data from other website if it is not availble in this one'
    }

    response(text){
        var response = '';

        var grt = this.greeting(text);
        response = response + grt+" ";

        if(text.indexOf("time") != -1){
            var gt = this.getTime();
            response = response + gt+" ";
        }

        if(text.indexOf("date") != -1){
            var gnd = this.getNowDate();
            response = response + gnd+" ";
        }

        if(text.indexOf("about") != -1){
            var ans = this.about_site();
            response = response + ans;
        }

        if(text.indexOf("updates") != -1){
            var ans = this.updates();
            response = response + ans;
        }


        if(text.indexOf("time") == -1 && text.indexOf("date") == -1 && text.indexOf("about") == -1 && text.indexOf("updates") == -1){
            response = response + "I don't have an answer to what you have asked please make sure you spelling is correct or you can ask again in 24 hours i'm sure my team would have given the answer to me. thank you";
        }

        return response;
    }

}
