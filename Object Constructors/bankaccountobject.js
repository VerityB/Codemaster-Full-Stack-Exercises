<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <style>
        
        </style>
    
<script>

// RESOURCES
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Custom_objects

    function onLoaded() {
        function BankAccount(accountName) {
	
            var _funds = 0;
        
            this.accountName = accountName;
            
            this.depositFunds = function(amount) {
                _funds += amount;
            }
            
            this.withdrawalFunds = function(amount) {
                _funds -= amount;
            }
            
            this.getBalance = function() {
                return _funds;
            }
            
            return this;
        }
    }
</script>
</head>
<body onload="onLoaded()"> <!-- this is event listener for when page is loaded it will run the object constructor (that starts with function)-->

    <!--two buttons-->
<button id="btn1">Btn1</button>
<button id="btn2">Btn2</button>
</body>
</html>




BankAccount ('This is my account name');

// Exercise #1-a
// Create an 'instance' of the BankAccount class and provide it with a name


// Exercise #1-b
// Display the name of your account


// Exercise #1-c
// Deposit 20 dollars into your bank account


// Exercise #1-d
// Withdrawl 15 dollars into your bank account


// Exercise #1-e
// Display you current balance on the screen




// Exercise #2-a
// Create a class called 'Battleship' which contains two properties 'xCoord' and 'yCoord' which indicate the ships current position

// Exercise #2-b
// Give the battleship class 4 public methods; moveUp (increments yCoord), moveBack (decrements yCoord), moveRight (increments xCoord), moveLeft (decrements xCoord)

// Exercise #2-c
// Give the battleship class a public methods that returns to current coordinates in this format: 'Coords = [y]|[x]'



// Exercise #3-a
// Create an 'instance' of your battleship



// Exercise #3-b
// Move it to 'Coords = 2|3' and display your coordinates



// Exercise #3-c
// Move it to 'Coords = -1|2' and display your coordinates