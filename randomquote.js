var quotes=[{quote:"Natural selection is anything but random.",author:"Richard Dawkings"},
                        {quote:"I get the biggest enjoyment from the random and unexpected places.",author:"Linus Torvalds"},
                        {quote:"A stitch in time save nine",author:"Unknown author"},
                        {quote:"Get rich or die trying",author:"Curtis Jackson AKA 50 Cent"},
                        {quote:"Big companies are like marching bands",author:"Douglas Coupland"}];

            

            //console.log(randomQuoteNumber);
            
            function randomQuoteGenerator(e){
                var target=e.target;
                var randomQuoteNumber=Math.floor(Math.random()*quotes.length);
                var randomQuoteArea=document.getElementById('randomQuoteArea');

                var message=quotes[randomQuoteNumber].quote;
                message+="- ";
                message+=quotes[randomQuoteNumber].author

                randomQuoteArea.textContent=message;
               
               console.log(target);
            }
            var generateQuoteButton=document.getElementById('generate');
            generateQuoteButton.addEventListener('click',function(e){randomQuoteGenerator(e);},false);
