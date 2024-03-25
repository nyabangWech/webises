
var count = document.getElementsByClassName("count");
        var inc = [];
        function intervalFun() {
            for (let i = 0; i < count.length; i++) {
                inc.push(1);
                if (inc[i] != count[i].getAttribute("max-data")) {
                    inc[i]++;
                }
                count[i].innerHTML = inc[i];
            }
        }
        setInterval(intervalFun, 200);
        
