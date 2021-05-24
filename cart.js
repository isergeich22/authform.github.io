const productList = document.getElementById("product_list_hidden");
        let tAmount = 0;
        let tCount = 0;
        let title;
        let li;
        let ul = document.getElementById("nameList");
        
        let _name1;

        const Show = () => {

                tCount += parseInt(document.getElementById("quantity").value);                
                console.log(tCount);    
                if(isNaN(tCount)) tCount = 0;
                else {
                    if(tCount != 0){
                        productList.id = "product_list_block";
                        let _name = document.getElementById("title").innerHTML;
                        let _amount = document.getElementById("totalAmount");
                        let _count = document.getElementById('count');

                        if(_name != _name1){
                            li = document.createElement('li');
                            li.innerHTML = '<p class="card-title" id="name">' + _name + '</p>';

                            ul.append(li);
                        }                    
                        tAmount += cnt * parseInt(document.getElementById("price").innerHTML);                                             
                        _amount.innerHTML = tAmount + " ₽ RUB";
                        _count.innerHTML = tCount;

                        _name1 = _name;

                    }else {
                        productList.id = "product_list_hidden";
                    }
                }
                

            }
        const closeCart = () => {

            productList.id = "product_list_hidden";
            tCount = document.getElementById("quantity");
            tCount.value = 0;
            tAmount = null;

        }
                    
            
        
