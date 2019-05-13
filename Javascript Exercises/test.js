
        function evenOrFalse(x) {
            let msg =""
            if(x % 2 == 0) {
                msg += "The number is even";
            } else {
                msg += "The number is not even";
            }
            return msg;
        }

        console.log(evenOrFalse(7));