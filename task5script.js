     var tasks = [];
    function validate() {
        if (document.getElementById('addTask').value == "") {
            alert("Add task is required field !");
            return false;
        } else {
            var task = document.getElementById('addTask').value;
            // alert(task);

            addTask = {};
            addTask.task = task;

            tasks.push(addTask);

            // console.log(tasks);
            insertTask();
        }
        clearInput();
    }
    function clearInput() {
        document.getElementById('addTask').value = '';
    }
    function insertTask() {
        var row = "";
        for (let i = 0; i < tasks.length; i++) {
            row += "<tr><td><input type='checkbox' id='comp' onclick='complete(" + i + ")'> " + tasks[i].task + " <input type='text' id='editTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteRow(" + i + ")'>Delete</a>||<a href='#' onclick='editRow(" + i + ")'>Edit</a></td></tr>";
            
        }
        document.getElementById('data').innerHTML = row;
    }



  
    function completedTask() {
        var row = "";
        for (let i = 0; i < donetask.length; i++) {
            row += "<tr><td><input type='checkbox' checked='checked' id='comp' onclick='todo(" + i + ")'> " + donetask[i].comtask + " <input type='text' id='editComTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteComplete(" + i + ")'>Delete</a>||<a href='#' onclick='editComplete(" + i + ")'>Edit</a></td></tr>";
            
        }
        document.getElementById('comdata').innerHTML = row;
    }


    function todo(index) {
        var task = donetask[index].comtask;
        // alert(task);

        addTask = {};
        addTask.task = task;

        tasks.push(addTask);

        uncompletetask();

        donetask.splice(index, 1);
        var row = "";
            for (let i = 0; i < donetask.length; i++) {
                row += "<tr><td><input type='checkbox' checked id='comp' onclick='todo(" + i + ")'> " + donetask[i].comtask + " <input type='text' id='editComTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteComplete(" + i + ")'>Delete</a>||<a href='#' onclick='editComplete(" + i + ")'>Edit</a></td></tr>";
                
            }
            document.getElementById('comdata').innerHTML = row;
    }

    function uncompletetask() {
        // console.log(tasks);
        var row = "";
            for (let i = 0; i < tasks.length; i++) {
                row += "<tr><td><input type='checkbox' id='comp' onclick='complete(" + i + ")'> " + tasks[i].task + " <input type='text' id='editTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteRow(" + i + ")'>Delete</a>||<a href='#' onclick='editRow(" + i + ")'>Edit</a></td></tr>";
                
            }
            document.getElementById('data').innerHTML = row;
    }


    var donetask = [];
    function complete(index) {
        var comtask = tasks[index].task;
        // alert(comtask);
        done = {};
        done.comtask = comtask;
        donetask.push(done);

        completedTask()

            tasks.splice(index, 1);
            // document.getElementById('msg').innerHTML = "Task complete";
            var row = "";
            for (let i = 0; i < tasks.length; i++) {
                row += "<tr><td><input type='checkbox' id='comp' onclick='complete(" + i + ")'> " + tasks[i].task + " <input type='text' id='editTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteRow(" + i + ")'>Delete</a>||<a href='#' onclick='editRow(" + i + ")'>Edit</a></td></tr>";
                
            }
            document.getElementById('data').innerHTML = row;
        

    }


    function deleteRow(index) {
        // alert(index);

        if (confirm('Are You Sure Want To Delete...?')) {
            tasks.splice(index, 1);
            // document.getElementById('msg').innerHTML = "Delete Successfully";

            var row = "";
            for (let i = 0; i < tasks.length; i++) {
                row += "<tr><td><input type='checkbox' id='comp' value='"+ tasks[i].task +"' onclick='complete(" + i + ")'> " + tasks[i].task + " <input type='text' id='editTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteRow(" + i + ")'>Delete</a>||<a href='#'  onclick='editRow(" + i + ")'>Edit</a></td></tr>";
            
            }
            document.getElementById('data').innerHTML = row;
        }
    }

    function deleteComplete(index) {
        // alert(index);

        if (confirm('Are You Sure Want To Delete...?')) {
            donetask.splice(index, 1);
            // document.getElementById('msg').innerHTML = "Delete Successfully";

            var row = "";
            for (let i = 0; i < donetask.length; i++) {
                row += "<tr><td><input type='checkbox' id='comp' checked='checked' onclick='todo(" + i + ")'> " + donetask[i].comtask + " <input type='text' id='editComTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteComplete(" + i + ")'>Delete</a>||<a href='#' onclick='editComplete(" + i + ")'>Edit</a></td></tr>";
            
            }
            document.getElementById('comdata').innerHTML = row;
        }
    }


    function editRow(index) {
        // alert(index);
        if (document.getElementById('editTask'+index+'').value == "") 
        {

        innerTask = tasks[index].task;
        // alert(innerTask);
        document.getElementById('editTask'+index+'').value = innerTask;

        console.log(tasks);
        } else {
            var inputVal = document.getElementById('editTask'+index+'').value;
        tasks[index].task = inputVal;
        console.log(tasks);

        var row = "";
        for (let i = 0; i < tasks.length; i++) {
            row += "<tr><td><input type='checkbox' id='comp' value='"+ tasks[i].task +"' onclick='complete(" + i + ")'> " + tasks[i].task + " <input type='text' id='editTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteRow(" + i + ")'>Delete</a>||<a href='#' onclick='editRow(" + i + ")'>Edit</a></td></tr>";
            
        }
        document.getElementById('data').innerHTML = row;
        }

    }

    function editComplete(index) {
        // alert(index);

        if (document.getElementById('editComTask'+index+'').value == "") 
        {

        innerTask = donetask[index].comtask;
        // alert(innerTask);
        document.getElementById('editComTask'+index+'').value = innerTask;

        console.log(tasks);
        } else {
            var inputVal = document.getElementById('editComTask'+index+'').value;
        donetask[index].comtask = inputVal;
        console.log(tasks);

        var row = "";
        for (let i = 0; i < donetask.length; i++) {
            row += "<tr><td><input type='checkbox' checked id='comp' onclick='todo(" + i + ")'> " + donetask[i].comtask + " <input type='text' id='editComTask"+ i+"' class='form-control'></td><td><a href='#' onclick='deleteComplete(" + i + ")'>Delete</a>||<a href='#' onclick='editComplete(" + i + ")'>Edit</a></td></tr>";
            
        }
        document.getElementById('comdata').innerHTML = row;
        }
    }