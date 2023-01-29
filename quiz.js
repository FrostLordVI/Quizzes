const historyBtn = document.querySelector('#history')
const sportBtn = document.querySelector('#sport')
const geographyBtn = document.querySelector('#geography')
const natureBtn = document.querySelector('#nature')

const board1=document.querySelector('#board1')
const board2=document.querySelector('#board2')
const board3=document.querySelector('#board3')
const board4=document.querySelector('#board4')
const board5=document.querySelector('#board5')
const board6=document.querySelector('#board6')
const board7=document.querySelector('#board7')

const question1=document.querySelector('#question1')
const question2=document.querySelector('#question2')
const question3=document.querySelector('#question3')
const question4=document.querySelector('#question4')
const question5=document.querySelector('#question5')
const question6=document.querySelector('#question6')

const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')

const answer1_2 = document.querySelector('#answer1_2')
const answer2_2 = document.querySelector('#answer2_2')
const answer3_2 = document.querySelector('#answer3_2')
const answer4_2 = document.querySelector('#answer4_2')

const answer1_3 = document.querySelector('#answer1_3')
const answer2_3 = document.querySelector('#answer2_3')
const answer3_3 = document.querySelector('#answer3_3')
const answer4_3 = document.querySelector('#answer4_3')

const answer1_4 = document.querySelector('#answer1_4')
const answer2_4 = document.querySelector('#answer2_4')
const answer3_4 = document.querySelector('#answer3_4')
const answer4_4 = document.querySelector('#answer4_4')

const answer1_5 = document.querySelector('#answer1_5')
const answer2_5 = document.querySelector('#answer2_5')
const answer3_5 = document.querySelector('#answer3_5')
const answer4_5 = document.querySelector('#answer4_5')

const answer1_6 = document.querySelector('#answer1_6')
const answer2_6 = document.querySelector('#answer2_6')
const answer3_6 = document.querySelector('#answer3_6')
const answer4_6 = document.querySelector('#answer4_6')

const answer1Board = document.querySelector('#answer1Board')
const answer2Board = document.querySelector('#answer2Board')
const answer3Board = document.querySelector('#answer3Board')
const answer4Board = document.querySelector('#answer4Board')

const bodyColor = document.querySelector('body')
const answerColor = document.querySelectorAll('.answer')
 const h5Color = document.querySelectorAll('h5')

const answer1_2Board = document.querySelector('#answer1_2Board')
const answer2_2Board = document.querySelector('#answer2_2Board')
const answer3_2Board = document.querySelector('#answer3_2Board')
const answer4_2Board = document.querySelector('#answer4_2Board')

const answer1_3Board = document.querySelector('#answer1_3Board')
const answer2_3Board = document.querySelector('#answer2_3Board')
const answer3_3Board = document.querySelector('#answer3_3Board')
const answer4_3Board = document.querySelector('#answer4_3Board')

const answer1_4Board = document.querySelector('#answer1_4Board')
const answer2_4Board = document.querySelector('#answer2_4Board')
const answer3_4Board = document.querySelector('#answer3_4Board')
const answer4_4Board = document.querySelector('#answer4_4Board')

const answer1_5Board = document.querySelector('#answer1_5Board')
const answer2_5Board = document.querySelector('#answer2_5Board')
const answer3_5Board = document.querySelector('#answer3_5Board')
const answer4_5Board = document.querySelector('#answer4_5Board')

const answer1_6Board = document.querySelector('#answer1_6Board')
const answer2_6Board = document.querySelector('#answer2_6Board')
const answer3_6Board = document.querySelector('#answer3_6Board')
const answer4_6Board = document.querySelector('#answer4_6Board')

const score = document.querySelector('#score')
const comm = document.querySelector('#comm')

let count = 0

alert('If you want to try your hand at another quiz while one is in progress, you must click the "RESTART" button or refresh the page, but you will lose the progress of the current one. Click OK and choose one of the four quizzes you want to start.')

function history(){

historyBtn.classList.add('choosen')

sportBtn.classList.add('disabled')
geographyBtn.classList.add('disabled')
natureBtn.classList.add('disabled')

        board1.classList.add('display')

        function firstHistoryAnswer(){

            this.id==='answer2Board'?count++:count

            board1.classList.remove('display')
            board1.classList.add('noDisplay')
            board2.classList.add('display')
            
            answer1Board.classList.add('disabled')
            answer2Board.classList.add('disabled')
            answer3Board.classList.add('disabled')
            answer4Board.classList.add('disabled')

            setTimeout(()=>{board1.setAttribute('style','display:none')},2000)
        }

        answer2Board.addEventListener('click',firstHistoryAnswer)
        answer1Board.addEventListener('click',firstHistoryAnswer)
        answer3Board.addEventListener('click',firstHistoryAnswer)
        answer4Board.addEventListener('click',firstHistoryAnswer)     

        function secondHistoryAnswer(){

            this.id==='answer4_2Board'?count++:count

            board2.classList.remove('display')
            board2.classList.add('noDisplay')
            board3.classList.add('display')
            

            answer1_2Board.classList.add('disabled')
            answer2_2Board.classList.add('disabled')
            answer3_2Board.classList.add('disabled')
            answer4_2Board.classList.add('disabled')

            setTimeout(()=>{board2.setAttribute('style','display:none')},2000)
        }
        
        answer2_2Board.addEventListener('click',secondHistoryAnswer)
        answer1_2Board.addEventListener('click',secondHistoryAnswer)
        answer3_2Board.addEventListener('click',secondHistoryAnswer)
        answer4_2Board.addEventListener('click',secondHistoryAnswer)     

        function thirdHistoryAnswer(){

            this.id==='answer2_3Board'?count++:count

            board3.classList.remove('display')
            board3.classList.add('noDisplay')
            board4.classList.add('display')
            
            answer1_3Board.classList.add('disabled')
            answer2_3Board.classList.add('disabled')
            answer3_3Board.classList.add('disabled')
            answer4_3Board.classList.add('disabled')

            setTimeout(()=>{board3.setAttribute('style','display:none')},2000)
        }
        
        answer2_3Board.addEventListener('click',thirdHistoryAnswer)
        answer1_3Board.addEventListener('click',thirdHistoryAnswer)
        answer3_3Board.addEventListener('click',thirdHistoryAnswer)
        answer4_3Board.addEventListener('click',thirdHistoryAnswer)     

        function fourthHistoryAnswer(){

            this.id==='answer1_4Board'?count++:count

            board4.classList.remove('display')
            board4.classList.add('noDisplay')
            board5.classList.add('display')
            
            answer1_4Board.classList.add('disabled')
            answer2_4Board.classList.add('disabled')
            answer3_4Board.classList.add('disabled')
            answer4_4Board.classList.add('disabled')

            setTimeout(()=>{board4.setAttribute('style','display:none')},2000)
        }
        
        answer2_4Board.addEventListener('click',fourthHistoryAnswer)
        answer1_4Board.addEventListener('click',fourthHistoryAnswer)
        answer3_4Board.addEventListener('click',fourthHistoryAnswer)
        answer4_4Board.addEventListener('click',fourthHistoryAnswer)     

        function fifthHistoryAnswer(){

            this.id==='answer3_5Board'?count++:count

            board5.classList.remove('display')
            board5.classList.add('noDisplay')
            board6.classList.add('display')
            
            answer1_5Board.classList.add('disabled')
            answer2_5Board.classList.add('disabled')
            answer3_5Board.classList.add('disabled')
            answer4_5Board.classList.add('disabled')

            setTimeout(()=>{board5.setAttribute('style','display:none')},2000)
            
        }
        
        answer2_5Board.addEventListener('click',fifthHistoryAnswer)
        answer1_5Board.addEventListener('click',fifthHistoryAnswer)
        answer3_5Board.addEventListener('click',fifthHistoryAnswer)
        answer4_5Board.addEventListener('click',fifthHistoryAnswer)

        function sixthHistoryAnswer(){

            this.id==='answer4_6Board'?count++:count

            board6.classList.remove('display')
            board6.classList.add('noDisplay')
            board7.classList.add('display')
            
            answer1_6Board.classList.add('disabled')
            answer2_6Board.classList.add('disabled')
            answer3_6Board.classList.add('disabled')
            answer4_6Board.classList.add('disabled')

            setTimeout(()=>{board6.setAttribute('style','display:none')},2000)
           
            
            score.innerHTML=`${count} / 6`
           
            count===6?comm.innerHTML+=' That was great! Congratulation!':
            count===4||count===5?comm.innerHTML+=' You were close to getting 100%. Bravo!':
            count===3?comm.innerHTML+=' Not bad.':
            count===2?comm.innerHTML+=' You should read more about history.':
            comm.innerHTML+=' Shame on you...'
        }
        
        answer2_6Board.addEventListener('click',sixthHistoryAnswer)
        answer1_6Board.addEventListener('click',sixthHistoryAnswer)
        answer3_6Board.addEventListener('click',sixthHistoryAnswer)
        answer4_6Board.addEventListener('click',sixthHistoryAnswer)
}

historyBtn.addEventListener('click',history)





//SPORT FUNCTION

function sport(){

    bodyColor.classList.add('sport')
    answerColor.forEach(el=>el.classList.add('sport'))
    h5Color.forEach(el=>el.classList.add('sport'))

    sportBtn.classList.add('choosen')
    
    historyBtn.classList.add('disabled')
    geographyBtn.classList.add('disabled')
    natureBtn.classList.add('disabled')
    
    question1.innerHTML="Who was the Bundesliga's top scorer in the 2020/2021 season?";
    question2.innerHTML='Who won the 2002 World Cup in football?';
    question3.innerHTML="Who was the Ekstraklasa's top scorer in the 2005/2006 season?";
    question4.innerHTML='Who won the championship in the 2019/2020 Premier Ligue season?';
    question5.innerHTML='How many Golden Balls does Christiano Ronaldo have in his collection?';
    question6.innerHTML='Secretariat" - Who am I?';

    answer1.innerHTML='P. Shick';
    answer2.innerHTML='E. Haland';
    answer3.innerHTML='R. Lewadowski';
    answer4.innerHTML='T. Muller';

    answer1_2.innerHTML='Portugal';
    answer2_2.innerHTML='Brazil';
    answer3_2.innerHTML='France';
    answer4_2.innerHTML='Argentina';

    answer1_3.innerHTML='G. Piechna';
    answer2_3.innerHTML='A. Niedzielan';
    answer3_3.innerHTML='R. Guerreiro';
    answer4_3.innerHTML='P. Brożek';

    answer1_4.innerHTML='Chelsea F.C.';
    answer2_4.innerHTML='Arsenal F.C.';
    answer3_4.innerHTML='Manchester City F.C.';
    answer4_4.innerHTML='Liverpool F.C.';

    answer1_5.innerHTML='5 Golden Balls';
    answer2_5.innerHTML='6 Golden Balls';
    answer3_5.innerHTML='3 Golden Balls';
    answer4_5.innerHTML='4 Golden Balls';

    answer1_6.innerHTML='MMA Fighter';
    answer2_6.innerHTML='American Racehorse';
    answer3_6.innerHTML='Australian Racehorse';
    answer4_6.innerHTML='Handball Player ';
    
    
            board1.classList.add('display')
    
            function firstSportAnswer(){
    
                this.id==='answer3Board'?count++:count
    
                board1.classList.remove('display')
                board1.classList.add('noDisplay')
                board2.classList.add('display')
                
                answer1Board.classList.add('disabled')
                answer2Board.classList.add('disabled')
                answer3Board.classList.add('disabled')
                answer4Board.classList.add('disabled')

                setTimeout(()=>{board1.setAttribute('style','display:none')},2000)
            }
    
            answer2Board.addEventListener('click',firstSportAnswer)
            answer1Board.addEventListener('click',firstSportAnswer)
            answer3Board.addEventListener('click',firstSportAnswer)
            answer4Board.addEventListener('click',firstSportAnswer)    
    
            function secondSportAnswer(){
    
                this.id==='answer2_2Board'?count++:count
    
                board2.classList.remove('display')
                board2.classList.add('noDisplay')
                board3.classList.add('display')
                
    
                answer1_2Board.classList.add('disabled')
                answer2_2Board.classList.add('disabled')
                answer3_2Board.classList.add('disabled')
                answer4_2Board.classList.add('disabled')
            
                setTimeout(()=>{board2.setAttribute('style','display:none')},2000)
            }
            
            answer2_2Board.addEventListener('click',secondSportAnswer)
            answer1_2Board.addEventListener('click',secondSportAnswer)
            answer3_2Board.addEventListener('click',secondSportAnswer)
            answer4_2Board.addEventListener('click',secondSportAnswer)    

            function thirdSportAnswer(){
    
                this.id==='answer1_3Board'?count++:count
    
                board3.classList.remove('display')
                board3.classList.add('noDisplay')
                board4.classList.add('display')
                
                answer1_3Board.classList.add('disabled')
                answer2_3Board.classList.add('disabled')
                answer3_3Board.classList.add('disabled')
                answer4_3Board.classList.add('disabled')

                setTimeout(()=>{board3.setAttribute('style','display:none')},2000)
            }
            
            answer2_3Board.addEventListener('click',thirdSportAnswer)
            answer1_3Board.addEventListener('click',thirdSportAnswer)
            answer3_3Board.addEventListener('click',thirdSportAnswer)
            answer4_3Board.addEventListener('click',thirdSportAnswer)   
    
            function fourthSportAnswer(){
    
                this.id==='answer4_4Board'?count++:count
    
                board4.classList.remove('display')
                board4.classList.add('noDisplay')
                board5.classList.add('display')
                
                answer1_4Board.classList.add('disabled')
                answer2_4Board.classList.add('disabled')
                answer3_4Board.classList.add('disabled')
                answer4_4Board.classList.add('disabled')

                setTimeout(()=>{board4.setAttribute('style','display:none')},2000)
            }
            
            answer2_4Board.addEventListener('click',fourthSportAnswer)
            answer1_4Board.addEventListener('click',fourthSportAnswer)
            answer3_4Board.addEventListener('click',fourthSportAnswer)
            answer4_4Board.addEventListener('click',fourthSportAnswer)    
    
            function fifthSportAnswer(){
    
                this.id==='answer1_5Board'?count++:count
    
                board5.classList.remove('display')
                board5.classList.add('noDisplay')
                board6.classList.add('display')
                
                answer1_5Board.classList.add('disabled')
                answer2_5Board.classList.add('disabled')
                answer3_5Board.classList.add('disabled')
                answer4_5Board.classList.add('disabled')

                setTimeout(()=>{board5.setAttribute('style','display:none')},2000)
                
            }
            
            answer2_5Board.addEventListener('click',fifthSportAnswer)
            answer1_5Board.addEventListener('click',fifthSportAnswer)
            answer3_5Board.addEventListener('click',fifthSportAnswer)
            answer4_5Board.addEventListener('click',fifthSportAnswer)
    
            function sixthSportAnswer(){
    
                this.id==='answer2_6Board'?count++:count
    
                board6.classList.remove('display')
                board6.classList.add('noDisplay')
                board7.classList.add('display')
                
                answer1_6Board.classList.add('disabled')
                answer2_6Board.classList.add('disabled')
                answer3_6Board.classList.add('disabled')
                answer4_6Board.classList.add('disabled')

                setTimeout(()=>{board6.setAttribute('style','display:none')},2000)
                
                score.innerHTML=`${count} / 6`
               
                count===6?comm.innerHTML+=' That was great! Congratulation!':
                count===4||count===5?comm.innerHTML+=' You were close to getting 100%. Bravo!':
                count===3?comm.innerHTML+=' Not bad.':
                count===2?comm.innerHTML+=' You should read more about sport.':
                comm.innerHTML+=' Shame on you...'
            }
            
            answer2_6Board.addEventListener('click',sixthSportAnswer)
            answer1_6Board.addEventListener('click',sixthSportAnswer)
            answer3_6Board.addEventListener('click',sixthSportAnswer)
            answer4_6Board.addEventListener('click',sixthSportAnswer)
    }
    
    sportBtn.addEventListener('click',sport)







//NatureFUNCTION

function nature(){

    bodyColor.classList.add('nature')
    answerColor.forEach(el=>el.classList.add('nature'))
    h5Color.forEach(el=>el.classList.add('nature'))

    natureBtn.classList.add('choosen')
    
    sportBtn.classList.add('disabled')
    geographyBtn.classList.add('disabled')
    historyBtn.classList.add('disabled')

      
    question1.innerHTML="What is this animal - Psalmopeus Irminia?";
    question2.innerHTML='The platypus is...?';
    question3.innerHTML="What is this animal - Corallus Caninus?";
    question4.innerHTML='On what continent the yellow anaconda occurs?';
    question5.innerHTML="How much is a horse's running speed record?";
    question6.innerHTML='How many months does pregnancy last in a hippopotamus?';

    answer1.innerHTML='Tarantula';
    answer2.innerHTML='Snake';
    answer3.innerHTML='Bird';
    answer4.innerHTML='Lizard';

    answer1_2.innerHTML='Bird';
    answer2_2.innerHTML='Reptile';
    answer3_2.innerHTML='Insect';
    answer4_2.innerHTML='Mammal';

    answer1_3.innerHTML='Lizard';
    answer2_3.innerHTML='Fish';
    answer3_3.innerHTML='Snake';
    answer4_3.innerHTML='Turtle';

    answer1_4.innerHTML='Asia';
    answer2_4.innerHTML='North America';
    answer3_4.innerHTML='South America';
    answer4_4.innerHTML='Australia';

    answer1_5.innerHTML='70.76 km/h';
    answer2_5.innerHTML='82.32 km/h';
    answer3_5.innerHTML='66.78 km/h';
    answer4_5.innerHTML='74.26 km/h';

    answer1_6.innerHTML='6 months';
    answer2_6.innerHTML='8 months';
    answer3_6.innerHTML='10 months';
    answer4_6.innerHTML='12 months';
      
            board1.classList.add('display')
    
            function firstNatureAnswer(){
    
                this.id==='answer1Board'?count++:count
    
                board1.classList.remove('display')
                board1.classList.add('noDisplay')
                board2.classList.add('display')
                
                answer1Board.classList.add('disabled')
                answer2Board.classList.add('disabled')
                answer3Board.classList.add('disabled')
                answer4Board.classList.add('disabled')

                setTimeout(()=>{board1.setAttribute('style','display:none')},2000)
            }
    
            answer2Board.addEventListener('click',firstNatureAnswer)
            answer1Board.addEventListener('click',firstNatureAnswer)
            answer3Board.addEventListener('click',firstNatureAnswer)
            answer4Board.addEventListener('click',firstNatureAnswer)    
    
            function secondNatureAnswer(){
    
                this.id==='answer4_2Board'?count++:count
    
                board2.classList.remove('display')
                board2.classList.add('noDisplay')
                board3.classList.add('display')
                
    
                answer1_2Board.classList.add('disabled')
                answer2_2Board.classList.add('disabled')
                answer3_2Board.classList.add('disabled')
                answer4_2Board.classList.add('disabled')

                setTimeout(()=>{board2.setAttribute('style','display:none')},2000)
            }
            
            answer2_2Board.addEventListener('click',secondNatureAnswer)
            answer1_2Board.addEventListener('click',secondNatureAnswer)
            answer3_2Board.addEventListener('click',secondNatureAnswer)
            answer4_2Board.addEventListener('click',secondNatureAnswer)   
    
            function thirdNatureAnswer(){
    
                this.id==='answer3_3Board'?count++:count
    
                board3.classList.remove('display')
                board3.classList.add('noDisplay')
                board4.classList.add('display')
                
                answer1_3Board.classList.add('disabled')
                answer2_3Board.classList.add('disabled')
                answer3_3Board.classList.add('disabled')
                answer4_3Board.classList.add('disabled')

                setTimeout(()=>{board3.setAttribute('style','display:none')},2000)
            }
            
            answer2_3Board.addEventListener('click',thirdNatureAnswer)
            answer1_3Board.addEventListener('click',thirdNatureAnswer)
            answer3_3Board.addEventListener('click',thirdNatureAnswer)
            answer4_3Board.addEventListener('click',thirdNatureAnswer)    
    
            function fourthNatureAnswer(){
    
                this.id==='answer3_4Board'?count++:count
    
                board4.classList.remove('display')
                board4.classList.add('noDisplay')
                board5.classList.add('display')
                
                answer1_4Board.classList.add('disabled')
                answer2_4Board.classList.add('disabled')
                answer3_4Board.classList.add('disabled')
                answer4_4Board.classList.add('disabled')

                setTimeout(()=>{board4.setAttribute('style','display:none')},2000)
            }
            
            answer2_4Board.addEventListener('click',fourthNatureAnswer)
            answer1_4Board.addEventListener('click',fourthNatureAnswer)
            answer3_4Board.addEventListener('click',fourthNatureAnswer)
            answer4_4Board.addEventListener('click',fourthNatureAnswer)     
    
            function fifthNatureAnswer(){

                this.id==='answer1_5Board'?count++:count
    
                board5.classList.remove('display')
                board5.classList.add('noDisplay')
                board6.classList.add('display')
                
                answer1_5Board.classList.add('disabled')
                answer2_5Board.classList.add('disabled')
                answer3_5Board.classList.add('disabled')
                answer4_5Board.classList.add('disabled')

                setTimeout(()=>{board5.setAttribute('style','display:none')},2000)
                
            }
            
            answer2_5Board.addEventListener('click',fifthNatureAnswer)
            answer1_5Board.addEventListener('click',fifthNatureAnswer)
            answer3_5Board.addEventListener('click',fifthNatureAnswer)
            answer4_5Board.addEventListener('click',fifthNatureAnswer)
    
            function sixthNatureAnswer(){
    
                this.id==='answer2_6Board'?count++:count
    
                board6.classList.remove('display')
                board6.classList.add('noDisplay')
                board7.classList.add('display')
                
                answer1_6Board.classList.add('disabled')
                answer2_6Board.classList.add('disabled')
                answer3_6Board.classList.add('disabled')
                answer4_6Board.classList.add('disabled')

                setTimeout(()=>{board6.setAttribute('style','display:none')},2000)
                
                score.innerHTML=`${count} / 6`
               
                count===6?comm.innerHTML+=' That was great! Congratulation!':
                count===4||count===5?comm.innerHTML+=' You were close to getting 100%. Bravo!':
                count===3?comm.innerHTML+=' Not bad.':
                count===2?comm.innerHTML+=' You should read more about nature.':
                comm.innerHTML+=' Shame on you...'
            }
            
            answer2_6Board.addEventListener('click',sixthNatureAnswer)
            answer1_6Board.addEventListener('click',sixthNatureAnswer)
            answer3_6Board.addEventListener('click',sixthNatureAnswer)
            answer4_6Board.addEventListener('click',sixthNatureAnswer)
    }
    
    natureBtn.addEventListener('click',nature)


//GeographyFUNCTION

    function geography(){

        bodyColor.classList.add('geography')
        answerColor.forEach(el=>el.classList.add('geography'))
        h5Color.forEach(el=>el.classList.add('geography'))

        geographyBtn.classList.add('choosen')
        
        sportBtn.classList.add('disabled')
        historyBtn.classList.add('disabled')
        natureBtn.classList.add('disabled')
        
             
    question1.innerHTML="What is the capital of the Czech Republic?";
    question2.innerHTML='In what country is the Great Slave Lake located?';
    question3.innerHTML="Which is the highest second peak in the world?";
    question4.innerHTML='Which country is Medellin located in?';
    question5.innerHTML="In which city is the Trevi Fountain located?";
    question6.innerHTML='In which country is located the Altos de Camapagna National Park and Biological Reserve?';

    answer1.innerHTML='Bratislava';
    answer2.innerHTML='Prague';
    answer3.innerHTML='Warsaw';
    answer4.innerHTML='Ljubljana';

    answer1_2.innerHTML='USA';
    answer2_2.innerHTML='Russia';
    answer3_2.innerHTML='Brasil';
    answer4_2.innerHTML='Canada';

    answer1_3.innerHTML='Lhotse';
    answer2_3.innerHTML='K2';
    answer3_3.innerHTML='Nanga Parbat';
    answer4_3.innerHTML='Annapurna I';

    answer1_4.innerHTML='Colombia';
    answer2_4.innerHTML='Mexico';
    answer3_4.innerHTML='Bolivia';
    answer4_4.innerHTML='Uruguay';

    answer1_5.innerHTML='Madrid';
    answer2_5.innerHTML='Milan';
    answer3_5.innerHTML='Lisbon';
    answer4_5.innerHTML='Rome';

    answer1_6.innerHTML='Panama';
    answer2_6.innerHTML='Cuba';
    answer3_6.innerHTML='Chile';
    answer4_6.innerHTML='Dominican Republic';
        
                board1.classList.add('display')
        
                function firstGeographyAnswer(){
        
                    this.id==='answer2Board'?count++:count
        
                    board1.classList.remove('display')
                    board1.classList.add('noDisplay')
                    board2.classList.add('display')
                    
                    answer1Board.classList.add('disabled')
                    answer2Board.classList.add('disabled')
                    answer3Board.classList.add('disabled')
                    answer4Board.classList.add('disabled')

                    setTimeout(()=>{board1.setAttribute('style','display:none')},2000)
                }
        
                answer2Board.addEventListener('click',firstGeographyAnswer)
                answer1Board.addEventListener('click',firstGeographyAnswer)
                answer3Board.addEventListener('click',firstGeographyAnswer)
                answer4Board.addEventListener('click',firstGeographyAnswer)     
        
                function secondGeographyAnswer(){
        
                    this.id==='answer4_2Board'?count++:count
        
                    board2.classList.remove('display')
                    board2.classList.add('noDisplay')
                    board3.classList.add('display')
                    
        
                    answer1_2Board.classList.add('disabled')
                    answer2_2Board.classList.add('disabled')
                    answer3_2Board.classList.add('disabled')
                    answer4_2Board.classList.add('disabled')

                    setTimeout(()=>{board2.setAttribute('style','display:none')},2000)
                }
                
                answer2_2Board.addEventListener('click',secondGeographyAnswer)
                answer1_2Board.addEventListener('click',secondGeographyAnswer)
                answer3_2Board.addEventListener('click',secondGeographyAnswer)
                answer4_2Board.addEventListener('click',secondGeographyAnswer)
            
                function thirdGeographyAnswer(){
        
                    this.id==='answer2_3Board'?count++:count
        
                    board3.classList.remove('display')
                    board3.classList.add('noDisplay')
                    board4.classList.add('display')
                    
                    answer1_3Board.classList.add('disabled')
                    answer2_3Board.classList.add('disabled')
                    answer3_3Board.classList.add('disabled')
                    answer4_3Board.classList.add('disabled')

                    setTimeout(()=>{board3.setAttribute('style','display:none')},2000)
                }
                
                answer2_3Board.addEventListener('click',thirdGeographyAnswer)
                answer1_3Board.addEventListener('click',thirdGeographyAnswer)
                answer3_3Board.addEventListener('click',thirdGeographyAnswer)
                answer4_3Board.addEventListener('click',thirdGeographyAnswer)    
        
                function fourthGeographyAnswer(){
        
                    this.id==='answer1_4Board'?count++:count
        
                    board4.classList.remove('display')
                    board4.classList.add('noDisplay')
                    board5.classList.add('display')
                    
                    answer1_4Board.classList.add('disabled')
                    answer2_4Board.classList.add('disabled')
                    answer3_4Board.classList.add('disabled')
                    answer4_4Board.classList.add('disabled')

                    setTimeout(()=>{board4.setAttribute('style','display:none')},2000)
                }
                
                answer2_4Board.addEventListener('click',fourthGeographyAnswer)
                answer1_4Board.addEventListener('click',fourthGeographyAnswer)
                answer3_4Board.addEventListener('click',fourthGeographyAnswer)
                answer4_4Board.addEventListener('click',fourthGeographyAnswer)     
        
                function fifthGeographyAnswer(){
        
                    this.id==='answer4_5Board'?count++:count
        
                    board5.classList.remove('display')
                    board5.classList.add('noDisplay')
                    board6.classList.add('display')
                    
                    answer1_5Board.classList.add('disabled')
                    answer2_5Board.classList.add('disabled')
                    answer3_5Board.classList.add('disabled')
                    answer4_5Board.classList.add('disabled')
                    
                    setTimeout(()=>{board5.setAttribute('style','display:none')},2000)
                }
                
                answer2_5Board.addEventListener('click',fifthGeographyAnswer)
                answer1_5Board.addEventListener('click',fifthGeographyAnswer)
                answer3_5Board.addEventListener('click',fifthGeographyAnswer)
                answer4_5Board.addEventListener('click',fifthGeographyAnswer)
        
                function sixthGeographyAnswer(){
        
                    this.id==='answer1_6Board'?count++:count
        
                    board6.classList.remove('display')
                    board6.classList.add('noDisplay')
                    board7.classList.add('display')
                    
                    answer1_6Board.classList.add('disabled')
                    answer2_6Board.classList.add('disabled')
                    answer3_6Board.classList.add('disabled')
                    answer4_6Board.classList.add('disabled')
                    
                    setTimeout(()=>{board6.setAttribute('style','display:none')},2000)

                    score.innerHTML=`${count} / 6`
                   
                    count===6?comm.innerHTML+=' That was great! Congratulation!':
                    count===4||count===5?comm.innerHTML+=' You were close to getting 100%. Bravo!':
                    count===3?comm.innerHTML+=' Not bad.':
                    count===2?comm.innerHTML+=' You should read more about geography.':
                    comm.innerHTML+=' Shame on you...'
                }
                
                answer2_6Board.addEventListener('click',sixthGeographyAnswer)
                answer1_6Board.addEventListener('click',sixthGeographyAnswer)
                answer3_6Board.addEventListener('click',sixthGeographyAnswer)
                answer4_6Board.addEventListener('click',sixthGeographyAnswer)
        }
        
        geographyBtn.addEventListener('click',geography)

const restart = document.querySelector('#restart')

function restartLoc(){
    window.location.reload()
}

restart.addEventListener('click',restartLoc)
