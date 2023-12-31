'use strict';
        let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
        ];

        let trunk = users.filter(item => item.id < 3);

        trunk.forEach(item => alert(item.name));

        //map()
        let upp = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.toUpperCase());
        alert(upp);

        //short()
        let sort = [1, -2, 15, 2, 0, 8].sort((a,b) => {return a - b});
        alert(sort);

        //reverse()
        let arr = [1, -2, 15, 2, 0, 8];
        arr.reverse()
        alert(arr);

        //split()
        let names = "John, Pete, Mary";
        let tab = names.split(", ");

        for(let name of tab) {
            alert(`Un message pour ${name}`);
        }

        //join()
        let arr1 = ["Bilbo", "Gandalf", "Nazgul"];
        let arrJoin = arr1.join(';');
        alert(arrJoin);

        //reduce()
        alert('reduce()');
        let arr2 = [1, 2, 3, 4, 5];
        let sumArr = arr2.reduce((sum, item) => sum += item, 0);

        alert(sumArr);